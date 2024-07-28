import {
  TextField,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
} from "@mui/material";

const FormDialog = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: "form",
        onSubmit: (event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries(formData.entries());
          const email = formJson.email;
          console.log(email);
          handleClose();
        },
      }}
    >
      <DialogTitle>Add New Quotation</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          required
          id="bookTitle"
          name="title"
          label="Book Title"
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          required
          id="quotation"
          name="quotation"
          label="Quotation"
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          required
          id="author"
          name="author"
          label="Author"
          type="text"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit">Submit</Button>
      </DialogActions>
    </Dialog>
  );
};
export default FormDialog;
