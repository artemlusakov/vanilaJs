const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

const notes = ['Записать что-то важное', 'Решить продлемы', 'lol']

function render() {
    // for (let i = 0 ; i < notes.length; i++) {
    //     listElement.insertAdjacentHTML('beforeend',GetNoteTemplate(notes[i]))

    // }

    for (let note of notes) {
        listElement.insertAdjacentHTML('beforeend',GetNoteTemplate(note))

    }
}

render()

createBtn.onclick = function(){
    if(inputElement.value.lenght === 0){
        console.log(1)
        return 
    }
    listElement.insertAdjacentHTML('beforeend', GetNoteTemplate(inputElement.value))

    inputElement.value = ''
}

function GetNoteTemplate(title) {
    return        `
    <li
    class="list-group-item d-flex justify-content-between align-items-center"
    >
        <span>${title}</span>
    <span>
    <span class="btn btn-small btn-success">&check;</span>
    <span class="btn btn-small btn-danger">&times;</span>
    </span>
    
</li>
`
}

const person = {}
console.log(typeof person)