

/**
 * Yo Please Look This appraoch
 * I have commented out the code above
 */

/**
 *  Checks if the title & description inputs are valids
 * @param {string} title the title of the jot
 * @param {string} description the description of the Jot
 * @returns a boolean telling if the inputs are valids or not
 ok
 */
const isInputsValids = (title, description) => {
  if (title === "" || description === "") {
    return false;
  } else {
    return true;
  }
};

/**
 * Create a note with the given parameters
 * @param {{noteId:number, noteTitle:string, noteDescription:string}} param0 The Note Object
 * @returns an HtmlDivElement
 */
const createNote = ({ noteId, noteTitle, noteDescription }) => {
  let noteEl = document.createElement("div");
  let noteTitleEl = document.createElement("h4");
  let noteDescriptionEl = document.createElement("p");
  let delNoteBtn = document.createElement("button");

  noteTitleEl.textContent = noteTitle;
  noteDescriptionEl.textContent = noteDescription;
  delNoteBtn.textContent = "Delete Note";

  delNoteBtn.addEventListener("click", () => {
    console.log("delete button clicked");
    deleteNote(noteId);
  });

  noteEl.classList.add("note");
  noteEl.append(noteTitleEl, noteDescriptionEl, delNoteBtn);
  return noteEl;
};

/**
 * Delete a note with the given noteIdl
 * @param {string} noteId The id of the note whe want t delete
 */
const deleteNote = (noteId) => {
  jots = jots.filter((jot) => {
    return jot.noteId !== noteId;
  });
  storeNotes();
  fillresultsBox();
};

/**
 * Store the array of notes in the localStrage
 */
const storeNotes = () => {
  localStorage.setItem("notes", JSON.stringify(jots));
};

/**
 * This function retrieve the jots stored in the localStorage
 * @returns an Array of jots if there are jots in localstorage otherwise an empty array
 */
const retrieveJots = () => {
  const storage = localStorage.getItem("notes");
  return storage !== null ? JSON.parse(storage) : [];
};

/**
 * This function is for populate the resultBox With the jots in localstorage
 */
const fillresultsBox = () => {
  resultBox.innerHTML = "";
  jots.forEach((jot) => {
    const noteEl = createNote({
      noteId: jot.noteId,
      noteTitle: jot.noteTitle,
      noteDescription: jot.noteDescription,
    });

    resultBox.append(noteEl);
  });
};

//First get all the elements
let showAllJotsBtn = document.getElementById("show-btn");
let deleteAllJotsBtn = document.getElementById("del-btn");
let titleJotEl = document.querySelector("#note-title");
let descriptionJotEl = document.querySelector("#note-description");
let addNewJotBtn = document.querySelector("#add-btn");
let jots = retrieveJots(); // Array of jots
let resultBox = document.querySelector("#notes-box");

// Trigger for the showAllJotsButton
showAllJotsBtn.addEventListener("click", () => {
  fillresultsBox();
});

// trigger for the deleteAllJotsButton
deleteAllJotsBtn.addEventListener("click", () => {
  localStorage.removeItem("notes");
  jots = retrieveJots();
  fillresultsBox();
});

// When the user click on the addNewBtn
addNewJotBtn.addEventListener("click", () => {
  let title = titleJotEl.value;
  let description = descriptionJotEl.value;

  titleJotEl.value = "";
  descriptionJotEl.value = "";

  if (isInputsValids(title, description) === true) {
    console.log("Valid inputs");

    const note = {
      noteId: jots.length,
      noteTitle: title,
      noteDescription: description,
    };

    const noteEl = createNote(note);

    jots.push(note);
    storeNotes();
    fillresultsBox();
  } else {
    console.log("invalid inputs");
  }
});
