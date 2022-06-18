const quotes = [
    {
        quote: "A",
        author: "김",
    },
    {
        quote: "B",
        author: "이",
    },
    {
        quote: "C",
        author: "박",
    },
    {
        quote: "D",
        author: "최",
    },
    {
        quote: "E",
        author: "정",
    },
    {
        quote: "F",
        author: "홍",
    },
    {
        quote: "G",
        author: "조",
    },
    {
        quote: "H",
        author: "윤",
    },
    {
        quote: "I",
        author: "장",
    },
    {
        quote: "J",
        author: "하",
    }
];

const quote = document.querySelector("#qb-quote");
const author = document.querySelector("#qb-author");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;