class ShiftCipher {
  constructor(value) {
    this.value = value;
  }

  encrypt(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      let charCode = str.charCodeAt(i);

      if (
        (charCode >= 65 && charCode <= 90) ||
        (charCode >= 97 && charCode <= 122) ||
        charCode === 32
      ) {
        result += String.fromCharCode(charCode + this.value);
      }
    }
    return result.toUpperCase();
  }
}

const cipher = new ShiftCipher(2);
console.log(cipher.encrypt("I love to code!"));
