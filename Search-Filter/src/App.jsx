import { useEffect, useState } from "react";
import "./App.css";
import { Table } from "./Table";
import { Users } from "./users";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get("http://localhost:3000");
      setData(res.data);
    };
    fetchUsers();
  }, []);

  // const keys = ["first_name", "last_name", "email"]
  // const search = (data) => {
  //   return data.filter((item) =>
  //     keys.some((key) => item[key].toLowerCase().includes(query))
  //   );
  // };
  // const filteredUsers = Users.filter(
  //   (user) =>
  //     user.first_name.toLowerCase().includes(query.toLowerCase()) ||
  //     user.last_name.toLowerCase().includes(query.toLowerCase()) ||
  //     user.email.toLowerCase().includes(query.toLowerCase())
  // );
  return (
    <div className="app">
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Table data={data} />
    </div>
  );
}

export default App;
