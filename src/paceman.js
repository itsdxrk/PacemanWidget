let paceman = document.getElementById('paceman');
let text = document.getElementById('text');

paceman.addEventListener("click", animateonce);

function animateonce() {
    paceman.classList.add("fadein");
    setTimeout(() => {
        paceman.classList.remove("fadein");
    }, 1500);
}

paceman.addEventListener("animationend", postanimation);

function postanimation() {
    paceman.classList.add("postanim");

    setTimeout(() => {
        paceman.classList.remove("fadein");
    }, 1500);
}

async function getAPIData() {
    const response = await fetch("https://paceman.gg/api/ars/liveruns", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })
    return (response.json());
}

function displayPlayer() {
    getAPIData().then(response => {
        text.textContent = response[1]["nickname"];
    }).catch(error => {
        console.error("Error:", error);
    })
}

setInterval(displayPlayer(), 3000);