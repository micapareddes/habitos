const dialogContainer = document.getElementById('dialog-container')

function openDialog(button) {
    button.addEventListener('click', () => {dialogContainer.style.display = "flex"})
}

function closeDialog() {
    dialogContainer.style.display = "none"
}