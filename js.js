document.getElementById('add').addEventListener('click', function () {
    addNote();
});

function addNote() {
    var notesContainer = document.getElementById('notes');

    var note = document.createElement('div');
    note.classList.add('note');
    note.contentEditable = true;

    var noteContent = document.createElement('span');
    noteContent.innerHTML = "💜 "; 

    // Create the delete button
    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', function () {
        notesContainer.removeChild(note);
    });

    
    note.appendChild(noteContent);
    note.appendChild(deleteButton);
    notesContainer.appendChild(note);

    
    noteContent.focus();
}