import { useEffect, useState, useContext } from "react";
import { Box, styled, Divider } from "@mui/material";
import { getUsers } from "../../../service/api";
import { AccountContext } from "../../../context/AccountProvider";
import Conversation from "./Conversation";

//in case of overflow
const Component = styled(Box)` 
    overflow: overlay; 
    height: 81vh;
`;

const StyledDivider = styled(Divider)`
    margin: 1.5rem 0 0 4.7rem;
    background-color: #e9edef;
    opacity: .6;
`;

const Conversations = ({ text }) => {

    const [userConvo, setUserConvo] = useState([]);
    const { account } = useContext(AccountContext);

    useEffect(() => {
        const fetchData = async () => {
            let response = await getUsers();
            const filteredData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
            setUserConvo(filteredData);
        }
        fetchData();
    }, [text]);
    return (
        <Component>
            {
                userConvo && userConvo.map(user => (
                    user.sub !== account.sub &&
                    <>
                        <Conversation user={user} />
                        <StyledDivider />
                    </>
                ))

            }
        </Component>
    );
};

export default Conversations;