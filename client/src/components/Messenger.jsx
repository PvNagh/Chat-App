import { useContext } from 'react';
import { AppBar, styled, Box, CssBaseline } from '@mui/material';
import ChatDialog from './chat/ChatDialog';
import LoginDialog from './account/LoginDialog';
import { AccountContext } from '../context/AccountProvider';

const Component = styled(Box)`
    height: 100vh;
    background: #FFFBF5;
`;

const Header = styled(AppBar)`
    background-color: #00A884;
    height: 125px;
    box-shadow: none;
`;

const LoginHeader = styled(AppBar)`
    background: #00bfa5;
    height: 200px;
    box-shadow: none;
`;

const Messenger = () => {
    const { account } = useContext(AccountContext);

    return (
        <Component>
            {
                account ?
                    <>
                        <Header />
                        <ChatDialog />
                        <CssBaseline></CssBaseline>
                    </>
                    :
                    <>
                        <LoginHeader>
                        </LoginHeader>
                        <LoginDialog />
                        <CssBaseline />
                    </>
            }
        </Component>
    )
}

export default Messenger;