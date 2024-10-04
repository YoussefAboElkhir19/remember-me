import { useRef, useState } from "react";

const Note = () => {
  const [todos, settodos] = useState([]);
  const inputTRef = useRef();

  function handelAddTodo() {
    const text = inputTRef.current.value;
    // object inside it completed or not and value of text
    const newItem = {
      completed: false,
      text,
    };
    settodos([...todos, newItem]);
    inputTRef.current.value = "";
  }
  function handelDone(index) {
    // to coppy a array by spread array
    const neWTodos = [...todos];
    neWTodos[index].completed = !neWTodos[index].completed;
    // set array
    settodos(neWTodos);
  }
  //function to delet
  function handelDelete(index) {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    settodos(newTodo);
  }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-4">
          Remember Me
        </h2>
        <div className="flex space-x-2">
          <input
            ref={inputTRef}
            placeholder="Enter item..."
            className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={handelAddTodo}
            className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition duration-300"
          >
            Add
          </button>
        </div>

        <ul className="mt-4 space-y-2">
          {/* {} because this is a object  */}
          {todos.map(({ text, completed }, index) => (
            <div className="bg-indigo-100 flex items-center justify-between p-2 rounded-md shadow">
              {/* Left icon */}
              <div className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="black"
                  className="bi bi-arrow-right-circle"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
                  />
                </svg>
              </div>

              {/* List item */}
              <li
                key={index}
                className={`flex-1 text-indigo-700 p-2 ${
                  completed ? "done" : ""
                }`}
                onClick={() => handelDone(index)}
              >
                {text}
              </li>

              {/* close icon */}
              <div className="ml-2" onClick={() => handelDelete(index)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="red"
                  className="bi bi-x-octagon-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708" />
                </svg>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Note;
