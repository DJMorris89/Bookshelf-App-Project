const bookmarks1 = document.querySelector(".bookmarks");
function Book(authors, language, subject, title) {
  this.authors = authors;
  this.language = language;
  this.subject = subject;
  this.title = title;
 

  
  this.thelibrary = function () {
    
    const ul1 =document.createElement('ul');
    
    const li =document.createElement('li');
    ul1.appendChild(li);
  
    
   
    
    //creating the li elements for each area
    const liMore = document.createElement('li');
    const liMore1 = document.createElement('li');
    const liMore2 = document.createElement('li');
    
    // apending child to the li parent that is going to be showing.
    ul1.appendChild(liMore);
    ul1.appendChild(liMore1);
    ul1.appendChild(liMore2);
    
    // adds a class to the hidden  text content elements.
    
    
    liMore.classList.add(`more`);
    liMore1.classList.add(`more`);
    liMore2.classList.add(`more`);
    
  
    li.textContent = `Title: ${this.title}`;
    
    liMore.style.display = 'none';
    liMore1.style.display = 'none';
    liMore2.style.display = 'none';
    
     //Items are hidden to be shown when i press the read more button.
    
    liMore.textContent=`Author: ${this.authors}`;
    liMore1.textContent=`Language: ${this.language}`;
    liMore2.textContent=`Subject: ${this.subject}`;
    
    // creation of the read more button 
    
    const btn = document.createElement('button');
    li.appendChild(btn);
    btn.classList.add('btn');
    btn.textContent = '... Read More';
    btn.style.border = 'none'
        
    
    btn.addEventListener('click', () =>{
      if(liMore.style.display === 'none'){
        liMore.style.display = "";
        liMore1.style.display = "";
        liMore2.style.display = "";
        btn.textContent = "...Read less";
      
      }else {
        liMore.style.display = "none";
        liMore1.style.display = "none";
        liMore2.style.display = "none";
        btn.textContent= "...Read More";
       
      }
    
    });
    
    // area to add the bookmark value 
    const btn2 = document.createElement('button');
    li.prepend(btn2);
    btn2.classList.add('bookMa');
    btn2.textContent = '⭐Bookmark';
    
    btn2.booleanValue = true;
    btn2.addEventListener('click', () =>{
    
      if (btn2.textContent==='⭐Bookmark'){
        
        btn2.textContent= '⭐';
      }
    else{btn2.textContent= '⭐Bookmark';}
       
        
    })
   
   // like button 👍
   
    const likebtn = document.createElement('button');
    ul1.appendChild(likebtn);
    likebtn.classList.add('btn');
    likebtn.textContent = '👍Like';
    likebtn.style.border = 'none'
    
   
     likebtn.addEventListener('click', () => {
   if(likebtn.textContent ==='👍Like'){
     likebtn.textContent = '👍(1)';
   } else{
     likebtn.textContent = '👍Like';
   }
     })
   
   
   // commment buttom 🗨️
   
    const combtn = document.createElement('button');
    ul1.appendChild(combtn);
    combtn.classList.add('btn');
    combtn.textContent = '🗨️Comment';
    combtn.style.border = 'none'
    
    
    const commentsul = document.createElement('ul');
    commentsul.classList.add= 'commentsul';
    ul1.appendChild(commentsul);
     commentsul.style.marginTop = '20px';
     commentsul.style.marginBottom = '20px';
     commentsul.style.display='none';
   
    
    const comments = document.createElement('input');
    comments.placeholder = 'write your comment'
    comments.type = 'text';
    comments.classList.add= 'comments';
    commentsul.appendChild(comments);
    
   
   
    const commentsbtn = document.createElement('button');
    commentsbtn.classList.add= 'comments';
    commentsul.appendChild(commentsbtn);
    commentsbtn.textContent = 'Sent 🖅'
    commentsbtn.style.color = 'blue'
   
   
   const commentsp = document.createElement('p');
   commentsul.prepend(commentsp);
   
   combtn.addEventListener('click', ()=> {
   
   if(commentsul.style.display==='none'){
     commentsul.style.display = '';
   
     
       
   }
   else{
     
     commentsul.style.display = 'none';
      commentsp.textContent= '';
     
   }
   
   })
   
   commentsbtn.addEventListener('click', () =>{
     if(comments.value.length>0 & comments.value.length<=280){
   
       const commentsli = document.createElement('li');
       commentsul.appendChild(commentsli);
       commentsli.classList.add='commentsli';
      commentsli.textContent=`➲...${comments.value}`;
      
      commentsli.style.maxWidth='400px';
      commentsli.style.marginTop = '10px';
      commentsli.style.listStyle = 'none';
      comments.value='';
      commentsp.textContent= 'comment posted!';
      commentsp.style.color = 'green';
     }
     else{
    commentsp.textContent= 'text cannot be 0 or more than 280 carachters long.';
    commentsp.style.color = 'red';
    }
     })
   
    return  ul1;
  };
}