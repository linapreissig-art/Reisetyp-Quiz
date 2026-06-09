const cards = document.querySelectorAll(".card");
const result = document.getElementById("result");

let selectedType = "";

cards.forEach(card => {

    card.addEventListener("click", () => {

        cards.forEach(c =>
            c.classList.remove("active")
        );

        card.classList.add("active");

        selectedType = card.dataset.type;
    });

});

document.getElementById("nextBtn")
.addEventListener("click", () => {

    const profiles = {

        discover: {
            title: "Du bist der Entdecker",
            text: "Du liebst Kultur, Geschichte und neue Städte.",
            destination: "Rom • Lissabon • Athen"
        },

        adventure: {
            title: "Du bist der Abenteurer",
            text: "Action, Berge und Outdoor-Erlebnisse begeistern dich.",
            destination: "Island • Norwegen • Patagonien"
        },

        relax: {
            title: "Du bist der Genießer",
            text: "Erholung und Entspannung stehen für dich im Mittelpunkt.",
            destination: "Malediven • Bali • Kreta"
        },

        freedom: {
            title: "Du bist der Freigeist",
            text: "Spontane Roadtrips und individuelle Reisen passen zu dir.",
            destination: "Kalifornien • Neuseeland • Kanada"
        }
    };

    if(!selectedType){
        alert("Bitte wähle eine Antwort aus.");
        return;
    }

    const p = profiles[selectedType];

    result.innerHTML = `
        <div class="result-box">

            <img src="images/result.jpg"
                 alt="${p.title}">

            <div class="result-content">

                <h2>${p.title}</h2>

                <p>${p.text}</p>

                <h3>Empfohlene Reiseziele</h3>

                <p>${p.destination}</p>

                <button class="btn-primary">
                    Mehr Infos
                </button>

            </div>

        </div>
    `;

    result.classList.remove("hidden");

    result.scrollIntoView({
        behavior:"smooth"
    });

});
