function getLocalStorageData(id) {
    return JSON.parse(localStorage.getItem(id)) ?? []
}
function updateStorageArray(array, habitName) {
    array.push(habitName)
    return array
}
function setDataOnLocalStorage(id, array) {
    localStorage.setItem(id, JSON.stringify(array))
}
function deleateDataFromLocalStorage(id) {
    localStorage.removeItem(id)
 }

 function createEmptyArrayOnLocalStorage(id) {
    const emptyArray = []
    return localStorage.setItem(id, JSON.stringify(emptyArray))
}

// habits names array
function addHabitNameToArray(habitName) {
    let habitNameArray = getLocalStorageData('habitNameArray');
    habitNameArray = updateStorageArray(habitNameArray, habitName);
    setDataOnLocalStorage('habitNameArray', habitNameArray)
    return habitNameArray
}

// checkbox
function updateStorageArrayWithCheckboxData(storageDataArray, checkbox) {
    const checkboxContainer = checkbox.parentElement;
    const dateSpan = checkboxContainer.previousElementSibling.textContent;
    const index = storageDataArray.findIndex(dayBlock => dayBlock.date === dateSpan)

    if (index >= 0){
        storageDataArray[index].checked = checkbox.checked
    } else {
        storageDataArray.push({
            date: dateSpan,
            checked: checkbox.checked
        })
    }
    return storageDataArray
}
function addEventListenerToCheckbox() {
    const checkboxes = document.querySelectorAll('.hidden-checkbox')

    checkboxes.forEach(checkbox => checkbox.addEventListener('change', () => {
        const habitSectionID = checkbox.closest('section').id;
        let storageDataArray = getLocalStorageData(habitSectionID);
        storageDataArray = updateStorageArrayWithCheckboxData(storageDataArray, checkbox);
        setDataOnLocalStorage(habitSectionID, storageDataArray);
    }))
}
function setDataOnCheckbox(habitSectionID) {
    const storageDataArray = getLocalStorageData(habitSectionID)
    const habitSection = document.getElementById(habitSectionID)
    const checkboxes = habitSection.querySelectorAll('.hidden-checkbox')
    
    checkboxes.forEach(checkbox => {
        const checkboxContainer = checkbox.parentElement;
        const dateSpan = checkboxContainer.previousElementSibling.textContent;
        const dayBlock = storageDataArray.find(dayBlock => dayBlock.date === dateSpan)
        
        if (dayBlock) {
            checkbox.checked = dayBlock.checked;
            console.log(dayBlock)
        }
    })


}
function saveAndSetDataOfCheckbox(habitSectionID) {
    addEventListenerToCheckbox()
    setDataOnCheckbox(habitSectionID)
}