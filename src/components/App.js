import React, { createContext, useContext, useState } from "react";

// 1. Create AuthContext
const AuthContext = createContext();

// 2. Auth component
function Auth() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  const handleCheckbox = (e) => {
    setIsAuthenticated(e.target.checked);
  };

  return (
    <div>
      <h2>Authentication</h2>

      <label>
        <input
          type="checkbox"
          checked={isAuthenticated}
          onChange={handleCheckbox}
        />
        I am not a robot
      </label>

      {isAuthenticated ? (
        <p>Authenticated Successfully!</p>
      ) : (
        <p>Please verify that you are not a robot.</p>
      )}
    </div>
  );
}

// 3. App component
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated }}
    >
      <Auth />
    </AuthContext.Provider>
  );
}

export default App;
