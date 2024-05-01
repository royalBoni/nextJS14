import React from "react";
import { addPost, deletePost } from "../../lib/action";

const ServerActionTest = () => {
  return (
    <div>
      ServerActionTest
      <form action={addPost}>
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="description" name="description" />
        <input type="text" placeholder="slug" name="slug" />
        <input type="text" placeholder="userId" name="userId" />
        <button>Create</button>
      </form>
      <form action={deletePost}>
        <input type="text" placeholder="id" name="id" />
        <button>delete</button>
      </form>
    </div>
  );
};

export default ServerActionTest;
