import { useState } from "react";

export default function App() {
  const [loginCredentials, setLoginCredentials] = useState({
    username: "",
    password: ""
  });

  const [isLoggedin, setIsLoggedin] = useState(false);

  const login = () => {
    if (
      loginCredentials.username === "admin" &&
      loginCredentials.password === "adminpassword"
    ) {
      setIsLoggedin(!isLoggedin);
    }
  };

  const logout = () => {
    loginCredentials.username = "";
    loginCredentials.password = "";

    setIsLoggedin(!isLoggedin);
  };

  return (
    <>
      <div className="App">
        <h1>
          <center> Enhanced UI Login </center>
        </h1>
        <>
          <div>
            {isLoggedin ? (
              <h1>
                <center>Hello, {loginCredentials.username}!</center>
              </h1>
            ) : (
              <form>
                <label>Username:</label>
                <input
                  type="text"
                  placeholder="Enter Username"
                  value={loginCredentials.username}
                  onChange={(event) =>
                    setLoginCredentials((value) => {
                      return { ...value, username: event.target.value };
                    })
                  }
                />

                <label>Password:</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  value={loginCredentials.password}
                  onChange={(event) =>
                    setLoginCredentials((value) => {
                      return { ...value, password: event.target.value };
                    })
                  }
                  onKeyPress={(event) => {
                    const isKeyPressEnter = event.key === "Enter";
                    if (!isKeyPressEnter) return;
                    login();
                  }}
                />
              </form>
            )}
            {isLoggedin ? (
              <button onClick={logout}>Logout</button>
            ) : (
              <button onClick={login}>Login</button>
            )}
          </div>
        </>
      </div>
    </>
  );
}
