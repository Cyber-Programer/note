const notesContainer = document.querySelector('.notes');
const createBtn = document.querySelector('.btn');

function showNotes() {
  const savedNotes = localStorage.getItem('notes');
  if (savedNotes) {
    notesContainer.innerHTML = savedNotes;
  }
}

function updateNote() {
  localStorage.setItem('notes', notesContainer.innerHTML);
}

showNotes();

createBtn.addEventListener('click', function () {
  let inputBox = document.createElement('p');
  let img = document.createElement('img');

  inputBox.id = 'notes';
  inputBox.setAttribute('contenteditable', 'true');
  img.src = './images/delete.png';
  img.id = 'delet-ico';

  inputBox.appendChild(img);
  notesContainer.appendChild(inputBox);

  updateNote(); // Save the updated notes after adding a new note
});

notesContainer.addEventListener('click', function (e) {
  if (e.target.tagName === 'IMG') {
    e.target.parentElement.remove();
    updateNote();
  }
});

notesContainer.addEventListener('keyup', function (e) {
  if (e.target.tagName === 'P') {
    updateNote();
  }
});
