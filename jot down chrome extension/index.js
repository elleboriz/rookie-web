const addNewNoteBtn = document.getElementById('add-btn');
const noteBodyEl = document.getElementById('note-body') ;
const noteTitleEl = document.getElementById('note-title') ;
const notesBox = document.getElementById('notes-box') ;
const delBtnEl = document.getElementById('del-btn');
const showBtnEl = document.getElementById('show-btn');

let dbNotes ;
let notes = [];
console.log(notes)




/*
add addNewNoteBtn trigger event listiner that gets the input
values and assign it to variable

calls rederNotes funtion for display in DOM
*/
addNewNoteBtn.addEventListener('click' , function(){
    let title = noteTitleEl.value
    let body = noteBodyEl.value

    noteTitleEl.value = ''
    noteBodyEl.value = ''

renderNotes(title , body)

})

/*
delete all function
*/
delBtnEl.addEventListener('click', function(){
    localStorage.clear()
    notesBox.innerHTML = '<b>All notes have been deleted</b>'
})


/*
show all function
*/
showBtnEl.addEventListener('click', function(){
    dbNotes = localStorage.getItem('notes');
    if (dbNotes){
        dbNotes = JSON.parse(dbNotes);
        
        notesBox.innerHTML = 'all notes'
            for (let i= 0; i < dbNotes.length ; i++){
            notesBox.innerHTML += `<div class="new-note">${dbNotes[i]}</div>`
            // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M160 400C160 408.8 152.8 416 144 416C135.2 416 128 408.8 128 400V192C128 183.2 135.2 176 144 176C152.8 176 160 183.2 160 192V400zM240 400C240 408.8 232.8 416 224 416C215.2 416 208 408.8 208 400V192C208 183.2 215.2 176 224 176C232.8 176 240 183.2 240 192V400zM320 400C320 408.8 312.8 416 304 416C295.2 416 288 408.8 288 400V192C288 183.2 295.2 176 304 176C312.8 176 320 183.2 320 192V400zM317.5 24.94L354.2 80H424C437.3 80 448 90.75 448 104C448 117.3 437.3 128 424 128H416V432C416 476.2 380.2 512 336 512H112C67.82 512 32 476.2 32 432V128H24C10.75 128 0 117.3 0 104C0 90.75 10.75 80 24 80H93.82L130.5 24.94C140.9 9.357 158.4 0 177.1 0H270.9C289.6 0 307.1 9.358 317.5 24.94H317.5zM151.5 80H296.5L277.5 51.56C276 49.34 273.5 48 270.9 48H177.1C174.5 48 171.1 49.34 170.5 51.56L151.5 80zM80 432C80 449.7 94.33 464 112 464H336C353.7 464 368 449.7 368 432V128H80V432z"/>del</svg>
            }
            
    }
    else{
        notesBox.innerHTML = '<bold>You have no notes stored</bold>' 
    }
})

// JSON stringnify data and uploads to database

function notesJsonStr(notes){
    notes = JSON.stringify(notes);
    localStorage.setItem('notes',notes);
}


/*
render Note funtion displays the notes in html adding to 
old notes
*/
function renderNotes(title,body){

    if (title !== '' && body !== ''){
        const h4 = document.createElement("h4");
        const p = document.createElement("p");
        const div = document.createElement('div');

    /* creating content from input and assigning 
     to notesBox  */
        div.append(h4);
        div.append(p);
        h4.textContent = title;
        p.innerText = body;

        // // Adding to Localstorage DataBase 
        let divValue = div     
        notes.unshift(divValue.innerHTML)
        
        notesJsonStr(notes)




         // // redering from Localstorage DataBase

        let dbNotes = localStorage.getItem('notes');
        dbNotes = JSON.parse(dbNotes)

        notesBox.innerHTML = ''
     
        notesBox.innerHTML += `<div class="new-note">${dbNotes[0]}</div>`
        // del<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M160 400C160 408.8 152.8 416 144 416C135.2 416 128 408.8 128 400V192C128 183.2 135.2 176 144 176C152.8 176 160 183.2 160 192V400zM240 400C240 408.8 232.8 416 224 416C215.2 416 208 408.8 208 400V192C208 183.2 215.2 176 224 176C232.8 176 240 183.2 240 192V400zM320 400C320 408.8 312.8 416 304 416C295.2 416 288 408.8 288 400V192C288 183.2 295.2 176 304 176C312.8 176 320 183.2 320 192V400zM317.5 24.94L354.2 80H424C437.3 80 448 90.75 448 104C448 117.3 437.3 128 424 128H416V432C416 476.2 380.2 512 336 512H112C67.82 512 32 476.2 32 432V128H24C10.75 128 0 117.3 0 104C0 90.75 10.75 80 24 80H93.82L130.5 24.94C140.9 9.357 158.4 0 177.1 0H270.9C289.6 0 307.1 9.358 317.5 24.94H317.5zM151.5 80H296.5L277.5 51.56C276 49.34 273.5 48 270.9 48H177.1C174.5 48 171.1 49.34 170.5 51.56L151.5 80zM80 432C80 449.7 94.33 464 112 464H336C353.7 464 368 449.7 368 432V128H80V432z"/></svg>
        
    }else{
    notesBox.innerHTML = `<b>Can't add note , your title and body is EMPTY !!</b>`
    }
}



