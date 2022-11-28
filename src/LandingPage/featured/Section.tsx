import React, { FC } from "react";
import { Haeding, LogoBox, PaperSty, Paragraph1, ParentBox } from "./style";

interface Props {
    val: any;
}
const Section: FC<Props> = ({ val }) => {
    return (
        <PaperSty>
            <ParentBox>
                <LogoBox>
                    <img src={val.image} alt="" />
                </LogoBox>

                <Haeding>{val.heading}</Haeding>
                <Paragraph1>{val.text}</Paragraph1>
            </ParentBox>
        </PaperSty>
    );
};

export default Section;
