import React, {useState} from 'react'
import ToDoListComponent from './components/ToDoListComponent'
import './App.css';

function App() {
	const [todo, setTodo] = useState('')
	const [todoLists, setToDoList] = useState([])
	const inputChange = (e) => {
		setTodo(e.target.value)
	}
	
	const addToDo = (e) => {
		e.preventDefault()
		let newTodo = {
			id: Date.now(),
			text: todo,
			isDone: false
		}
		setToDoList(prevList => [...prevList, newTodo])
		
		setTodo('')
	}

	const markDone = (id) => {
		const updateDone = todoLists.map(todo => {
			if(todo.id === id){
				todo.isDone = !todo.isDone
			}
			return todo
		})
		console.log('task done')
		setToDoList(updateDone)
	}

	const editToDo = (id, text) => {
		const updateToDoText = todoLists.map(todo => {
			if(todo.id === id){
				todo.text = text
			}
			return todo
		})
		setToDoList(updateToDoText)
	}

	const deleteToDo = (id) => {
		setToDoList(prevList => prevList.filter(todo => todo.id !== id))
	}

  return (
    <div className="to-do-app">
      <div className="add-to-do">
				<form onSubmit={addToDo}>
					<label htmlFor="input-to-do">To do : </label>
					<input value={todo} placeholder="Enter what you want to do here..." onChange={inputChange} required />
					<button type="submit">ADD</button>
				</form>
			</div>
			<ToDoListComponent data={todoLists} markDone={markDone} editToDo={editToDo} deleteToDo={deleteToDo} />
    </div>
  );
}

export default App;
