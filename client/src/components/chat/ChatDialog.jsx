import { useContext } from 'react';
import { Dialog, styled } from '@mui/material';
import { Box } from '@mui/system';
import EmptyChat from './chat/EmptyChat';
import Menu from './menu/Menu'
import ChatBox from './chat/ChatBox';
import { AccountContext } from '../../context/AccountProvider';

const Component = styled(Box)`
    display:flex;
`;

const dialogStyle = {
    height: '96%',
    width: '100%',
    margin: '20px',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: 0,
    overflow: 'hidden'
};

const LeftComponent = styled(Box)`
    min-width: 450px;
`;

const RightComponent = styled(Box)`
    width: 73%;
    min-width: 300px;
    height: 100%;
    border-left: 1px solid rgba(0, 0, 0, 0.14);
`;

const ChatDialog = () => {

    const { person } = useContext(AccountContext);

    return (
        <>
            <Dialog
                open={true}
                BackdropProps={{ style: { backgroundColor: 'unset' } }}
                PaperProps={{ sx: dialogStyle }}
                maxWidth={'md'}
            >
                <Component>
                    <LeftComponent>
                        <Menu />
                    </LeftComponent>
                    <RightComponent>
                        {
                            Object.keys(person).length ? <ChatBox /> : <EmptyChat />
                        }
                    </RightComponent>
                </Component>
            </Dialog>
        </>
    )
}

export default ChatDialog;