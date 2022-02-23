


// let book=document.createElement("div")
// book.setAttribute("id","book")
// book.classList.add("row")
// document.getElementById("element").appendChild(book)

// let bname=document.createElement("div")
// bname.setAttribute("id","name")
// bname.innerText="NAME"
// bname.classList.add("col-2")
// document.getElementById("book").appendChild(bname)

// let isbn=document.createElement("div")
// isbn.setAttribute("id","isbn")
// isbn.innerText="ISBN"
// isbn.classList.add("col-2")
// document.getElementById("book").appendChild(isbn)

// let nop=document.createElement("div")
// nop.setAttribute("id","nop")
// nop.innerText="NO OF PAGES"
// nop.classList.add("col-1")
// document.getElementById("book").appendChild(nop)

// let author=document.createElement("div")
// author.setAttribute("id","author")
// author.innerText="AUTHOR"
// author.classList.add("col-2")
// document.getElementById("book").appendChild(author)

// let pubname=document.createElement("div")
// pubname.setAttribute("id","publisher")
// pubname.innerText="PUBLISHER"
// pubname.classList.add("col-2")
// document.getElementById("book").appendChild(pubname)

// let rdate=document.createElement("div")
// rdate.setAttribute("id","rdate")
// rdate.innerText="RELESE DATE"
// rdate.classList.add("col-1")
// document.getElementById("book").appendChild(rdate)

// let characters=document.createElement("div")
// characters.setAttribute("id","chart")
// characters.innerText="CHARACTERS"
// characters.classList.add("col-2")
// document.getElementById("book").appendChild(characters)


// fetch("https://www.anapioficeandfire.com/api/books")
// .then((x)=>x.json())
// .then((response)=>{
//     console.log(response)
    
//     response.map((x)=>{
//         let bname=createElement("name")
//         bname.innerText=x.name; 
//         document.getElementById("element").appendChild(bname)
//     })
// })
// .catch((err)=>console.error(err));


let element = document.getElementById('element');
element.classList.add("row")

fetch("https://www.anapioficeandfire.com/api/books")
.then((x)=>x.json())
.then((response)=>{
    console.log('response' , response)
    response.map((x)=>{
        let card1 = document.createElement('div')
        card1.setAttribute('class', 'card');
        card1.classList.add("col-2","fw-bold","text-primary")
        card1.innerHTML="BOOK NAME"
        

        let card2 = document.createElement('div')
        card2.setAttribute('class', 'card');
        card2.classList.add("col-2","fw-bold","text-secondary")
        card2.innerHTML="ISBN NO"
        
        
        let card3 = document.createElement('div')
        card3.setAttribute('class', 'card');
        card3.classList.add("col-1","text-warning","fw-bold")
        card3.innerHTML="NO OF PAGES"

        let card4 = document.createElement('div')
        card4.setAttribute('class', 'card');
        card4.classList.add("col-2","text-danger","fw-bold")
        card4.innerHTML="AUTHOR"
       
        
        let card5 = document.createElement('div') 
        card5.setAttribute('class', 'card');
        card5.classList.add("col-2","text-info","fw-bold")
        card5.innerHTML="PUBLISHER"
        
        let card6 = document.createElement('div') 
        card6.setAttribute('class', 'card');
        card6.classList.add("col-2","text-success","fw-bold")
        card6.innerHTML="RELEASED"
        
  

         let name = document.createElement('p');
        name.innerHTML = x.name;
        
        
         let isbn = document.createElement('p')
         isbn.innerHTML = x.isbn

         let numberOfPages = document.createElement('p')
         numberOfPages.innerHTML = x.numberOfPages

         let authors = document.createElement('p')
         authors.innerHTML = x.authors
       
        let publisher = document.createElement('p')
        publisher.innerHTML = x.publisher

        let released = document.createElement('p')
        released.innerHTML = x.released
        
   
        card1.appendChild(name)
        card2.appendChild(isbn)
        card3.appendChild(numberOfPages)
        card4.appendChild(authors)
        card5.appendChild(publisher)
        card6.appendChild(released)
       // card7.appendChild(characters)
        element.appendChild(card1)
        element.appendChild(card2)
        element.appendChild(card3)
        element.appendChild(card4)
        element.appendChild(card5)
        element.appendChild(card6)
       // element.appendChild(card7)
    })
})
.catch((err)=>console.error(err))








