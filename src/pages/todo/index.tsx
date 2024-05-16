import { GetServerSideProps } from "next";
import React from "react";

interface Itodo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

interface todoProps {
  todos: Itodo[];
}
function Todos({ todos }: todoProps) {
  console.log("dalam component", todos);
  return (
    <div>
      <h1>Todo Page</h1>
      {todos.map((item) => (
        <div key={item.id}>
          <h1>{item.todo}</h1>
        </div>
      ))}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("https://dummyjson.com/todos");
  const objListProps: todoProps = await response.json();
  const todos = objListProps.todos;
  return {
    props: {
      todos,
    },
  };
};

export default Todos;
