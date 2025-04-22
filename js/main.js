console.log("JS is connected")
          

const moods = document.getElementById("moods")
const note = document.getElementById("note")
const submitbtn = document.getElementById("submit-btn")
const entryContainer = document.getElementById("entryContainer")


submitbtn.addEventListener('click',function() {
    const selectMood = moods.value;
    const messageNote = note.value;
   

    const entry = document.createElement('section');
    entry.innerHTML = `
      <p><strong>Mood:</strong> ${selectMood}</p>
      <p>${messageNote}</p>
      <hr>
    `;

    entryContainer.appendChild(entry);
    note.value = '';
})