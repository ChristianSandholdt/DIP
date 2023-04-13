let watch;
//Create buttons for stopwatch
function createButtons(){
    //Laver to knapper
    const startButton = document.createElement("button");
    const stopButton = document.createElement("button");
    const clearButton = document.createElement("button");
    let tid = document.createElement("p");
    //Giv knapperne navne og sæt tiden til 0 som start
    stopButton.textContent = "Stop"
    startButton.textContent = "Start"
    clearButton.textContent = "Clear"
    tid.textContent = 0;
    //Sæt ovenstående ind på siden
    document.body.appendChild(startButton);
    document.body.appendChild(stopButton);
    document.body.appendChild(clearButton);
    document.body.appendChild(tid);
    //Ved tryk på startButton, kaldes metoden countSeconds en gang i sekundet
    startButton.onclick = async function() {
        startButton.disabled = true;
        watch = setInterval(countSeconds, 1);
        let start = Date.now();
        function countSeconds(){
            let now = Date.now();
            tid.innerHTML = now - start;
        }
    }
    stopButton.onclick = async function() {
        startButton.disabled = false;
        clearInterval(watch);
    }
    clearButton.onclick = async function(){
        startButton.disabled = false;
        clearInterval(watch);
        seconds = 0;
        tid.innerHTML = 0;
    }
    document.body.appendChild(tid);
}

createButtons();


