import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Masonry from "@mui/lab/Masonry";
import { Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useGetQuotationsQuery } from "../slices/quotationsApiSlice";
import { setQuotes } from "../slices/quotesSlice";
import QuotationCard from "../components/QuotationCard";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const {
    data: quotations,
    isLoading,
    isError,
    error,
  } = useGetQuotationsQuery();

  useEffect(() => {
    if (quotations) {
      dispatch(setQuotes(quotations));
    }
  }, [dispatch, quotations]);

  const { quotes } = useSelector((state) => state.quotes);

  // if (isLoading) return <h2>Loading...</h2>;
  // if (isError) return <div>{error.data.message}</div>;

  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : isError ? (
        <div>${error?.data?.message}</div>
      ) : (
        <>
          <Box sx={{ marginTop: 6, marginBottom: 10 }}>
            <Typography
              variant="h1"
              component="h1"
              align="center"
              marginBottom={1}
              sx={{ color: theme.palette.primary.main }}
            >
              A reader lives a thousand lives before he dies.
            </Typography>
            <Typography
              variant="subtitle"
              component="div"
              align="center"
              sx={{ color: theme.palette.primary.light, fontStyle: "italic" }}
            >
              – George R. R. Martin, A Dance with Dragons
            </Typography>
          </Box>
          <Masonry columns={3} spacing={3}>
            {quotes.map((quotation, index) => (
              <QuotationCard quotation={quotation} key={index} />
            ))}
          </Masonry>
        </>
      )}
    </>
  );
};

export default HomeScreen;
