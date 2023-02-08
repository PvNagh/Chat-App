import { useState } from 'react';
import { MoreVert } from '@mui/icons-material';
import { Menu, MenuItem, styled } from '@mui/material';

const MenuOption = styled(MenuItem)`
    font-size: 14px
    color: #4A4A4A;
    cursor: pointer;
`;

const HeaderMenu = () => {
    const [open, setOpen] = useState(null);
    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(null);
    };
    return (
        <>
            <MoreVert onClick={handleClick} />
            <Menu
                anchorEl={open}
                keepMounted
                open={open}
                onClose={handleClose}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuOption onClick={() => { handleClose() }}>Profile</MenuOption>
                <MenuOption onClick={() => { handleClose(); }}>
                    Login/logout
                </MenuOption>
            </Menu>
        </>
    )
}

export default HeaderMenu;
