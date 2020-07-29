const greenBtn = document.querySelector("#green-btn");
greenBtn.addEventListener('click', e => {
    console.log("Switching theme");
    document.documentElement.setAttribute('theme', 'green');
});

const blueBtn = document.querySelector("#blue-btn");
blueBtn.addEventListener('click', e => {
    console.log("Switching theme");
    document.documentElement.setAttribute('theme', 'blue');
});

const darkBtn = document.querySelector("#dark-btn");
darkBtn.addEventListener('click', e => {
    console.log("Switching theme");
    document.documentElement.setAttribute('theme', 'dark');
});

const lightBtn = document.querySelector("#light-btn");
lightBtn.addEventListener('click', e => {
    console.log("Switching theme");
    document.documentElement.setAttribute('theme', 'light');
});