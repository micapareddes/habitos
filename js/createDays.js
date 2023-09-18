const root = document.getElementById('root')
const previousDays = 10

function createSection() {
    const section = document.createElement('section')
    section.classList = "block-of-days"
    return section
}

function createDiv() {
    const div = document.createElement('div')
    return div
}

function createP() {
    const p = document.createElement('p')
    return p
}

function createSpan() {
    const span = document.createElement('span')
    return span
}

function createMonth(offsetDays = 0) {
    const date = new Date()
    date.setDate(date.getDate() - offsetDays)

    return date.toLocaleDateString('en-US', {
        month: 'short'
    });
}

function createDay(offsetDays = 0) {
    const date = new Date()
    date.setDate(date.getDate() - offsetDays)
    
    return date.toLocaleDateString('en-US', {
            day: '2-digit'
        });
    
}

function createCheckbox(month, day, section) {
    const input = document.createElement('input')
    input.type = "checkbox"
    input.name = "checkbox"
    input.classList = "hidden-checkbox"
    input.id = section + month + day
    
    const label = document.createElement('label')
    label.htmlFor = section + month + day
    label.classList = "checkbox"

    return [input, label]
}

function generateDayBlock(offsetDays = 0, id) {
    const div = createDiv()
    div.classList = "day-block"

    const divDate = createDiv()
    divDate.classList = "date"

    const p = createP()

    const month = createMonth(offsetDays)

    const span = createSpan()

    const day = createDay(offsetDays)
    if (offsetDays === 0){
        span.classList.add("current-day")
    }
    const [input, label] = createCheckbox(month, day, id)


    div.appendChild(divDate)
    divDate.appendChild(p)
    p.textContent = month
    divDate.appendChild(span) 
    span.textContent = day

    div.appendChild(input) 
    div.appendChild(label) 

    return div
}

function generateDaysSection(id) {
    const section = createSection()
    section.id = id
    root.appendChild(section)

    for (i = previousDays; i >= 0; i--) {
            section.appendChild(generateDayBlock(i, id))
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

