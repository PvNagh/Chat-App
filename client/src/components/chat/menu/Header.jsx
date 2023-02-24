import { useContext, useState } from 'react';
import { Box, styled } from '@mui/material';
import { AccountContext } from '../../../context/AccountProvider';
import { Chat as MessageIcon, Groups } from '@mui/icons-material';
import LogoutIcon from '@mui/icons-material/Logout';
import InfoDrawer from '../../drawer/Drawer';
import { useNavigate } from 'react-router-dom';

const Component = styled(Box)`
    height: 3.7rem;
    background: #F0F5F9;
    display: flex;
    padding: 8px 16px;
    align-items: center;
`;

const Wrapper = styled(Box)`
    margin-left:auto;
    & > * {
        margin-top:0.45rem;
        margin-left: 2.1rem;
        color: #1E2022;
        padding:2.9px;                
    };
    & :last-of-type {
        margin-bottom: 0.05rem;
    }
`;

const Image = styled('img')({
    height: 40,
    width: 40,
    borderRadius: '50%',
    cursor: "pointer"
})

const Header = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const { account, setAccount, setPerson } = useContext(AccountContext);
    const navigate = useNavigate();

    const toggleDrawer = () => {
        setOpenDrawer(true);
    }

    const handleClick = () => {
        navigate("/");
        sessionStorage.clear();
        setAccount('');
        setPerson({});
    };

    return (
        <>
            <Component>
                <Image src={account.picture} onClick={() => toggleDrawer()} />
                <Wrapper>
                    <Groups sx={{ fontSize: 31, "&:hover": { cursor: "pointer" } }} />
                    <MessageIcon sx={{ fontSize: 29, "&:hover": { cursor: "pointer" } }} />
                    <LogoutIcon sx={{ fontSize: 29, "&:hover": { cursor: "pointer" } }} onClick={() => { handleClick() }} />

                </Wrapper>
            </Component>
            <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} profile={true}></InfoDrawer>
        </>
    )
}

export default Header;