import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Typography,
  Card,
  CardContent,
  CardActionArea,
  IconButton,
  Stack,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { styled, useTheme } from "@mui/material/styles";
import { setDeleteDialog } from "../slices/appSlice";

const ActionIconButton = styled(IconButton)(({ theme }) => ({
  background: theme.palette.background.paper,
  "&:hover": {
    background: theme.palette.background.default,
  },
}));

const QuotationCard = ({ quotation }) => {
  const dispatch = useDispatch();

  const [showActions, setShowActions] = useState(false);

  const theme = useTheme();

  const handleMouseOver = () => setShowActions(true);
  const handleMouseLeave = () => setShowActions(false);

  const handleDelete = (id) => {
    dispatch(setDeleteDialog({ open: true, id }));
  };

  return (
    <Card
      sx={{
        boxShadow: "none",
        borderRadius: "8px",
      }}
    >
      <CardActionArea
        component="div"
        sx={{
          "&:hover ": {
            "h3, p": {
              opacity: 0.07,
            },
            ".MuiCardActionArea-focusHighlight": {
              opacity: 0,
              background: theme.palette.background.paper,
            },
          },
        }}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <CardContent sx={{ px: 5, py: 5 }}>
          <Typography
            paragraph
            variant="h3"
            align="center"
            mb={2}
            sx={{ color: theme.palette.text.primary }}
          >
            {quotation.text}
          </Typography>
          <Typography
            component="p"
            variant="body2"
            align="center"
            sx={{ fontStyle: "italic", color: theme.palette.text.secondary }}
          >
            — {quotation.author}, {quotation.bookTitle}
          </Typography>
        </CardContent>
        {showActions && (
          <Stack
            direction="row"
            spacing={2}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <ActionIconButton size="large" color="primary">
              <Edit />
            </ActionIconButton> */}
            <ActionIconButton
              size="large"
              color="primary"
              onClick={() => handleDelete(quotation._id)}
            >
              <Delete />
            </ActionIconButton>
          </Stack>
        )}
      </CardActionArea>
    </Card>
  );
};
export default QuotationCard;
