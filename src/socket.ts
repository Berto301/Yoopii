import { io } from "socket.io-client";

// "undefined" means the URL will be computed from the `window.location` object
const URL =  "http://localhost:3000" //import.meta.env.VITE_GRAPHQL_URL ||
console.log({URL})
export const socket = io(URL,{
    transports: ["websocket", "polling", "flashsocket"]
  });