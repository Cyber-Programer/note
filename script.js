const notesContainer = document.querySelector('.notes');
const createBtn = document.querySelector('.btn');

function showNotes() {
  const savedNotes = localStorage.getItem('notes');
  if (savedNotes) {
    notesContainer.innerHTML = savedNotes.replace(/\n/g, "<br>");
  }
}

function updateNote() {
  const notes = notesContainer.querySelectorAll('p');
  notes.forEach(note => {
    if (note.textContent.trim() === '') {
      note.remove();
    }
  });

  const notesContent = notesContainer.innerHTML.replace(/<br>/g, "\n");
  localStorage.setItem('notes', notesContent);
}

showNotes();

createBtn.addEventListener('click', function () {
  let inputBox = document.createElement('p');
  let img = document.createElement('img');

  updateNote();

  inputBox.id = 'notes';
  inputBox.setAttribute('contenteditable', 'true');
  inputBox.setAttribute("spellcheck", "false");
  img.src = '/images/delete.png';
  img.id = 'delet-ico';

  inputBox.appendChild(img);
  notesContainer.appendChild(inputBox);

   // Save the updated notes after adding a new note
});

// ... (other event listeners remain unchanged)


notesContainer.addEventListener('keyup', function (e) {
  if (e.target.tagName === 'P') {
    updateNote();
  }
});

document.addEventListener('keydown',event =>{
  if(event.key ==='Enter'){
    document.execCommand('insertLineBreak')
    event.preventDefault()
  }
})

notesContainer.addEventListener('click', function (e) {
  if (e.target.tagName === 'IMG') {
    e.target.parentElement.remove();
    updateNote();
  }
});
