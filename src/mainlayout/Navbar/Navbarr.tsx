// import { useTranslation } from "react-i18next";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Buttons, Heading, Lists, SignIn, Start } from "./navbarStyle";
import { Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
const Mains = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1.5rem 1.5rem 1.5rem 1rem",
});
const ResponsiveNav = ({ setOpenn }) => {
  const closeDrwaer = () => {
    setOpenn(false);
  };
  return (
    <Box>
      <Mains>
        <Typography variant="h5">Marktronic</Typography>
        <CloseIcon className="closeIcon" onClick={closeDrwaer} />
      </Mains>
      <Lists>
        <Buttons color="inherit" endIcon={<KeyboardArrowDownIcon />}>
          Projects
        </Buttons>
        <Buttons color="inherit" endIcon={<KeyboardArrowDownIcon />}>
          Team
        </Buttons>
        <Buttons color="inherit">Blog</Buttons>
        <Buttons color="inherit">Pricing</Buttons>
        <SignIn color="inherit">Sign In</SignIn>
        <Start color="primary" variant="contained">
          Start Free
        </Start>
      </Lists>
    </Box>
  );
};

export default ResponsiveNav;
