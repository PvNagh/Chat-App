import { useContext, useState, useEffect, useRef } from 'react';
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
    const [file, setFile] = useState();
    const [image, setImage] = useState("");
    const [incomingMessage, setIncomingMessage] = useState(null);

    const { account, socket } = useContext(AccountContext);

    const scrollRef = useRef();

    useEffect(() => {
        socket.current.on('getMessage', data => {
            setIncomingMessage({
                ...data,
                createdAt: Date.now()
            })
        })
    }, []);

    useEffect(() => {
        const getMessageDetails = async () => {
            let data = await getMessage(conversation?._id);
            setMessages(data);
        }
        getMessageDetails();
    }, [conversation?._id, person._id, newMessageFlag]);

    useEffect(() => {
        incomingMessage && conversation?.members?.includes(incomingMessage.senderId) &&
            setMessages((prev) => [...prev, incomingMessage]);

    }, [incomingMessage, conversation]);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ transition: "smooth" })
    }, [messages, conversation]);

    const sendText = async (e) => {
        let code = e.keyCode || e.which;//for enter key press
        if (!value) return;
        if (code === 13 || e.type === "click") {
            let message = {};
            if (!file) {
                message = {
                    senderId: account.sub,
                    receiverId: person.sub,
                    conversationId: conversation._id,
                    type: "text",
                    text: value
                }
            }
            else {
                message = {
                    senderId: account.sub,
                    receiverId: person.sub,
                    conversationId: conversation._id,
                    type: "file",
                    text: image
                }
            }

            socket.current.emit("sendMessage", message)
            await newMessage(message);
            setValue("");
            setImage("");
            setFile();
            setNewMessageFlag(prev => !prev);
        }
    }
    return (
        <Wrapper>
            <Component>
                {
                    messages && messages.map(message => (
                        <Container ref={scrollRef}>
                            <Message message={message.text} date={message.createdAt} senderId={message.senderId} messageType={message.type} />
                        </Container>
                    ))
                }
            </Component>
            <Footer
                setValue={setValue}
                sendText={sendText}
                value={value}
                file={file}
                setFile={setFile}
                setImage={setImage}
            />
        </Wrapper>
    )
}

export default Messages;