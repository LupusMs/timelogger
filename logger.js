function addInputLine() {
    const root = document.getElementById("root");
    const row = document.createElement("div");
    row.classList.add("row");
    const input = document.createElement("input");
    input.type = 'text';
    const button = document.createElement("button");
    button.innerHTML = "Log";
    button.onclick = () => {
        addLoggedTime(row);
        disableRow(row);
        addInputLine();
    };
    row.appendChild(input);
    row.appendChild(button);
    root.appendChild(row);
}

function addLoggedTime(row) {
    const currentTimeDiv = document.createElement("div");
    currentTimeDiv.classList.add("time");
    const date = new Date();
    currentTimeDiv.innerText = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "." + date.getMilliseconds();
    row.appendChild(currentTimeDiv);
}

function disableRow(row) {
    row.classList.add("disabled");
    row.getElementsByTagName("BUTTON")[0].disabled = true;
}

window.onload = () => {
    initNavbar();
    addInputLine()
};
