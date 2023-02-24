import { Server } from "socket.io";

const io = new Server(9000, {
    cors: {
        origin: "http://localhost:3000",
    },
})

let users = [{},{}];

const signup = (userData, socketId) => {
    !users.some(user => user.email === userData.email) && users.push({ ...userData, socketId });
}

const getUser = (userId) => {
    return users.find(user => user.email === userId);
}

io.on("connection", (socket) => {
    console.log("user connected");

    //connect
    socket.on("signup", userData => {
        signup(userData, socket.id);
        io.emit("getUsers", users);
    })

    //send message
    socket.on("sendMessage", (data) => {
        const user = getUser(data.receiverId);
        console.log(user);
        io.to(user.socketId).emit("getMessage", data)
    })
})
