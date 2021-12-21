import React ,{useState, useEffect}from 'react'
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import './editCardDialog.css'

export default function EditCardDialog({open, handleClose, selectedCard, handleSaveAndClose}) {

  const [card, setCard]=useState({})

  useEffect(()=>{
    const newCard = {
      id:selectedCard.id,
      title:selectedCard.title,
      text:selectedCard.text
    }
    setCard(newCard)
  },[selectedCard])

  const handleChange=(event)=>{
    setCard({...card, [event.target.name]:event.target.value})
  }

  const handleSubmit=()=>{
     //backend request PUT
     handleSaveAndClose(card)
  }

  
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle id="simple-dialog-title">Card info</DialogTitle>
      <DialogContent classes={{root:'dialog-content'}}>
        <TextField id="title" label="Title" name="title" variant="outlined" value={card.title} onChange={handleChange}/>
        <TextField label="Text" name="text" variant="outlined" value={card.text} onChange={handleChange}/>
      </DialogContent> 
    </Dialog>
  );
}