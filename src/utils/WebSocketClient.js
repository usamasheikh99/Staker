import React, { useEffect, useRef, useState } from "react";
// import { setSocketInstance } from "./globals";

const WebSocketClient = ({ url, onReceiveData }) => {
  let [Socket,setSocketInstance] = useState(null)
  const socketRef = useRef(null);

  const connectWebSocket = () => {
    const socket = new WebSocket(url);

    socket.onopen = () => {
      console.log("WebSocket connection opened");
      setSocketInstance(socket);
    };

    socket.onmessage = (event) => {
      if (event.data instanceof Blob) {
        event.data.text().then((jsonData) => {
          try {
            const unescapedData = jsonData.replace(/\\/g, '');
            const parsedData = JSON.parse(unescapedData);
            onReceiveData(parsedData);
          } catch (error) {
            console.error("Error parsing JSON:", error);
          }
        });
      } else {
        console.log(`Received message`,event);
      }
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:");
    };

    socket.onclose = () => {
      console.log("WebSocket connection closed");
      // Reconnect after a short delay
      setTimeout(() => {
        connectWebSocket();
      }, 2000); // Adjust the delay as needed
    };

    socketRef.current = socket;
  };

  useEffect(() => {
    connectWebSocket();

    // Clean up the WebSocket on unmount
    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, [url]);

  // Render nothing, this is a pure logic component
  return null;
};

export default WebSocketClient;
