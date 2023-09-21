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
function exibitCalendarDates(habitName) {
    const section = document.getElementById(habitName)
    const dateDiv = section.querySelectorAll('.date-div')
    dateDiv.forEach(dateDiv => {dateDiv.style.display = "flex"})
}
function exibitHabitTitle(habitName) {
    const section = document.getElementById(habitName)
    const title = section.querySelector('.habit-name-tag h3')
    title.style.display = "flex"
}
function getHeightOfInput(habitName) {
    const section = document.getElementById(habitName)
    return section.offsetHeight
}
function setHeightOnCSS(habitName, add=0) {
    const section = document.getElementById(habitName)
    const habitNameTag = section.querySelector('.habit-name-tag')
    const heightInPixels = getHeightOfInput(habitName)
    habitNameTag.style.height = heightInPixels + add + 'px'
    console.log(heightInPixels)

}
function saveHabit() {
    const habitName = document.getElementById('new-habit-input').value;

    if (habitInputIsValid(habitName)) {
        const habitNameArray = addHabitNameToArray(habitName)
        
        if (habitNameArray[0] === habitName){
            newHabit(habitName)
            exibitHabitTitle(habitName)
            exibitCalendarDates(habitName)
            
        } else{
            newHabit(habitName)
            setHeightOnCSS(habitName) 
            
        }
        closeDialog()
    }
}
function alwaysExibitHabits() {
    let habitNameArray = getLocalStorageData('habitNameArray')
    habitNameArray.forEach((habitName, index) => {
        if (index === 0) {
            newHabit(habitName)
            exibitHabitTitle(habitName)
            exibitCalendarDates(habitName)

        } else {
            newHabit(habitName)
            setHeightOnCSS(habitName) 
        }
        });
}

createEmptyArrayOnLocalStorage('createdHabitsArray')
openDialog(createNewHabitButton)    
alwaysExibitHabits()