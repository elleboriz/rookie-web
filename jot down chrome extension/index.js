const addNewNoteBtn = document.getElementById('add-btn');
const noteBodyEl = document.getElementById('note-body') ;
const noteTitleEl = document.getElementById('note-title') ;
const notesBox = document.getElementById('notes-box') ;
const delBtnEl = document.getElementById('del-btn');
const showBtnEl = document.getElementById('show-btn');

let dbNotes ;
let notes = [];

/* 

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
    console.log(dbNotes)
    notesBox.innerHTML = ''
})


/*
show all function
*/
showBtnEl.addEventListener('click', function(){
    dbNotes = localStorage.getItem('notes');
    if (dbNotes){
        dbNotes = JSON.parse(dbNotes)
        console.log(dbNotes)
        
        notesBox.innerHTML = ''
            for (let i= 0; i < dbNotes.length ; i++){
            notesBox.innerHTML += `<div class="new-note">${dbNotes[i]}</div>`
            }
    }
    else{
        notesBox.innerHTML = '' 
    }
}
)



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
        console.log(dbNotes)

        notesBox.innerHTML = ''
        notesBox.innerHTML = `<div class="new-note">${dbNotes[0]}</div>`
        
        
    }else{
    window.alert("CAN'T ADD NOTE , YOUR TITLE AND CONTENT IS EMPTY !!")
    }
}



