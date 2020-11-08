function initNavbar() {
    const navbar = document.getElementById("navbar");
    const saveBtn = document.createElement("button");
    saveBtn.innerHTML = "<div>Save<div>";
    const icon = document.createElement("img");
    icon.src = "save-24px.svg";
    saveBtn.appendChild(icon);
    navbar.appendChild(saveBtn);
}
