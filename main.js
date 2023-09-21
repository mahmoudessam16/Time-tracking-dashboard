let allActions = document.querySelectorAll(".start h3");
let btns = document.querySelectorAll("button");
let previouses = document.querySelectorAll(".previous");
let currents = document.querySelectorAll(".hours");
let times = document.querySelectorAll(".time");

btns[1].style.color = "white";


fetch('./data.json')
.then(res => res.json())
.then(data => {
    let actionNames = [];
    for (let i = 0; i < data.length; i++) {
        actionNames.push(data[i].title)
    }

    btns.forEach(btn => {
        btn.addEventListener("click", function () {
            btns.forEach(btn => {
                btn.style.color = 'hsl(235, 45%, 61%)';
            });
            this.style.color = "white";
            
            times.forEach(time => {
                if (this.dataset.time === 'daily') {
                    time.textContent = "Yesterday";
                } else if (this.dataset.time === 'weekly') {
                    time.textContent = "Last Week";
                } else if (this.dataset.time === 'monthly') {
                    time.textContent = "Last Month";
                }
            });

            for (let i = 0; i < data.length; i++) {
                previouses[i].textContent = data[i].timeframes[this.dataset.time].previous;
            }
            for (let i = 0; i < data.length; i++) {
                currents[i].textContent = `${data[i].timeframes[this.dataset.time].current}hrs`;
            }
        });
    });

    for (let i = 0; i < actionNames.length; i++) {
        allActions[i].textContent = actionNames[i];
    }
});