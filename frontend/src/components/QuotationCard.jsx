import { Typography, Card, CardContent } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const QuotationCard = ({ quotation }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        boxShadow: "none",
        borderRadius: "8px",
        px: 4,
        py: 2,
      }}
    >
      <CardContent>
        <Typography
          paragraph
          variant="h3"
          align="center"
          mb={1}
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
          — {quotation.author}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default QuotationCard;
