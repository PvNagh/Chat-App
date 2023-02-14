import { useContext, useState, useEffect } from 'react';
import { Box, styled } from '@mui/material';
import Footer from './Footer';
import { AccountContext } from '../../../context/AccountProvider';
import { newMessage, getMessage } from '../../../service/api';
import Message from './Message';

const Wrapper = styled(Box)`
    background-color: #F0EEED;
    background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size: 50%;
`;

const Component = styled(Box)`
    height: 79vh;
    overflow-y: scroll;
`;

const Messages = ({ person, conversation }) => {

    const [value, setValue] = useState();
    const [messages, setMessages] = useState([]);
    const { account } = useContext(AccountContext);

    useEffect(() => {
        const getMessageDetails = async () => {
            let data = await getMessage(conversation._id);
            setMessages(data);
        }
        conversation._id&&getMessageDetails();
    }, [conversation._id, person._id]);

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
        }
    }
    return (
        <Wrapper>
            <Component>
                {
                    messages && messages.map(message => {
                        <Message message={message} />
                    })
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