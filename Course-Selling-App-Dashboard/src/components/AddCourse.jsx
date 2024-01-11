import { Button, Card, TextField } from "@mui/material";
import { useState } from "react";

export function AddCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card variant="outlined" style={{ width: 400, padding: 20 }}>
        <TextField
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          label="Title"
          variant="outlined"
          fullWidth="true"
        ></TextField>
        <TextField
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          label="Description"
          variant="outlined"
          fullWidth="true"
        ></TextField>
        <Button
          onClick={() => {
            function callback2(data) {
              localStorage.setItem("token", data.token);
            }
            function callback1(res) {
              res.json().then(callback2);
            }
            fetch("http://localhost:3000/admin/courses", {
              method: "POST",
              body: JSON.stringify({
                title,
                description,
                imageLink: "",
                published: true,
              }),
              headers: {
                "Content-type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }).then(callback1);
          }}
          size="large"
          variant="contained"
        >
          Add Course
        </Button>
      </Card>
    </div>
  );
}
