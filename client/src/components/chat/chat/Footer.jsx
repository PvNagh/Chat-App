import { EmojiEmotions, AttachFile} from '@mui/icons-material';
import SendIcon from '@mui/icons-material/Send';
import { Box, styled, InputBase } from '@mui/material';

const Container = styled(Box)`
    height: 3.7rem;
    background: #ededed;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 2px;
    &  > * {
        margin:0.45rem;
        color: #3D5656;
        padding:2.7px;
    }
`;

const Search = styled(Box)`
    border-radius: .8rem;
    background-color: #FFFFFF;
    width: 54rem;
`;

const InputField = styled(InputBase)`
    width: 100%;
    padding: 1.2rem;
    padding-left: 1rem;
    font-size: 14px;
    height: 1rem;
    width: 100%;
`;

const Footer = () => {
    return (
        <Container>
            <EmojiEmotions
                sx={{
                    fontSize: 32,
                    mt:2.5,
                    mb:2,
                    ml:1.5,
                    color: "#3D5656"
                }}
            />
            <label htmlFor="fileInput">
                <AttachFile
                    sx={{
                        transform: 'rotate(40deg)',
                        fontSize: 25,
                        mt:2,
                        mb:1,
                        color: "#3D5656",
                      
                    }} />
            </label>
            <input
                type='file'
                id="fileInput"
                style={{ display: 'none' }}
            />

            <Search>
                <InputField
                    placeholder="Type a message"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
            <SendIcon sx={{ fontSize: 30, color: "#3D5656",}} />
        </Container>
    )
}

export default Footer;