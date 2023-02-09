import { useContext, useState} from 'react';
import { Box, styled } from '@mui/material';
import { AccountContext } from '../../../context/AccountProvider';
import { Chat as MessageIcon, Groups } from '@mui/icons-material';
import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../../drawer/Drawer';

const Component = styled(Box)`
    height: 3.7rem;
    background: #ededed;
    display: flex;
    padding: 8px 16px;
    align-items: center;
`;

const Wrapper = styled(Box)`
    margin-left: auto;
    & > * {
        margin-top:0.45rem;
        margin-left: 2rem;
        color: #3D5656;
        padding:2.7px;
    };
    & :last-of-child {
        margin-left: 1.5rem;
    }
`;

const Image = styled('img')({
    height: 40,
    width: 40,
    borderRadius: '50%',
    cursor:"pointer"
})

const Header = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const { account } = useContext(AccountContext);
    
    const toggleDrawer = () => {
        setOpenDrawer(true);
    }

    return (
        <>
            <Component>
                <Image src={account.picture} onClick={() => toggleDrawer()} />
                <Wrapper>
                    <Groups sx={{fontSize:30}} />
                    <MessageIcon sx={{fontSize:28}} />
                    <HeaderMenu />
                </Wrapper>
            </Component>
            <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} profile={true}></InfoDrawer>
        </>
    )
}

export default Header;