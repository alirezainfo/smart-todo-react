import { useState } from "react";
import { useTodoState } from "./store/todoStore";

  function App() {

    const [title, setTitle] = useState("");
    const addTodo = useTodoState((states)=>(states.addTodo))
    const todos = useTodoState((states)=>(states.todos))

    function onSubmitHandler(e: any){
      e.preventDefault();
      if(!title.trim()) return;
      addTodo(title)
      setTitle("")
    }

    return (
      <>
      <style>
          {`
            .container {
              width: 100%;
            }

            @media (min-width:768px){
            .container {
              width: fit-content;
            }
            }
          `}
        </style>
        <div dir="rtl" className="md:p-20 p-5">
          <p className="text-red-500 font-extrabold text-3xl">وظایف امروز</p>

          <div className="flex container justify-start items-start flex-col">
            <div className="flex w-full flex-col md:flex-row justify-start items-safe gap-4 mt-10">
              <div className="flex gap-4">
                <form className="flex gap-4" onSubmit={onSubmitHandler} action="">
                <input
                  value={title}
                  type="text"
                  className="border-2 placeholder:text-gray-300 bg-inherit outline-none text-gray-300 border-gray-200 p-3 w-full md:w-[300px] rounded-lg text-sm"
                  placeholder="تسکت رو اینجا بنویس..."
                  onChange={(e) => setTitle(e.target.value)}
                />
                <button type="submit" className="border-2 md:p-3 whitespace-nowrap py-3 px-2 rounded-lg text-sm text-gray-300 hover:bg-[#ef4343] active:bg-[#ef4343] hover:text-white">
                  اضافه کردن
                </button>
                </form>
              </div>

              <div className="flex gap-2 md:mr-8 mr-0">
                <button className="text-white md:text-sm text-xs bg-blue-700 px-3 rounded-xl">
                  فعال
                </button>
                <button className="text-white md:text-sm text-xs border-blue-700 border p-3 rounded-xl">
                  تکمیل‌ها
                </button>
                <button className="text-white md:text-sm text-xs border-blue-700 border p-3 rounded-xl">
                  همه‌ها
                </button>
              </div>
            </div>
            <div className="mt-16 w-full">
              <ul className="flex flex-col gap-5">
                {todos.map((todo)=>(
                <li key={todo.id} className="flex justify-between items-center gap-16 w-full">
                  <div className="flex gap-1">
                    {/* <input type="checkbox" className="bg-inherit" /> */}
                    <span className="text-gray-300 text-xs md:text-sm">
                      {todo.title}
                    </span>
                  </div>

                  <div className="flex justify-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20S"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#8080ff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-square-pen-icon lucide-square-pen cursor-pointer"
                    >
                      <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                      <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ff0000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-trash-icon lucide-trash cursor-pointer"
                    >
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                      <path d="M3 6h18" />
                      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                  </div>
                </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }

  export default App;
