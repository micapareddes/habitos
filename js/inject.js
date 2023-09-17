const root = document.getElementById('root')

function addDay(n=1, date="current-date") {
    const div = document.createElement('div')

    const span = document.createElement('span')
    span.id = `${date}`
    
    const input = document.createElement('input')
    input.type = "checkbox"
    input.name = "checkbox"
    input.classList = "hidden-checkbox"
    input.id = `checkbox${n}`
    
    const label = document.createElement('label')
    label.htmlFor = `checkbox${n}`
    label.classList = "checkbox"
    
    root.appendChild(div)
    div.appendChild(span)
    div.appendChild(input)
    div.appendChild(label)
}

const arrayDeDias = [{
    id: 'previous-date',
    data: new Date().getDate() - 1,
    isChecked: false 
}, {
    id: 'current-date',
    data: new Date().getDate(),
    isChecked: false 
}, {
    id: 'next-date',
    data: new Date().getDate() + 1,
    isChecked: false 
},{
    id: 'next-date-2',
    data: new Date().getDate() + 2,
    isChecked: false 
},]

function addDays(arrayDeDias){
    arrayDeDias.forEach(dia => {
        addDay(dia.data, dia.id)
    })
}

addDays(arrayDeDias)

// addDay(-1, "previous-date")
// addDay(0, "current-date")
// addDay(1, "next-date")