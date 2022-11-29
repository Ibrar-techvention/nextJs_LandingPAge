import { FC } from "react";
import { Haeding, LogoBox, PaperStyle, Paragraph1, ParentBox } from "./style";

interface Props {
    val: any;
}
const FirstItem: FC<Props> = ({ val }) => {
    return (
        <PaperStyle>
            <ParentBox>
                <LogoBox>
                    <img src={val.image} alt="" />
                </LogoBox>

                <Haeding>{val.heading}</Haeding>
                <Paragraph1>{val.text}</Paragraph1>
            </ParentBox>
        </PaperStyle>
    );
};

export default FirstItem;
