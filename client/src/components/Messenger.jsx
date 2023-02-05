import { AppBar, Toolbar, styled, Box ,CssBaseline} from '@mui/material';
import LoginDialog from './account/LoginDialog';

const Component = styled(Box)`
    height: 100vh;
    background: #FFFBF5;
`;

const Header = styled(AppBar)`
    background-color: #FFFBAC;
    height: 220px;
    box-shadow: none;
`;

const Messenger = () => {
    return (
        <Component>
            <>
                <Header>
                </Header>
                <LoginDialog />
            </>
            <CssBaseline></CssBaseline>
        </Component>
    )
}

export default Messenger;