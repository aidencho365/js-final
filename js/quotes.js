const quotes = [
    {
        quote: "전쟁을 피하는 동시에 준비할 수는 없다",
        eng: "You cannot simultaneously prevent and prepare for war",
        author: "알버트 아인슈타인 / Albert Einstein",
    },
    {
        quote: "비폭력은 인류가 활용할 수 있는 가장 강력한 힘이다",
        eng: "Non-violence is the greatest force at the disposal of mankind",
        author: "마하트마 간디 / Mahatma Gandhi",
    },
    {
        quote: "늙은이들이 전쟁을 선포한다. 그러나 싸워야 하고 죽어야 하는 것은 젊은이들이다",
        eng: "Older men declare war. But it is youth that must fight and die",
        author: "허버트 후버 / Herbert Hoover",
    },
    {
        quote: "전쟁이란 군에 맡기기에는 너무나도 심각한 문제이다",
        eng: "War is much too serious a matter to be entrusted to the military",
        author: "조지 클레망소 / Georges Clemenceau",
    },
    {
        quote: "전쟁에는 준우승자를 위한 이등상이 없다",
        eng: "In war there is no second prize for the runner-up",
        author: "오마 브래들리 / Omar Bradley",
    },
    {
        quote: "죽고자 하면 살고, 살고자 하면 죽는다",
        eng: "Those who seek death shall live, those who seek life shall die",
        author: "이순신 / General Yi Sunsin",
    },
    {
        quote: "우리는 평화롭게 살기 위해 전쟁을 치른다",
        eng: "We make war that we may live in peace",
        author: "아리스토 텔레스 / Aristoteles",
    },
    {
        quote: "모든 전쟁은 적을 속이는 데서 시작한다",
        eng: "All warfare is based on deception",
        author: "손자 / Sun Tzu",
    },
    {
        quote: "적을 알고 나를 알면 백 번의 전투도 두렵지 않다",
        eng: "If you know the enemy and know yourself, you need not fear the result of hundred battles",
        author: "손자 / Sun Tzu",
    },
    {
        quote: "승리하면 천 명이 공치사를 하고, 패배하면 고아처럼 한 사람이 뒤집어쓴다",
        eng: "Victory has a thousand fathers; defeat is an orphan",
        author: "존 F. 케네디 / John F. Kennedy",
    }
];

const quote = document.querySelector("#qb-quote");
const quoteEng = document.querySelector("#qb-quote-eng")
const author = document.querySelector("#qb-author");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
quoteEng.innerText = todaysQuote.eng;
author.innerText = todaysQuote.author;