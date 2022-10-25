//alert('connected');
//const quote = document.getElementById("quote");

//set up event listener for botton
document.getElementById("quote-btn").addEventListener('click', getQuote)

//set up variables
const quote = document.getElementById("quote");

const author = document.getElementById("author");

//const url = "https://api.quotable.io/random";

/*fetch (url)
.then(response => response.json())
.then(data =>{
    console.log(data);
    console.log(data.content);
    console.log(data.author);
})
*/

function getQuote (){
    //console.log("clicked");
    const url = "https://api.quotable.io/random";
    //fetch data
    fetch (url)
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        console.log(data.content);
        quote.innerHTML = `
            <h3>${data.content}</h3>
            <h1>${data.author}</h1>`;

        console.log(data.author);
    })



}





