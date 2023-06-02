import AuthenticationService from ".././AuthenticationService.jsx";
import { useState } from "react";

const BACKEND_API_URL = "http://127.0.0.1:8000";
export default function Resources() {
  const [response, setResponse] = useState({});
  const hitApi = () => {
    fetch(BACKEND_API_URL, {
      headers: { Authorization: `Bearer ${AuthenticationService.getToken()}` },
    })
      .then((response) => response.json())
      .then((response) => setResponse(response))
      .catch((err) => setResponse(err));
  };

  if (AuthenticationService.isLoggedIn()) {
    return (
      <div className="mt-5">
        <p> You are logged in.</p>
        <div>
          GOT FROM API (CHECK CONSOLE FOR ERRORS):{" "}
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
        <button type="button" className="btn btn-primary" onClick={hitApi}>
          Hit API!
        </button>
      </div>
    );
  }
  return <div className="my-12">How did you ended up here?!</div>;
}
