function Bookshelf(htmlElement, books = []) {
   this.books = books;
   this.htmlElement = htmlElement;
   this.visibleBooks = books;
 
  
   this.seed = function (data) {
    
     data.forEach((bookInfo) => {
       const book = new Book(
         bookInfo.author,
         bookInfo.language,
         bookInfo.subject,
         bookInfo.title
       );
       this.addBook(book);
     });
 
    
     this.visibleBooks = this.books;
     this.sortVisibleBooks((a, b) => a.title.localeCompare(b.title));
 
     this.thelibrary();
   };
 
  
 
   
   this.addBook = function (book) {
     this.books.push(book);
   };
 
   
   this.thelibrary = function () {
     
     const ul = document.createElement("ul");
     const books = this.visibleBooks.map((b) => b.thelibrary());
     ul.replaceChildren(...books);
     this.htmlElement.replaceChildren(ul);
   };
 
  
 
   this.filterVisibleBooks = function (criteria) {
     this.visibleBooks = this.books.filter(criteria);
     this.thelibrary();
   };
 
   this.sortVisibleBooks = function (compareFn) {
     this.visibleBooks.sort(compareFn);
     this.thelibrary();
   };
   this.pushVisibleBooks= function (pushBooks){
     this.visibleBooks.push(pushBooks);
     this.thelibrary();
   }
   
 }