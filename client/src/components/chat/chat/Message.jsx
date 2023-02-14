import { Box, Typography, styled } from "@mui/material";

export const Message = ({message}) => {
    return (
        <Box>
            <Typography>{message}</Typography>
            <Typography>{message.createdAt}</Typography>
        </Box>
    );
}
export default Message;