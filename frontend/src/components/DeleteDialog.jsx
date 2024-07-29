import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  Button,
} from "@mui/material";
import { useDeleteQuotationMutation } from "../slices/quotationsApiSlice";
import { setSnackbar, setDeleteDialog } from "../slices/appSlice";
import { removeQuote, setQuotes } from "../slices/quotesSlice";

const FormDialog = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { deleteDialog } = useSelector((state) => state.app);
  const { open, id } = deleteDialog;

  const handleClose = () => dispatch(setDeleteDialog({ open: false, id: "" }));
  const [deleteQuotation, { isLoading }] = useDeleteQuotationMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await deleteQuotation(id).unwrap();
      console.log(res);
      dispatch(removeQuote(id));
      handleClose();
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      component="form"
      onSubmit={handleSubmit}
    >
      <DialogTitle>Delete Quotation</DialogTitle>
      <DialogContent>
        This action cannot be cancelled and the selected quotation will be
        permanently deleted.
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit">Delete</Button>
      </DialogActions>
    </Dialog>
  );
};
export default FormDialog;
