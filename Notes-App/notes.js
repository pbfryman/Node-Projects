const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
  return 'Your notes...'
}

const readNote = (title) => {
  const notes = loadNotes()
  const findNote = notes.find((note) => note.title === title)
  if (findNote) {
    console.log(chalk.blue.bold(findNote.title))
    console.log(findNote.body)
  } else {
    console.log(chalk.red.bold('Note not found!'))
  }
}

const listNotes = () => {
  const notes = loadNotes()
  console.log(chalk.blue.bold('Your Notes:' + '\n----------------'))
  for (let i = 0; i < notes.length; i++) {
    console.log('Title: ' + notes[i].title)
  }
}

const removeNote = (title) => {
  const notes = loadNotes()
  const keepNotes = notes.filter((note) => note.title !== title)

  if (notes.length > keepNotes.length) {
    console.log(chalk.green.inverse('Note removed!'))
    saveNotes(keepNotes)
  } else {
    console.log(chalk.red.inverse('No note found!'))
  }
}

const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNote = notes.find((note) => note.title === title)

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    })
  
    saveNotes(notes)
    console.log('New note added!')
  } else {
    console.log('Note title taken!')
  }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch(e) {
    return[]
  }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
}