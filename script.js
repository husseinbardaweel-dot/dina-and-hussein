
function checkPassword() {
    const password = document.getElementById("password").value;

    if (password === "fromhusseintodina") {
        document.querySelector(".login").style.display = "none";
        document.getElementById("website").style.display = "block";
        updateCounter();
    } else {
        document.getElementById("wrong").innerHTML = "Wrong Password ❤️";
    }
}

function updateCounter() {
    const startDate = new Date("2026-06-15");
    const today = new Date();

    const difference = today - startDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    document.getElementById("counter").innerHTML =
        days + " Days Together ❤️";
}