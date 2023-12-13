/* PatternL 1 */

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

/* PatternL 2 */

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

/* PatternL 3 */

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

/* PatternL 4 */

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

/* PatternL 5 */

function pattern5(n) {
    //*****
    //****
    //***
    //**
    //*
    for (let i = 5; i > 0; i--) {
        let pattern = '';
        for (let j = i; j > 0; j--) {
            pattern += "*";
        }
        console.log(pattern);
    }
}

/* PatternL 6 */

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

/* PatternL 7 */

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
        for (let j = 1; j <= n - i - 1; j++) {
            pattern += " ";
        }
        console.log(pattern);
    }
}

/* PatternL 8 */

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
        for (let j = 0; j < i; j++) {
            pattern += " ";
        }
        console.log(pattern);
    }
}

/* PatternL 9 */

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









function implementation(m) {

    // pattern1(m);
    // pattern2(m);
    // pattern3(m);
    // pattern4(m);
    // pattern5(m);
    // pattern6(m);
    // pattern7(m);
    // pattern8(m);
    pattern9(m);
}

implementation(5);