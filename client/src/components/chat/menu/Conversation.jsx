import { Box, Typography, styled } from "@mui/material";
import { height } from "@mui/system";

const Component = styled(Box)`
    display: flex;
    height: 3rem;
    padding: 0.5rem;
    cursor :pointer;
`
const Image = styled("img")({
    width: 50,
    height: 50,
    borderRadius: '75%',
});

const ImgComponent = styled(Box)`
    padding: 0 0.7rem;    
`

const Conversation = ({ user }) => {
    return (
        <Component>
            <ImgComponent>
                <Image src={user.picture} alt="dp" />
            </ImgComponent>
            <Box>
                <Typography>{user.name}</Typography>
            </Box>
        </Component>
    );
}

export default Conversation;