let user = {

    Firstname: "Dhruvik",

    say() {
        alert(this.Firstname);
    }


}

user.say();   // Here is the simple object using this keyword.


setTimeout(user.say, 1000); // This will give me the undefined because the "this" is lost here. To solve that kind of problems we have "bind".


setTimeout(user.say.bind(user), 1000); /* here it will give the perfect result i want. "bind" will use to fix the value of "this".
                                            Here it will it (this = user) */ 