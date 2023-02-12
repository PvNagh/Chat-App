import axios from "axios";

const url = 'http://localhost:8000';

export const addUser = async (data) => {
    try {
        let response = await axios.post(`${url}/add`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling addUser API ', error);
    }
}

export const getUsers = async () => {
    try {
        const response = await axios.get(`${url}/users`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log('Error while calling getUsers API ', error);
    }
}