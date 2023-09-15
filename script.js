// save button status on local storage
const checkbox = document.querySelector('.hidden-checkbox')

checkbox.addEventListener('change', () => {
    localStorage.setItem('checkbox', JSON.stringify(checkbox.checked));
})

const dataOfBox = JSON.parse(localStorage.getItem('checkbox'))

if(dataOfBox !== null) {
    checkbox.checked = dataOfBox
}

// show today's date
const today = new Date()

const formattedDate = today.toLocaleDateString('en-US', {
    month: 'short', 
    day: '2-digit'
  });

document.getElementById('current-date').textContent = formattedDate