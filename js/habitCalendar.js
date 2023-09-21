const root = document.getElementById('root')

// global
function createHTMLElement(type) {
    return document.createElement(type)
}

// habit
function createHabitTag(habitName) {
    const habitNameDiv = createHTMLElement('div')
    habitNameDiv.classList = "habit-name-tag"
    const title = createHTMLElement('h3')
    title.textContent = 'Habits'
    const createdHabitName = createHTMLElement('p')
    createdHabitName.textContent = habitName
    habitNameDiv.appendChild(title)
    habitNameDiv.appendChild(createdHabitName)
    return habitNameDiv
}
function appendHabitTagOnSection(habitSection, habitName) {
    const habitNameDiv = createHabitTag(habitName)
    habitSection.appendChild(habitNameDiv)
}
function createDateDiv(offsetDays) {
    const dateDiv = createHTMLElement('div')
    dateDiv.classList = "date-div"
    const monthText = createHTMLElement('p')
    monthText.classList = "month-text"
    const daySpan = createHTMLElement('span')
    daySpan.classList = "day-text"

    const date = new Date()
    date.setDate(date.getDate() - offsetDays)

    const currentDate = offsetDays === 0
    if (currentDate){
        daySpan.classList.add("current-day")
    }
    monthText.textContent = date.toLocaleDateString('en-US', {
        month: 'short'
    })
    daySpan.textContent = date.toLocaleDateString('en-US', {
        day: '2-digit'
    })

    dateDiv.appendChild(monthText)
    dateDiv.appendChild(daySpan)
    return dateDiv
}
function createCheckbox(habitName, date) {
    const checkbox = createHTMLElement('div')
    const input = createHTMLElement('input')
    input.type = "checkbox"
    input.name = "checkbox"
    input.classList = "hidden-checkbox"
    input.id = habitName + date

    const label = createHTMLElement('label')
    label.htmlFor = habitName + date
    label.classList = "checkbox"

    checkbox.appendChild(input) 
    checkbox.appendChild(label)

    return checkbox
}
function createOneDayBlock(habitName, offsetDays) {
    const dayBlock = createHTMLElement('div')
    dayBlock.classList = "day-block"
    const date = createDateDiv(offsetDays)
    const checkbox = createCheckbox(habitName, date.textContent)
    dayBlock.appendChild(date)
    dayBlock.appendChild(checkbox)
    return dayBlock
}
function createCalendar(habitSection, habitName) {
    for (offsetDays = 10; offsetDays >= 0; offsetDays--) {
        habitSection.appendChild(createOneDayBlock(habitName, offsetDays))
    }     
}
function newHabit(habitName) {
    const habitSection = createHTMLElement('section')
    habitSection.id = habitName
    habitSection.classList = "habit-section"

    appendHabitTagOnSection(habitSection, habitName)
    createCalendar(habitSection, habitName)

    root.appendChild(habitSection)

    saveAndSetDataOfCheckbox(habitSection.id)
} 