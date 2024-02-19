//Baffle
const text = baffle(document.getElementsByClassName(".text__glitch"));
text.set({
    characters: "█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█ ░█▒/ ▒▓░ █<░▒ ▓/░>",
    speed: 120
});
text.start();
text.reveal(4000);