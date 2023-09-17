// save button status on local storage
const checkbox = document.querySelector('.hidden-checkbox')

checkbox.addEventListener('change', () => {
    localStorage.setItem('checkbox', JSON.stringify(checkbox.checked));
})

const dataOfBox = JSON.parse(localStorage.getItem('checkbox'))

if(dataOfBox !== null) {
    checkbox.checked = dataOfBox
}

