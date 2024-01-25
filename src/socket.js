import { io } from 'socket.io-client';

const URL = 'https://tweaxychat.gleeze.com/';
const URL_DEV = 'http://localhost:4000';

const socket = io(URL, { autoConnect: false });

export default socket;
