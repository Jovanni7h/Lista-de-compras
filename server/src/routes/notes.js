const {Router} = require('express');
const router = Router();

const {getNotes, createNotes, getNote, updateNotes, deleteNotes} = require ('../controllers/notes-control')

router
  .route("/")
  .get(getNotes)
  .post(createNotes);
  


router
  .route("/:id")
  .get(getNote)
  .put(updateNotes)
  .delete(deleteNotes);
  


module.exports = router;