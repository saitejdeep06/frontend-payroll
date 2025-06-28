import React, { useEffect, useState } from "react";
import { getEmployees } from "./api";

function EmployeeList({ token, onSelect }) {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    if (!token) return;
    getEmployees(token)
      .then(res => setEmployees(res.data))
      .catch(() => setEmployees([]));
  }, [token]);

  return (
    <ul>
      {employees.map(emp => (
        <li key={emp.id} onClick={() => onSelect(emp.id)}>
          {emp.name}
        </li>
      ))}
    </ul>
  );
}

export default EmployeeList;