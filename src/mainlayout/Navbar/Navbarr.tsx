import React from "react";
// import { useTranslation } from "react-i18next";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Buttons, Lists, SignIn, Start } from "./navbarStyle";

const ResponsiveNav = () => {
    return (
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
    );
};

export default ResponsiveNav;
