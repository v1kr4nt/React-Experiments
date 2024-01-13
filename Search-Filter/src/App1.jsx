import { useState } from "react";
import { Users } from "./users";

export function App1() {
  const [query, setQuery] = useState("");
  const filteredUsers = Users.filter(
    (user) =>
      user.first_name.toLowerCase().includes(query.toLowerCase()) ||
      user.last_name.toLowerCase().includes(query.toLowerCase()) ||
      user.email.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
      />
      {filteredUsers.length > 0 ? (
        <Table data={filteredUsers} />
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

function Table({ data }) {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
          </tr>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
