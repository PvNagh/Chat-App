import { Dialog, Typography, Box, styled } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

const Components = styled(Box)`
    display: flex; 
`;

const Containers = styled(Box)`
    padding: 56px 0 56px 56px;
`;

const Title = styled(Typography)`
    font-size: 26px;
    margin-bottom: 25px;
    color: #525252;
    font-family: Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif;
    font-weight: 300;
`;

const dialogStyle = {
    marginTop: '12%',
    height: '95%',
    width: '60%',
    maxWidth: '100',
    maxHeight: '100%',
    borderRadius: 0,
    boxShadow: 'none',
    overflow: 'hidden',
    borderRadius: '20px'
}

const LoginDialog = () => {

    const onLoginSuccess = async (res) => {
        let decoded = jwt_decode(res.credential);
        console.log("Success", decoded);
    };

    const onLoginFailure = (res) => {
        console.log("Login Fail", res);
    };

    return (
        <Dialog
            open={true}
            BackdropProps={{ style: { backgroundColor: 'unset' } }}
            maxWidth={'md'}
            PaperProps={{ sx: dialogStyle }}
        >
            <Components>
                <Containers>
                    <Title>Please Sign In</Title>
                </Containers>

                <Box style={{ position: 'absolute', top: '50%', transform: 'translateX(25%) translateY(-25%)' }}>

                    <GoogleLogin
                        buttonText=""
                        onSuccess={onLoginSuccess}
                        onError={onLoginFailure}
                    />
                </Box>
            </Components>
        </Dialog>
    )
}

export default LoginDialog;