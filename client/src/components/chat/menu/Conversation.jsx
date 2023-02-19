import { useContext, useEffect, useState } from "react";
import { Box, Typography, styled } from "@mui/material";
import { AccountContext } from "../../../context/AccountProvider";
import { setConversation, getConversation } from "../../../service/api";
import { formatDate } from "../../../utils/common-utils";


const Component = styled(Box)`
    display: flex;
    height: 3rem;
    padding: 0.7rem;
    cursor :pointer;
`
const Image = styled("img")({
    width: 50,
    height: 50,
    borderRadius: '50%',
    padding: "0rem"
});

const ImgComponent = styled(Box)`
    padding: 0 0.04rem 2rem;    
`

const NameComponent = styled(Box)`
    margin-left:0.9rem;
`

const Container = styled(Box)`
    display: flex;
`;

const Text = styled(Typography)`
    display: block;
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
    margin-top:7px;
`;

const Timestamp = styled(Typography)`
    font-size: 12px;
    color: #00000099;
    margin-left: 13rem;
`;

const Conversation = ({ user }) => {

    const { account, setPerson, newMessageFlag } = useContext(AccountContext);
    const [message, setMessage] = useState({});

    useEffect(() => {
        const getConversationMessage = async () => {
            const data = await getConversation({ senderId: account.sub, receiverId: user.sub });
            setMessage({ text: data?.message, timestamp: data?.updatedAt });
        }
        getConversationMessage();
    }, [newMessageFlag]);

    const getUser = async () => {
        setPerson(user);
        await setConversation({ senderId: account.sub, receiverId: user.sub });
    }

    return (
        <Component onClick={() => getUser()}>
            <ImgComponent>
                <Image src={user.picture} alt="dp" />
            </ImgComponent>
            <NameComponent>
                <Container>
                    <Typography>{user.name}</Typography>
                    {
                        message?.text &&
                        <Timestamp>{formatDate(message?.timestamp)}</Timestamp>
                    }
                </Container>
                <Box>
                    <Text>{message?.text?.includes('localhost') ? 'media' : message.text}</Text>
                </Box>
            </NameComponent>
        </Component>
    );
}

export default Conversation;