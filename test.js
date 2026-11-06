class MyArray {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
  }

  reverseString(string) {
    let stringArr = string.split('');
    let reversed = stringArr.reverse();
    return reversed.join('');
  }

  reverseStringLoop(name) {
    let reversed = '';
    for (let i = name.length - 1; i >= 0; i--) {
      reversed += name[i]
    }
    return reversed;
  }

  shift() {
    let item = this.data[0];
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.length--;
    delete this.data[this.length];
    return item;
  }


  delete(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.length--;
    delete this.data[this.length];
  }


}


const MyArrayObj = new MyArray();

MyArrayObj.push("Ajith");
MyArrayObj.push("Vijay");
MyArrayObj.push("Rajini");
MyArrayObj.push("Kamal");
MyArrayObj.push("Vimal");
// console.log(MyArrayObj.reverseString("Sujith"))
// console.log(MyArrayObj.reverseStringLoop("Captain"))
// console.log(MyArrayObj)
// MyArrayObj.delete(2);
console.log(MyArrayObj)
console.log(MyArrayObj.shift());
console.log(MyArrayObj)
