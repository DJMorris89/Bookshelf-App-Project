const bookshelfElement = document.querySelector(".books");
const bookshelf = new Bookshelf(bookshelfElement);
bookshelf.seed(bookData);


const searchInput = document.querySelector("navINPUT");
const searchBtn = document.querySelector(".searchBtn");


const sortBy = document.querySelector(".sortBy");

sortBy.addEventListener("change", () => {
  const query = sortBy.value;
  let sortFn;

  if (query === "titleaz") {
    sortFn = (a, z) => a.title.localeCompare(z.title);
  } else if (query === "titleza") {
    sortFn = (a, z) => z.title.localeCompare(a.title);
  }

  bookshelf.sortVisibleBooks(sortFn);
});

// addbooks section


document.getElementById("addbookbtn").onclick = function() {bookbtn()};
const libook= document.createElement('li');
  
function bookbtn (){
  const myAddedBooks = document.querySelector('#myaddedbooks');
  const fillAll = document.querySelector('.Fillall');
const addTitle = document.querySelector('#addTitle');
const addAuthor = document.querySelector('#addauthor');
const addLenguage = document.querySelector('#addlenguage');
const addSubject = document.querySelector('#addsubject');

 let AddingBooks;
if (addAuthor.value.length > 0 & addTitle.value.length>0 & addLenguage.value.length>0 & addSubject.value.length>0){

AddingBooks = new Book(addTitle.value, addAuthor.value, addLenguage.value, addSubject.value);
bookData.unshift(AddingBooks);


addTitle.value='';
addAuthor.value='';
addLenguage.value='';
addSubject.value='';
fillAll.style.color='green';
fillAll.textContent = 'Book has been submited!';

}
else{
 fillAll.textContent = 'Add book information';
 addTitle.value='';
addAuthor.value='';
addLenguage.value='';
addSubject.value='';
fillAll.style.color='black';
}
bookshelf.pushVisibleBooks(AddingBooks)
return AddingBooks;
}
