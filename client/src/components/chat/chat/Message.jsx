import { useContext } from "react";
import { Box, Typography ,styled } from "@mui/material";
import { formatDate } from "../../../utils/common-utils";
import { AccountContext } from "../../../context/AccountProvider";

const Own = styled(Box)`
    background: #dcf8c6;
    padding: 5px;
    max-width: 60%;
    width: fit-content;
    margin-left: auto;
    display: flex;
    border-radius: 7px;
    word-break: break-word;
`;

const Wrapper = styled(Box)`
    background: #FFFFFF;
    padding: 5px;
    max-width: 60%;
    width: fit-content;
    display: flex;
    border-radius: 7px;
    word-break: break-word;
`;

const Text = styled(Typography)`
    font-size: 14px;
    padding: 0 25px 0 5px;
`;

const Time = styled(Typography)`
    font-size: 10px;
    color: #919191;
    margin-top: 6px;
    word-break: keep-all;
    margin-top: auto;
`;

const Message = ({ message, date ,senderId}) => {

    const { account } = useContext(AccountContext);

    return (
        <>
            {
                account.sub === senderId ?
                    <Own>
                        <Text>{message}</Text>
                        <Time>{formatDate(date)}</Time>
                    </Own>
                    :
                    <Wrapper>
                        <Text>{message}</Text>
                        <Time>{formatDate(date)}</Time>
                    </Wrapper>
            }
        </>

    );
}

export default Message;