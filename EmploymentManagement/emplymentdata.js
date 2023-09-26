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


class AnnualReview {

    constructor(rating, feedback) {
        this.rating = rating;
        this.feedback = feedback;
    }
}


const address = new Address("123", "Gondal", "Gujarat");

const personalInfo = new PersonaInfo("Dhruvik", "22", address);

const annualReview = new AnnualReview("4", "Works Good");

const performance = new Performance("Good", annualReview);

const employeeOne = new Employees("dhruvikgondaliya@gmail.com", personalInfo, performance);

console.log(employeeOne);

