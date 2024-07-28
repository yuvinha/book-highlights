import Masonry from "@mui/lab/Masonry";
import { Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useGetQuotationsQuery } from "../slices/quotationsApiSlice";
import QuotationCard from "../components/QuotationCard";

const HomeScreen = () => {
  const {
    data: quotations,
    isLoading,
    isError,
    error,
  } = useGetQuotationsQuery();

  const theme = useTheme();

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <div>{error.data.message}</div>;

  return (
    <>
      <Box sx={{ marginTop: 6, marginBottom: 10 }}>
        <Typography
          variant="h1"
          component="h1"
          align="center"
          marginBottom={1}
          sx={{ color: theme.palette.primary.main }}
        >
          {quotations[0].bookTitle}
        </Typography>
        <Typography
          variant="subtitle"
          component="div"
          align="center"
          sx={{ color: theme.palette.primary.light }}
        >
          Written by <i>{quotations[0].author}</i>
        </Typography>
      </Box>
      <Masonry columns={3} spacing={3}>
        {quotations.map((quotation, index) => (
          <QuotationCard quotation={quotation} key={index} />
        ))}
      </Masonry>
    </>
  );
};
export default HomeScreen;
