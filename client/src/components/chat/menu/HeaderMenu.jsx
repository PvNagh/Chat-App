import { useState } from 'react';
import { MoreVert } from '@mui/icons-material';
import { styled } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const MenuOption = styled(MenuItem)`
    font-size: 14px
    color: #4A4A4A;
    cursor: pointer;
`;

const HeaderMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <MoreVert onClick={handleClick} sx={{
                fontSize: 30,
                "&:hover": {
                    cursor: "pointer",
                },
            }} />
            <Menu
                anchorEl={anchorEl}
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
