
const students = [
    {
        id: 1, name: 'Parth', scores: [85, 100, 88, 92],
    },
    {
        id: 2, name: 'Dhruvik', scores: [78, 86, 80, 88],
    },
    {
        id: 3, name: 'Urva', scores: [92, 94, 89, 96],
    }
];


// ------------------------------------------------------------------------------


function getAverageScores(array) {

    let map = new Array();

    for (let data of array) {

        let sum = data.scores.reduce((ans, curr) => ans + curr, 0);

        let average = sum / data.scores.length;

        // console.log(`The average of student ${data.id} is:`, average);

        let obi = {};
        obi.stud = data.name;
        obi.aver = average;
        map.push(obi);
    }

    return map;

}

// ------------------------------------------------------------------------------

function getStudentName(array) {

    let highestScore = array.map((data) => {

        let names = data.name;

        let maxScore = Math.max(...data.scores);

        console.log(` ${names} has the highest score ${maxScore}`);

    })

    return highestScore;
}


// ------------------------------------------------------------------------------


function getFilteredStudents(array) {

    let marksCriteria = 90;

    let topperStudents = array.filter((marks) => {

        if (Math.max(...marks.scores) >= marksCriteria) {

            return marks.name;
        }
    });

    return (topperStudents);
}


// ------------------------------------------------------------------------------


let newStudentData = { id: 4, name: "Om", scores: [30, 89, 10, 40] };

students.push(newStudentData);


// ------------------------------------------------------------------------------


function removeStudentId(id) {

    students.forEach((data) => {

        if (data.id === id) {

            let indexOfStudent = students.indexOf(data);

            students.splice(indexOfStudent, 1);
        }

    });
    return students;
}

// ------------------------------------------------------------------------------


function sortedStudents(array) {

    let marks = getAverageScores(array);

    marks.sort((a, b) => b.aver - a.aver);

    return marks;
}

// ------------------------------------------------------------------------------

function congratsStudents() {

    students.forEach((student) => {

        let marksCheck = 95;

        if (Math.max(...student.scores) >= marksCheck) {

            console.log(`Congratulation on scoring good marks ${student.name}`);
        }
    })
}


// ------------------------------------------------------------------------------

console.group("TASK: 1");
console.table(getAverageScores(students));
console.groupEnd();


console.group("TASK: 2");
(getStudentName(students));
console.groupEnd();


console.group("TASK: 3");
console.table(getFilteredStudents(students));
console.groupEnd();


console.group("TASK: 4");
console.table(removeStudentId(4));
console.groupEnd();


console.group("TASK: 5");
(congratsStudents());
console.groupEnd();


console.group("TASK: 6");
console.table(sortedStudents(students));
console.groupEnd();


console.group("Students");
console.table(students);
console.groupEnd();

