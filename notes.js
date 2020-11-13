const fs = require('fs');

const addNote = (title, body) => {


    const notes = loadNotes();

    const duplacteNote = notes.filter((note) => {

        return note.title === title;

    });

    if(duplacteNote.length === 0){
        notes.push({
            title: title,
            body : body
        })
    }else{
        console.log("Note was already present")
    }

    saveNotes(notes);

}

const loadNotes = () => {

    try{
        const dataBuffer = fs.readFileSync('notes.json');

        const dataString = dataBuffer.toString();

        return JSON.parse(dataString);

    }catch(e){

        return [];

    }

}

const saveNotes = (notes) => {

    fs.writeFileSync('notes.json', JSON.stringify(notes))
   
}
module.exports = {
   addNote : addNote
}












// const fs = require('fs');

// const addNote = (title, body) => {

//     const notes = loadNotes();

//     const duplicateNote = notes.filter( (note)=> {
          
//         return note.title === title;

//     });
         
//     if(duplicateNote.length === 0){

//         notes.push({
//             title: title,
//             body: body
//         });
    
//         saveNotes(notes)
//         console.log("Note was added successfully!!")

//     }else {
//         console.log("Note was already present")
//     }
   

// };



// module.exports = {
//     addNote : addNote
// }