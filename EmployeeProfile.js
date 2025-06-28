import React, { useEffect, useState } from "react";
import { getEmployeeProfile } from "./api";

function EmployeeProfile({ id, token, onBack }) {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (!id || !token) return;
    getEmployeeProfile(id, token)
      .then(res => setProfile(res.data))
      .catch(() => setProfile(null));
  }, [id, token]);

  if (!profile) return <div>Loading...</div>;

  return (
    <div>
      <button onClick={onBack}>Back</button>
      <h2>{profile.name}</h2>
      <p>Email: {profile.email}</p>
      {/* Add more profile fields as needed */}
    </div>
  );
}

export default EmployeeProfile;