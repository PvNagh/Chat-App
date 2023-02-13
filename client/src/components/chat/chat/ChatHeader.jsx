import { Box, Typography, styled } from '@mui/material';
import { Search, MoreVert } from '@mui/icons-material';
import { defaultProfilePicture } from '../../../constants/data';

const Header = styled(Box)`
    height: 3.7rem;
    background: #ededed;
    display: flex;
    padding: 8px 16px;
    align-items: center;
`;

const Image = styled('img')({
    width: 40,
    height: 40,
    objectFit: 'cover',
    borderRadius: '50%'
})

const Name = styled(Typography)`
    margin-left: 12px;
`;

const RightContainer = styled(Box)`
    margin-left: auto;
    & > svg {
        margin-top:0.45rem;
        margin-left: 1rem;
        color: #3D5656;
        padding:2.7px;
    }
`;

const Status = styled(Typography)`
    font-size: 12px !important;
    color: rgb(0, 0, 0, 0.6);
    margin-left: 12px !important;
`;

const ChatHeader = ({ person }) => {

    const url = person.picture || defaultProfilePicture;
    return (
        <Header>
            <Image src={url} alt={person.picture} />
            <Box>
                <Name>{person.name}</Name>
                <Status>status</Status>
            </Box>
            <RightContainer>
                <Search sx={{ fontSize: 30 }} />
                <MoreVert sx={{ fontSize: 30 }} />
            </RightContainer>
        </Header>
    )
}

export default ChatHeader;