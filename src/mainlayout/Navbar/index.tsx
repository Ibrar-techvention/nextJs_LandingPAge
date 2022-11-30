import { useState } from "react";
import { MenuItem, Box, Drawer } from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import ResponsiveNav from "./Navbarr";
import {
    Appbar,
    ToolBar,
    Stacks,
    Heading,
    LoginButton,
    StartButton,
    Paperss,
    ButtonText,
    MainBox,
    ButtonStyle,
    Selects,
} from "./navbarStyle";

// import { useDispatch, useSelector } from "react-redux";
// import { selectTranslations, setLang } from "redux/slices/i18nSlice";
// import { directions } from "utils";

const Navbar = () => {
    const [opened, setOpen] = useState(false);
    const Boxes: any = styled(Box)(({ theme }) => ({
        display: "none",
        [theme.breakpoints.down("lg")]: {
            display: `${opened === true ? "block" : "none"}`,
        },
    }));

    // const dispatch = useDispatch();
    // const t = useSelector(selectTranslations);
    // const lang = useSelector((state: any) => state.i18n.lang);
    const [language] = useState("en");

    const handleMenu = () => {
        setOpen(!opened);
    };
    const Close = () => {
        setOpen(false);
    };
    // const handleLanguage = useCallback(
    //     (e: any) => {
    //         dispatch(setLang.setLang(e.target.value));
    //         setLanguage(e.target.value);
    //         document.dir = directions[e.target.value];
    //     },
    //     [dispatch]
    // );
    // useEffect(() => {
    //     document.dir = directions[lang];
    // }, [lang]);
    return (
        <>
            <Appbar position="static" color="transparent">
                <MainBox>
                    <ToolBar>
                        <Heading>Marktronic</Heading>
                        <Stacks direction="row" spacing="0.8rem">
                            <ButtonText
                                color="inherit"
                                endIcon={<KeyboardArrowDownIcon />}
                                size="small"
                            >
                                Projects
                            </ButtonText>
                            <ButtonText
                                color="inherit"
                                endIcon={<KeyboardArrowDownIcon />}
                                size="small"
                            >
                                Team
                            </ButtonText>
                            <ButtonText color="inherit" size="small">
                                Blog
                            </ButtonText>
                            <ButtonText color="inherit" size="small">
                                Pricing
                            </ButtonText>
                        </Stacks>
                        <Stacks
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Selects
                                value={language}
                                name="language"
                                // onChange={handleLanguage}
                                size="small"
                                inputProps={{
                                    MenuProps: { disableScrollLock: true },
                                }}
                            >
                                <MenuItem value="en" selected>
                                    <Image
                                        src="/Images/USS.png"
                                        alt=""
                                        width={40}
                                        height={28}
                                    />
                                </MenuItem>
                                <MenuItem value="ar">
                                    <Image
                                        src="/Images/SA.jpg"
                                        alt=""
                                        width={40}
                                        height={32}
                                    />
                                </MenuItem>
                            </Selects>
                            <LoginButton color="inherit">Sign In</LoginButton>
                            <StartButton color="primary" variant="contained">
                                Start Free
                            </StartButton>
                        </Stacks>

                        <ButtonStyle onClick={handleMenu}>
                            <MenuIcon className="iconSize"/>
                            <SearchIcon className="iconSize"/>
                        </ButtonStyle>

                        
                    </ToolBar>
                </MainBox>
            </Appbar>
            <Boxes>
                <Drawer
                    PaperProps={Paperss}
                    anchor="left"
                    open={opened}
                    onClose={Close}
                >
                    <ResponsiveNav />
                </Drawer>
            </Boxes>
        </>
    );
};
export default Navbar;
