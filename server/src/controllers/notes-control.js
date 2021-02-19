const notesCtrl = {}

const Note = require ('../models/Note')

notesCtrl.getNotes = async (req, res) => {
  const notes = await Note.find();
  res.json(notes)
}

notesCtrl.createNotes = async (req, res) => {
  const {title, content, author, date} = req.body
  const newNote= new Note({
    title : title,
    content : content,
    author : author,
    date : date,
  })
  await newNote.save();
  res.json({ message: "Note Saved" });
};

notesCtrl.getNote = async(req, res) => {
  const note = await Note.findById(req.params.id)
  res.json(note)
};

notesCtrl.updateNotes = async(req, res) => {
  const {title,content,author} = req.body;
  await Note.findOneAndUpdate({_id:req.params.id},{
    title:title,
    content:content,
    author:author
  });
  res.json({ message: "Note Updated" })
}

notesCtrl.deleteNotes = async(req, res) => {
  await Note.findByIdAndDelete(req.params.id)
  res.json({ message: "Note Deleted" })
}

module.exports = notesCtrl;
