import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import {
    DownBoxText,
    LeftBox,
    RightBoxText,
    RightItem,
    Wrapper,
    Wrappers,
} from "./styled";

const Section = () => {
    return (
        <>
            <LeftBox>
                <Grid
                    container
                    rowSpacing="0.4rem"
                    columnSpacing="1.2rem"
                    justifyContent="center"
                >
                    <Grid item sm={6} xs={10} mt={2}>
                        <Wrapper>
                            <RightItem p={3}>
                                <Typography>
                                    <Image
                                        src="/images/ChooseF.svg"
                                        alt=""
                                        width={41}
                                        height={54}
                                    />
                                </Typography>
                                <RightBoxText>Excellent In Market</RightBoxText>
                            </RightItem>
                        </Wrapper>
                    </Grid>

                    <Grid item sm={6} xs={10}>
                        <Wrapper>
                            <RightItem p={3}>
                                <Typography>
                                    <Image
                                        src="/images/Select.svg"
                                        alt=""
                                        width={41}
                                        height={54}
                                    />
                                </Typography>
                                <RightBoxText>Highly Secure</RightBoxText>
                            </RightItem>
                        </Wrapper>
                    </Grid>

                    <Grid
                        item
                        sm={6}
                        xs={10}
                        mt={2}
                        // component={motion.div}
                        // variants={insideAnimation}
                        // transition={{ delay: 0.1, type: "tween" }}
                    >
                        <Wrappers>
                            <RightItem p={3}>
                                <Typography>
                                    <Image
                                        src="/Images/Like.svg"
                                        alt=""
                                        width={41}
                                        height={54}
                                    />
                                </Typography>
                                <DownBoxText>Easy Analytics</DownBoxText>
                            </RightItem>
                        </Wrappers>
                    </Grid>

                    <Grid item sm={6} xs={10}>
                        <Wrappers>
                            <RightItem p={3}>
                                <Typography>
                                    <Image
                                        src="/images/Music.svg"
                                        alt=""
                                        width={41}
                                        height={54}
                                    />
                                </Typography>
                                <DownBoxText>Priority Support</DownBoxText>
                            </RightItem>
                        </Wrappers>
                    </Grid>
                </Grid>
            </LeftBox>
        </>
    );
};

export default Section;
