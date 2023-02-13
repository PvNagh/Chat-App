import { useContext } from "react";
import { Box, Typography, styled } from "@mui/material";
import { AccountContext } from "../../../context/AccountProvider";

const Component = styled(Box)`
    display: flex;
    height: 3rem;
    padding: 0.7rem;
    cursor :pointer;
`
const Image = styled("img")({
    width: 50,
    height: 50,
    borderRadius: '50%',
    padding: "0rem"
});

const ImgComponent = styled(Box)`
    padding: 0 0.04rem 2rem;    
`

const NameComponent = styled(Box)`
    margin-left:0.9rem;
`

const Conversation = ({ user }) => {

    const { setPerson} = useContext(AccountContext);

    const getUser = async () => {
        setPerson(user);
    }

    return (
        <Component onClick={() => getUser()}>
            <ImgComponent>
                <Image src={user.picture} alt="dp" />
            </ImgComponent>
            <NameComponent>
                <Typography>{user.name}</Typography>
            </NameComponent>
        </Component>
    );
}

export default Conversation;