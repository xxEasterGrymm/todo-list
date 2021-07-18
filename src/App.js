import './App.css';
import Header from "./MyComponents/Header";
import {Todo} from "./MyComponents/Todo";
import {Footer} from "./MyComponents/Footer";

function App() {
  const onDelete = (todo)=> {
    console.log("This is onDelete of todo", todo);
    let index = todos.indexOf(todo);
    todos.splice();
  }

  let todo = [
    {
      sno: 1,
      title: "Go to the market",
      desc: "Go to the market to buy grocery"
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "Go to the mall to buy clothes"
    },
    {
      sno: 3,
      title: "Go to the zoo",
      desc: "Go to the zoo to see animals"
    }
  ]
  return (
    <>
      <Header searchBar={false}/>
      <Todo todo={todo} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;