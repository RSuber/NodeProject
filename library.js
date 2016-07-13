
function Library() {
  this.books = [
    {title: "Book 1", author: "Person A", borrowed: false, id:0},
    {title: "Book 2", author: "Person B", borrowed: false, id:1},
    {title: "Book 3", author: "Person C", borrowed: false, id:2},
    {title: "Book 4", author: "Person D", borrowed: false, id:3},
    {title: "Book 5", author: "Person E", borrowed: false, id:4},
    {title: "Book 6", author: "Person F", borrowed: false, id:5},
    {title: "Book 7", author: "Person G", borrowed: false, id:6},
  ];
  return this;
}
 Library.prototype.getAll = function(){
   return this.books;
 };
