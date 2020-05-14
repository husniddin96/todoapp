import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit';

export default function FormDialog(props) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [id, setId] = useState(-1);

  const handleClickOpen = () => {
    setId()
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTitle = (event) => {
    setTitle(event.target.value);
    setId(props.todo.id);
  }

  return (
    <div style={props.style}>
      <Button color="primary" onClick={handleClickOpen}>
        <EditIcon />
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth={true}>
        <DialogTitle id="form-dialog-title">Edit Todo</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="text"
            fullWidth
            defaultValue={props.todo.title}
            onChange={handleTitle}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={props.editTodo.bind(this, props.todo._id, {id, title: title })} onMouseDown={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
