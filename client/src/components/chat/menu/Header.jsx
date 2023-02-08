import { useContext } from 'react';
import { Box, styled } from '@mui/material';
import { AccountContext } from '../../../context/AccountProvider';
import { Chat as MessageIcon, Groups } from '@mui/icons-material';
import HeaderMenu from './HeaderMenu';

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
        font-size:1.9rem;
        padding:2.7px;
    };
    & :first-child {
        margin-left:0px;
    }
    & :nth-child(2) {
        font-size:1.76rem;
    }
    & :last-child {
        margin-left: 1.5rem;
        cursor:pointer;
    }
`;

const Image = styled('img')({
    height: 40,
    width: 40,
    borderRadius: '50%'
})

const Header = () => {
    const { account } = useContext(AccountContext);
    return (
        <>
            <Component>
                <Image src={account.picture} />
                <Wrapper>
                    <Groups />
                    <MessageIcon />
                    <HeaderMenu />
                </Wrapper>
            </Component>
        </>
    )
}

export default Header;