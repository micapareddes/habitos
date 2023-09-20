const createNewHabitButton = document.getElementById('add-habit-button')
const saveHabitButton = document.getElementById('save-habit-button')

function habitInputIsValid(habitName) {
    const inputValueIsEmpty = habitName === "" || habitName === " "
    // const inputIsTooShort = inputHabitValue.lenght() < 3 //mover para outra funcao que pergunta se tem ctz que quer adicionar
    const habitNameArray = getLocalStorageData('habitNameArray')
    const habitAlreadyExists = habitNameArray.includes(habitName)
    if (inputValueIsEmpty) {
        alert("Please enter a habit!")
        return false
    } 
    if (habitAlreadyExists) {
        alert("Habit already exists!")
        return false
    } 
    return true
}
function saveHabit() {
    const habitName = document.getElementById('new-habit-input').value;
    if (habitInputIsValid(habitName)) {
        const habitNameArray = addHabitNameToArray(habitName)
        if (habitNameArray[0] === habitName){
            newHabit(habitName)
        } else{
            newHabit(habitName)
            const section = document.getElementById(habitName)
            const dateDiv = section.querySelectorAll('.date-div')
            dateDiv.forEach(dateDiv => {dateDiv.style.display = "none"})
        }
        closeDialog()

        
    }
}
function alwaysExibitHabits() {
    let habitNameArray = getLocalStorageData('habitNameArray')
    habitNameArray.forEach((habitName, index) => {
        if (index === 0) {
            newHabit(habitName)
        } else {
            newHabit(habitName)
            const section = document.getElementById(habitName)
            const dateDiv = section.querySelectorAll('.date-div')
            dateDiv.forEach(dateDiv => {dateDiv.style.display = "none"})
        }
        });
}
// saveHabitButton.addEventListener('keydown', (event) => {
//     if (event.key == "Enter" || event.key == "Return") {
//         saveHabit()
//     }
// })
createEmptyArrayOnLocalStorage('createdHabitsArray')
openDialog(createNewHabitButton)    
alwaysExibitHabits()