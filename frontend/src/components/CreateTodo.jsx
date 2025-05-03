import { useState } from "react";

export function CreateTodo() {
  return (
    <div>
      <input id="title" type="text" placeholder="title" />
      <input id="desc" type="text" placeholder="description" />
      <button
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: document.getElementById("title").value,
              description: document.getElementById("desc").value,
            }),
          }).then(async function (res) {
            const json = await res.json();
            alert("Todo added");
          });
        }}
      >
        Add a todo
      </button>
    </div>
  );
}
