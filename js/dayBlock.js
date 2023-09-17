const root = document.getElementById('root')
const previousDays = 0
const nextDays = 6

function createSection() {
    const section = document.createElement('section')
    return section
}

function createDiv() {
    const div = document.createElement('div')
    div.classList = "day-block"
    return div
}

function createSpan() {
    const span = document.createElement('span')
    return span
}

function createDay(offsetDays = 0) {
    const date = new Date()
    date.setDate(date.getDate() + offsetDays)
    
    return date.toLocaleDateString('en-US', {
            month: 'short',
            day: '2-digit'
        });
    
}

function createCheckbox(n, section) {
    const input = document.createElement('input')
    input.type = "checkbox"
    input.name = "checkbox"
    input.classList = "hidden-checkbox"
    input.id = section + n
    
    const label = document.createElement('label')
    label.htmlFor = section + n
    label.classList = "checkbox"

    return [input, label]
}

// function saveCheckboxState(checkbox, id) {
//     checkbox.addEventListener('change', () => {
//         localStorage.setItem(`${id}`, JSON.stringify(checkbox.checked));
//     })
    
//     const dataOfBox = JSON.parse(localStorage.getItem(`${id}`))
    
//     if(dataOfBox !== null) {
//         return checkbox.checked = dataOfBox
//     }
// }

function createDayBlock(offsetDays = 0, id) {
    const div = createDiv()
    const span = createSpan()
    const day = createDay(offsetDays)
    const [input, label] = createCheckbox(day, id)

    div.appendChild(span) 
    span.textContent = day

    div.appendChild(input) 
    div.appendChild(label) 
    
    // saveCheckboxState(input, day)

    return div
}

function generateDaysSection(id) {
    const section = createSection()
    section.id = id
    root.appendChild(section)

    if (previousDays !== 0) {
        for (i = previousDays; i < 0; i++) {
            section.appendChild(createDayBlock(i, id))
        }
    }
    for (i = 0; i < nextDays + 1; i ++) {
        section.appendChild(createDayBlock(i, id))
    }

    saveSectionData(section)
}

function saveSectionData(section) {
    const checkboxes = section.querySelectorAll('.hidden-checkbox')

    checkboxes.forEach(checkbox => checkbox.addEventListener('change',() => {
        let newArray = JSON.parse(localStorage.getItem(section.id)) ?? []
        const daySpan = checkbox.previousElementSibling.textContent;
        
        const indexDay = newArray.findIndex((foundDay) => {
            return foundDay.date === daySpan
        })

        if (indexDay >= 0){
            newArray[indexDay] = {
                date: daySpan,
                checked: checkbox.checked
            }
            
            
        } else {
            newArray.push({
                date: daySpan,
                checked: checkbox.checked
            })
        }

        localStorage.setItem(section.id, JSON.stringify(newArray))
    }))

    const array = JSON.parse(localStorage.getItem(section.id))
    if (array !== null) {
        
        for (index = 0; index < array.length; index++) {
            checkboxes.forEach((checkbox) => {
                if (checkbox.id.includes(array[index].date)) {
                    checkbox.checked = array[index].checked
                }
            })
            
        }
    }
    
}

generateDaysSection('oi')
generateDaysSection('cu')
generateDaysSection('tu')
generateDaysSection('é')
generateDaysSection('chato')
generateDaysSection('mas')
generateDaysSection('eu')
generateDaysSection('te')
generateDaysSection('amo')
generateDaysSection('muito')
