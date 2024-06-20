import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Todo = {
  id: number;
  text: string;
  isChecked: boolean;
};

const TodoList: React.FC = () => {
  let title: string = "오늘 할 일";

  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "공부", isChecked: false },
    { id: 2, text: "알바", isChecked: false },
    { id: 3, text: "미팅", isChecked: false },
  ]);

  const [newTodo, setNewTodo] = useState<string>("");
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  const handleCheckedChange = (itemId: number) => {
    setTodos((prevItems) =>
      prevItems.map((val) =>
        val.id === itemId ? { ...val, isChecked: !val.isChecked } : val
      )
    );
  };

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: newTodo, isChecked: false }]);
      setNewTodo("");
    }
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((val) => val.id !== id));
  };

  const handleTodoClick = (todo: Todo) => {
    setShowDetail(true);
    setSelectedTodo(todo);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
  };

  return (
    <div>
      <h1>{title}</h1>
      <div className="container">
        <div>
          <input
            type="text"
            placeholder="할 일 입력"
            style={{ marginRight: "10px", writingMode: "horizontal-tb" }}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <Button variant="warning" onClick={addTodo}>
            추가
          </Button>
        </div>
        <p></p>
        <div className="board">
          <ul>
            {todos.map((val) => (
              <li key={val.id}>
                <input
                  type="checkbox"
                  onChange={() => {
                    handleCheckedChange(val.id);
                  }}
                />
                <span onClick={() => handleTodoClick(val)}>
                  {val.isChecked ? (
                    <del>{val.text}</del>
                  ) : (
                    <span>{val.text}</span>
                  )}
                </span>
                <button className="delbtn" onClick={() => removeTodo(val.id)}>
                  삭제
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
