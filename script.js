`use strict`;

console.log(
    `hello, my name is Stefan Mazare, I know there are some things in the code that looks awfull, but I'm a rookie and I have a lot to learn`
);

const imageDeviloof = document.querySelector(`.image`);

const bleghElement = document.querySelector(`.blegh`);

const clockElement = document.querySelector(`.clock--element`);

const goodOmen = document.querySelector(`.good--omen`);

const morningText = [
    "Good Morning! Time to die for your company",
    "For Satan's sake! You snore like elk on heat!",
    "Sip your bloody coffee, and get to work!",
];

const lunchText = [
    "Tired huh? NOBODY CARES!",
    "Work faster, fat fingers",
    "Have you closed the door?...",
];

const eveningText = [
    "You skipped school, now work when everybody goes home",
    "You've done nothing today, why are they paying you?",
    "The traffic is bad, like always",
];

const nightText = [
    "Sweet dreams are made of theese...",
    "It's a lovely neighborhood, hope you've locked the doors",
    "tomorow might be your last day, you don't wanna be late",
];

const clock = setInterval(() => {
    const now = new Date();

    const hours = (now.getHours() % 12 || 12).toString().padStart(2, 0);

    const minutes = now.getMinutes().toString().padStart(2, 0);

    const seconds = now.getSeconds().toString().padStart(2, 0);

    const amPm = now.getHours() < 12 ? `AM` : `PM`;

    (() => {
        if (seconds % 5 == 0) {
            bleghElement.classList.add(`visible`);
        } else {
            bleghElement.classList.remove(`visible`);
        }
    })();

    clockElement.textContent = `${hours}:${minutes}:${seconds} ${amPm}`;
}, 1000);

const sadButTrue = setInterval(() => {
    const now = new Date();

    let i = Math.floor(Math.random() * 3);

    if ((now.getHours() > 5, now.getHours() < 12)) {
        goodOmen.textContent = morningText[i];
    } else if ((now.getHours() >= 12, now.getHours() < 15)) {
        goodOmen.textContent = morningText[i];
    } else if ((now.getHours() >= 15, now.getHours() < 21)) {
        goodOmen.textContent = eveningText[i];
    } else {
        goodOmen.textContent = nightText[i];
    }
}, 10000);

setTimeout(() => {
    console.log(
        `you should really get back to work... maybe next time, I will show you something with classes and async functions`
    );
}, 50000);