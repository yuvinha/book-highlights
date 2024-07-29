import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Box,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import { setSnackbar } from "../slices/appSlice";
import { useCreateQuotationMutation } from "../slices/quotationsApiSlice";
import { addQuote } from "../slices/quotesSlice";

const CreateScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [createQuotation, { isLoading }] = useCreateQuotationMutation();

  const form = useForm({
    defaultValues: {
      text: "",
      bookTitle: "",
      author: "",
    },
  });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = async (data) => {
    try {
      const res = await createQuotation(data).unwrap();
      dispatch(addQuote(res));
      navigate("/");
    } catch (error) {
      dispatch(
        setSnackbar({ open: true, type: "error", message: error.data.message })
      );
    }
  };

  return (
    <>
      <Typography
        component="h1"
        variant="h3"
        sx={{ mt: 8, mb: 4 }}
        align="center"
      >
        Create New Quotation
      </Typography>
      <Box
        component="form"
        noValidate
        // autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 2,
          maxWidth: 600,
          marginX: "auto",
        }}
      >
        <TextField
          autoFocus
          required
          id="bookTitle"
          name="bookTitle"
          label="Book Title"
          variant="standard"
          type="text"
          fullWidth
          error={errors.bookTitle ? true : false}
          helperText={errors.bookTitle?.message}
          {...register("bookTitle", {
            required: "Book title is required",
          })}
        />
        <TextField
          required
          id="author"
          name="author"
          label="Author"
          type="text"
          variant="standard"
          fullWidth
          error={errors.author ? true : false}
          helperText={errors.author?.message}
          {...register("author", {
            required: "Author is required",
          })}
        />
        <TextField
          required
          id="text"
          name="text"
          label="Quotation"
          type="text"
          variant="standard"
          fullWidth
          multiline
          rows={4}
          error={errors.text ? true : false}
          helperText={errors.text?.message}
          {...register("text", {
            required: "Text is required",
          })}
        />
        <Box sx={{ position: "relative" }}>
          <Button
            type="submit"
            variant="contained"
            size="large"
            color="primary"
            sx={{ py: 1.5, mt: 4 }}
            disabled={isLoading}
            fullWidth
          >
            Create
          </Button>
          {isLoading && (
            <CircularProgress
              size={24}
              sx={{
                color: "primary",
                position: "absolute",
                top: "50%",
                left: "50%",
                marginTop: "-6px",
                marginLeft: "-6px",
              }}
            />
          )}
        </Box>
      </Box>
    </>
  );
};
export default CreateScreen;
