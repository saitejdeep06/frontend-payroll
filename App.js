import React, { useState } from "react";
import Login from "./Login";
import EmployeeList from "./EmployeeList";
import EmployeeProfile from "./EmployeeProfile";

function App() {
  const [token, setToken] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  if (!token) return <Login onLogin={setToken} />;

  return (
    <div>
      <h1>Employee Directory</h1>
      {!selectedId ? (
        <EmployeeList token={token} onSelect={setSelectedId} />
      ) : (
        <EmployeeProfile
          id={selectedId}
          token={token}
          onBack={() => setSelectedId(null)}
        />
      )}
    </div>
  );
}

export default App;