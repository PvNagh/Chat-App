import { useEffect } from 'react';
import { EmojiEmotions, AttachFile } from '@mui/icons-material';
import SendIcon from '@mui/icons-material/Send';
import { Box, styled, InputBase } from '@mui/material';
import { uploadFile } from '../../../service/api';

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

const Footer = ({ setValue, sendText, value, file, setFile, setImage }) => {

    const onFileChange = (e) => {
        setFile(e.target.files[0]);
        setValue(e.target.files[0].name);
    }

    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

                const response = await uploadFile(data);
                setImage(response.data);
            }
        }
        getImage();
    }, [file]);


    return (
        <Container>
            <EmojiEmotions
                sx={{
                    fontSize: 32,
                    mt: 2.5,
                    mb: 2,
                    ml: 1.5,
                    color: "#3D5656"
                }}
            />
            <label htmlFor="fileInput">
                <AttachFile
                    sx={{
                        transform: 'rotate(40deg)',
                        fontSize: 25,
                        mt: 2,
                        mb: 1,
                        color: "#3D5656",
                        "&:hover": {
                            cursor: "pointer",
                        },
                    }} />
            </label>
            <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={(e) => onFileChange(e)}
            />

            <Search>
                <InputField
                    placeholder="Type a message"
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={(e) => sendText(e)}
                    value={value}
                />
            </Search>
            <SendIcon
                onClick={(e) => sendText(e)}
                sx={{
                    fontSize: 30,
                    color: "#3D5656",
                    "&:hover": {
                        cursor: "pointer",
                    },
                }} />
        </Container>
    )
}

export default Footer;