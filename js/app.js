let counter = 0
const timer = setInterval(() => {
    console.log(counter)
    counter++;
    if (counter === 9) {
        clearInterval(timer);
    }
}, 1000);
const div = document.getElementById

const divs = document.getElementsByTagName('counter')



