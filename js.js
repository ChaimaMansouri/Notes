document.getElementById('add').addEventListener('click', function () {
    addNote();
});

function addNote() {
    var notesContainer = document.getElementById('notes');

    var note = document.createElement('div');
    note.classList.add('note');
    note.contentEditable = true;
    note.textContent = "New note...    ";

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', function () {
        notesContainer.removeChild(note);
    });


    note.appendChild(deleteButton);
    notesContainer.appendChild(note);
}
