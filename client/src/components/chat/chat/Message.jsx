import { useContext } from "react";
import { Box, Typography, styled } from "@mui/material";
import { formatDate, downloadMedia } from "../../../utils/common-utils";
import { AccountContext } from "../../../context/AccountProvider";
import { iconPDF } from "../../../constants/data";
import { GetApp as GetAppIcon } from "@mui/icons-material";

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

const Message = ({ message, date, senderId, messageType }) => {

    const { account } = useContext(AccountContext);

    return (
        <>
            {
                account.sub === senderId ?
                    <Own>
                        {
                            messageType === "file" ? <ImageMessage message={message} date={date} /> : <TextMessage message={message} date={date} />
                        }
                    </Own>
                    :
                    <Wrapper>
                        {
                            messageType === "file" ? <ImageMessage message={message} date={date} /> : <TextMessage message={message} date={date} />
                        }
                    </Wrapper>
            }
        </>
    );
}

const TextMessage = ({ message, date }) => {

    return (
        <>
            <Text>{message}</Text>
            <Time>{formatDate(date)}</Time>
        </>
    )
}

const ImageMessage = ({ message, date }) => {

    return (
        <Box style={{ position: 'relative' }}>
            {
                message?.includes('.pdf') ?
                    <Box style={{ display: 'flex' }}>
                        <img src={iconPDF} alt="pdf-icon" style={{ width: 80 }} />
                        <Typography style={{ fontSize: 14 }}>{message.split("/").pop()}</Typography>
                    </Box>
                    :
                    <img style={{ width: 300, height: '100%', objectFit: 'cover' }} src={message} alt={message} />
            }
            <Time style={{ position: "absolute", bottom: 0, right: 0 }}>
                <GetAppIcon
                    onClick={(e) => downloadMedia(e, message)}
                    fontSize='small'
                    style={{
                        marginRight: 10, border: '1px solid grey', borderRadius: '50%', cursor: "pointer",
                    }}
                />
                {formatDate(date)}
            </Time>
        </Box>
    )
}

export default Message;