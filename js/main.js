let previousQuote = null;
let quotes = [{
    quote: `Be yourself; everyone else is already taken.`,
    author: `Oscar Wilde`,
},
{
    quote: `In three words I can sum up everything I've learned about life: it goes on.`,
    author: `Robert Frost`,
},
{
    quote: `So many books, so little time.`,
    author: `Frank Zappa`,
},
{
    quote: `You miss 100% of the shots you don't take.`,
    author: `Wayne Gretzy`,
},
{
    quote: `A room without books is like a body without a soul.`,
    author: `Marcus Tullius Cicero`,
},
{
    quote: `Do not take life too seriously. You will not get out alive.`,
    author: `Elbert Hubbard`,
},
{
    quote: `It's not what happens to you, but how you react to it that matters.`,
    author: `Epictetus`,
},
{
    quote: `The best revenge is massive success.`,
    author: `Frank Sinatra`,
},
{
    quote: `You only live once, but if you do it right, once is enough.`,
    author: `Mae West`,
},
{
    quote: `Be the change that you wish to see in the world.`,
    author: `Mahatma Gandhi`,
}]
function addQuote() {
    let randomNum = Math.floor(Math.random() * (quotes.length));
    let newQuote = quotes[randomNum];
    if (newQuote !== previousQuote) {
        x = document.getElementById("addQuote").innerHTML = quotes[randomNum].quote
        y = document.getElementById("addAuthor").innerHTML = quotes[randomNum].author
        previousQuote = newQuote;
    }
    else {
        addQuote()
    }

}
function Tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + x + "---by " + y, "Tweet Window", "width=600,height=300");
}