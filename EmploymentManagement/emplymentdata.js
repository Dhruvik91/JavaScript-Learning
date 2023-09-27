
class EmployeesData {

    constructor(data) {
        this.EmployeesData = data;
    }
}



class Employees {

    constructor(email, personaInfo, performance) {

        this.email = email;
        this.personaInfo = personaInfo;
        this.performance = performance
    }

    /* addEmployee(email, personaInfo, performance) {

        return {
            email,
            personaInfo,
            performance
        }
    } */
};

class PersonaInfo {

    constructor(name, age, address) {

        this.name = name;
        this.age = age;
        this.address = address
    }
};


class Address {

    constructor(street, city, state) {

        this.street = street,
            this.city = city,
            this.state = state
    }
}

class Performance {

    constructor(quarterlyReview, annualReview) {
        this.quarterlyReview = quarterlyReview;
        this.annualReview = annualReview

    }
}


class QuarterlyReview {

    constructor(...q) {
        this.q = q;

    }

}

class Reviews {

    constructor(rating, feedback) {
        this.rating = rating;
        this.feedback = feedback;
        console.log(Object.freeze(this));
    }
}



class AnnualReview {

    constructor(rating, feedback) {
        this.rating = rating;
        this.feedback = feedback;
    }
}


const address = new Address("123", "Gondal", "Gujarat");

const personalInfo = new PersonaInfo("Dhruvik", "22", address);

const annualReview = new AnnualReview("4", "Works Good");

const Q1 = new Reviews("5", "Good work");

const Q2 = new Reviews("4", "Good by the time");

const Q3 = new Reviews("4", "Cool");

const Q4 = new Reviews("2", "Vice");

const q3 = new QuarterlyReview(Q1, Q2, Q3, Q4);

const performance = new Performance(q3, annualReview);

const employeeOne = new Employees("dhruvikgondaliya@gmail.com", personalInfo, performance);

let employeeData = new EmployeesData(employeeOne);


console.log(employeeData);

