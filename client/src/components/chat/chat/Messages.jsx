import { useContext, useState, useEffect } from 'react';
import { Box, styled } from '@mui/material';
import Footer from './Footer';
import { AccountContext } from '../../../context/AccountProvider';
import { newMessage, getMessage } from '../../../service/api';
import Message from './Message.jsx';

const Wrapper = styled(Box)`
    background-color: #F0EEED;
    background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size: 50%;
`;

const Component = styled(Box)`
    height: 79vh;
    overflow-y: scroll;
`;

const Container = styled(Box)`
    padding: 1px 80px;
`;


const Messages = ({ person, conversation }) => {

    const [value, setValue] = useState();
    const [messages, setMessages] = useState([]);
    const [newMessageFlag, setNewMessageFlag] = useState(false);
    const { account } = useContext(AccountContext);

    useEffect(() => {
        const getMessageDetails = async () => {
            let data = await getMessage(conversation?._id);
            setMessages(data);
        }
        getMessageDetails();
    }, [conversation?._id, person._id, newMessageFlag]);

    const sendText = async (e) => {
        let code = e.keyCode || e.which;//for enter key press
        if (!value) return;
        if (code === 13 || e.type === "click") {
            let message = {
                senderId: account.sub,
                receiverId: person.sub,
                conversationId: conversation._id,
                type: "text",
                text: value
            };
            await newMessage(message);
            setValue("");
            setNewMessageFlag(prev => !prev);
        }
    }
    return (
        <Wrapper>
            <Component>
            {
                    messages && messages.map(message => (
                        <Container>
                            <Message message={message.text} date={message.createdAt} senderId={message.senderId} />
                        </Container>
                    ))
                }
            </Component>
            <Footer
                setValue={setValue}
                sendText={sendText}
                value={value}
            />
        </Wrapper>
    )
}

export default Messages;