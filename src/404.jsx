// ** Next Import

// ** MUI Components
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// ** Demo Imports
import { Link } from "react-router-dom";

// ** Styled Components
const BoxWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "90vw",
  },
}));

// const Img = styled("img")(({ theme }) => ({
//   [theme.breakpoints.down("lg")]: {
//     height: 450,
//     marginTop: theme.spacing(10),
//   },
//   [theme.breakpoints.down("md")]: {
//     height: 400,
//   },
//   [theme.breakpoints.up("lg")]: {
//     marginTop: theme.spacing(20),
//   },
// }));

const Error404 = () => {
  return (
    <Box
      sx={{
        display: "flex", // Flexbox layout
        flexDirection: "column", // Stack children vertically
        minHeight: "100vh", // Full viewport height
        justifyContent: "center", // Center children vertically
        alignItems: "center", // Center children horizontally
        // backgroundColor: "#f0f0f0", // Optional background color
      }}
      className="content-center"
    >
      <Box
        sx={{
          p: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <BoxWrapper>
          <Typography variant="h2" sx={{ mb: 1.5 }}>
            Page Not Found :(
          </Typography>
          <Typography sx={{ mb: 6, color: "text.secondary" }}>
            Oops! 😖 The requested URL was not found on this server.
          </Typography>
          <Link to="/">Go back to Home</Link>
          {/* <Button href="/" component={Link} variant="contained">
            Back to Home
          </Button> */}
        </BoxWrapper>
      </Box>
    </Box>
  );
};

export default Error404;
