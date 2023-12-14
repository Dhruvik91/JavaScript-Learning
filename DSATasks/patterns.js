/* Pattern 1 */

function pattern1(n) {
    //****
    //****
    //****
    //****
    //****

    for (let i = 0; i < n; i++) {
        let pattern = '';
        for (let j = 0; j < n; j++) {
            pattern += "*";
        }
        console.log(pattern);
    }
}

/* Pattern 2 */

function pattern2(n) {
    //*
    //**
    //***
    //****
    //*****
    for (let i = 1; i <= n; i++) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            pattern += "*";
        }
        console.log(pattern);
    }
}

/* Pattern 3 */

function pattern3(n) {
    //1
    //12
    //123
    //1234
    //12345
    for (let i = 1; i <= n; i++) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            pattern += j;
        }
        console.log(pattern);
    }
}

/* Pattern 4 */

function pattern4(n) {
    //1
    //22
    //333
    //4444
    //55555
    for (let i = 1; i <= n; i++) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            pattern += i;
        }
        console.log(pattern);
    }
}

/* Pattern 5 */

function pattern5(n) {
    //*****
    //****
    //***
    //**
    //*
    for (let i = n; i > 0; i--) {
        let pattern = '';
        for (let j = i; j > 0; j--) {
            pattern += "*";
        }
        console.log(pattern);
    }
}

/* Pattern 6 */

function pattern6(n) {
    //12345
    //1234
    //123
    //12
    //1
    for (let i = n; i > 0; i--) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            pattern += j;
        }
        console.log(pattern);
    }
}

/* Pattern 7 */

function pattern7(n) {
    //    *
    //   ***
    //  *****
    // *******
    //*********
    for (let i = 0; i < n; i++) {
        let pattern = '';
        for (let j = 1; j <= n - i - 1; j++) {
            pattern += " ";
        }
        for (let j = 1; j <= (2 * i) + 1; j++) {
            pattern += "*";
        }
        console.log(pattern);
    }
}

/* Pattern 8 */

function pattern8(n) {
    //*********
    // *******
    //  *****
    //   ***
    //    *
    for (let i = 1; i <= n; i++) {
        let pattern = '';
        for (let j = 0; j < i; j++) {
            pattern += " ";
        }
        for (let j = 0; j < (2 * n) - (2 * i) + 1; j++) {
            pattern += "*";
        }
        console.log(pattern);
    }
}

/* Pattern 9 */

function pattern9(n) {
    //    *
    //   ***
    //  *****
    // *******
    //*********
    //*********
    // *******
    //  *****
    //   ***
    //    *
    pattern7(n);
    pattern8(n);
}

/* Pattern 10 */

function pattern10(n) {
    //*
    //**
    //***
    //****
    //*****
    //****
    //***
    //**
    //*

    for (let i = 1; i <= 2 * n - 1; i++) {

        let stars = i;
        let pattern = "";
        if (i > n) stars = 2 * n - i;

        for (let j = 1; j <= stars; j++) {
            pattern += "*";
        }
        console.log(pattern);
    }
}

/* Pattern 11 */

function pattern11(n) {
    //1
    //01
    //101
    //0101
    //10101

    for (let i = 1; i <= n; i++) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {

            if (i % 2 !== 0) {
                if (j % 2 !== 0) {
                    pattern += "1";

                } else {
                    pattern += "0";
                }
            } else {
                if (j % 2 == 0) {
                    pattern += "1";

                } else {
                    pattern += "0";
                }
            }
        }
        console.log(pattern);
    }

}

/* Pattern 12  */

function pattern12(n) {

    //1      1  
    //12    21
    //123  321
    //12344321
    let start = 2 * (n - 1);
    for (let i = 1; i <= n; i++) {
        let pattern = "";

        // numbers
        for (let j = 1; j <= i; j++) {
            pattern += j;
        }

        //numbers 

        for (let j = 1; j <= start; j++) {
            pattern += " ";
        }

        // numbers
        for (let j = i; j > 0; j--) {
            pattern += j;
        }
        console.log(pattern);
        start -= 2;
    }
}

/* Pattern 13 */

function pattern13(n) {
    //1
    //23
    //456
    //78910
    //1112131415
    let count = 1;
    for (let i = 1; i <= n; i++) {
        let pattern = "";
        for (let j = 1; j <= i; j++) {
            pattern += count;
            count++;
        }
        console.log(pattern);
    }
}

/* Pattern 14 */

function pattern14(n) {
    //   A
    //  ABA
    // ABCBA
    //ABCDCBA

    for (let i = 0; i < n; i++) {
        let pattern = '';
        let breakPoint = ((2 * i) + 1) / 2;
        let char = "A".charCodeAt(0);

        for (let j = 1; j <= n - i - 1; j++) {
            pattern += " ";
        }

        for (let j = 1; j <= (2 * i) + 1; j++) {

            pattern += String.fromCharCode(char);
            if (j <= breakPoint) {
                char++;
            } else {
                char--
            }
        }

        console.log(pattern);
    }
}


function implementation(m) {

    // pattern1(m);
    // pattern2(m);
    // pattern3(m);
    // pattern4(m);
    // pattern5(m);
    // pattern6(m);
    // pattern7(m);
    // pattern8(m);
    // pattern9(m);
    // pattern10(m);
    // pattern11(m);
    // pattern12(m);
    // pattern13(m);
    // pattern14(m);
}

implementation(5);