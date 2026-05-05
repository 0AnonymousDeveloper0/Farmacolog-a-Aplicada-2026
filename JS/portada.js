const equipos = {
    5: [
        "Basulto Jonathan",
        "Euan Uc Mario Moises",
        "Santana Herrera Sofía",
        "Sosa Mendoza Yasser Aaron"
    ],
    6: [
        "Cadena Abigail Guadalupe",
        "Canul Domínguez José Ángel",
        "Cauich Rodríguez Shareni Michel",
        "Poot Ucan Pablo Isaac"
    ],
    7: [
        "Echalaz Montero Mauricio Alejandro",
        "Flores Gonzáles Karla Natalia",
        "Hernández Mota Ulises Alberto",
        "Poot Novelo Diego Benjamín"
    ],
    8: [
        "Caamal Uc Jotsan Jassiel",
        "Martín Castillo David Jesús",
        "Moguel Castellanos Sugely Mariana",
        "Rodríguez Echeverría Erik Jesús"
    ]
};

const equipoPanel = document.getElementById("equipo-panel");
const equipoTitulo = document.getElementById("equipo-titulo");
const equipoLista = document.getElementById("equipo-lista");
const equipoButtons = document.querySelectorAll(".equipo-btn");
let activeEquipo = null;

function showEquipo(equipoId) {
    if (activeEquipo === equipoId) {
        activeEquipo = null;
        equipoPanel.classList.add("hidden");
        equipoButtons.forEach((button) => button.classList.remove("active"));
        return;
    }

    activeEquipo = equipoId;
    equipoTitulo.textContent = `Equipo ${equipoId}`;
    equipoLista.innerHTML = "";

    equipos[equipoId].forEach((nombre) => {
        const item = document.createElement("li");
        item.textContent = nombre;
        equipoLista.appendChild(item);
    });

    equipoButtons.forEach((button) => {
        button.classList.toggle("active", button.dataset.equipo === equipoId);
    });

    equipoPanel.classList.remove("hidden");
}

equipoButtons.forEach((button) => {
    button.addEventListener("click", () => showEquipo(button.dataset.equipo));
});
