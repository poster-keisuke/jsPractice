function* rainbow() {
  yield 'red';
  yield 'orange';
  yield 'yellow';
  yield 'green';
  yield 'blue';
  yield 'light blue';
  yield 'purple';
  return 'reinbow';
}

const color = rainbow();
console.log(color.next());
console.log(color.next());
console.log(color.next());
console.log(color.next());
console.log(color.next());
console.log(color.next());
console.log(color.next());
console.log(color.next());
