import React, { useEffect, useState } from "react";
import axios from "axios";

const TestApiComponent = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("https://localhost:7282/api/test/ping") // Adjust the URL as per your backend
      .then((response) => {
        console.log("API Response:", response);
        setMessage(response.data);
      })
      .catch((error) => {
        console.error("Error connecting to backend:", error);
      });
  }, []);

  return (
    <div>
      <h1>React to .NET Backend Test</h1>
      <p>Response from backend: {message}</p>
    </div>
  );
};

export default TestApiComponent;
