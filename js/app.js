const checkbox = () => {
    const cbox = document.createElement("input")
    cbox.type = "checkbox"
    cbox.className = "cbox"

    document.querySelector('form').appendChild(cbox)
}

const label = () => {
    const text = document.getElementById('taskInput').value
    const label = document.createElement('label')
    label.textContent = text
    label.className = "label"

    document.querySelector('form').appendChild(label)
}

const deleteTask = () => {
    const btn = document.createElement('button')
}

function handleclick(event) {
    const newline = document.createElement('br')

    checkbox()
    label()
    document.querySelector('form').appendChild(newline)

    // Clear input at the end
    document.getElementById('taskInput').value = ""
}

const inputBtn = document.getElementById('addBtn')

inputBtn.addEventListener('click', handleclick)