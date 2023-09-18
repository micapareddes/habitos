const addHabitButton = document.getElementById('add-habit')
const dialog = document.getElementById('dialog')

addHabitButton.addEventListener('click', () => {dialog.style.display = "flex"})

function addHabit(inputValue) {
    generateDaysSection(inputValue)
}
function saveHabit() {
    const inputValue = document.getElementById('novo-habito').value;

    if (inputValue === "ex. 1min Streching" || inputValue === empty) {
        alert("Please enter a habit!");  
        return;
    } else {
        addHabit(inputValue);
        dialog.style.display = "none"

        console.log('Adicionado!') 
        return 'Adicionado!'
    }
}