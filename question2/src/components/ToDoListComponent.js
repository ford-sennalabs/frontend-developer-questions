import React, {useState} from 'react'

function ToDoListComponent(props) {
	const [currentId, setCurrentId] = useState(0)
	const [currentText, setCurrentText] = useState('')
	const [editMode, setEditMode] = useState(false)
	const todoLists = props.data
	const markDone = props.markDone
	const editToDo = props.editToDo
	const deleteTodo = props.deleteToDo

	const handleEditToDo = (id, text) => {
		setCurrentId(id)
		setCurrentText(text)
		setEditMode(true)
	}

	const handleUpdateText = (e) => {
		e.preventDefault()
		editToDo(currentId, currentText)
		setEditMode(false)
	}

	const handleCurrentTextChange = (e) => {
		setCurrentText(e.target.value)
	}

	const styleDoneToDo = {
		textDecoration: 'line-through'
	}

	const list = todoLists.map((todo, index) => (
		<div key={todo.id}>
			{todo.isDone ? 
					<div className="item">
						<div style={styleDoneToDo}>{(index+1) +'. ' + todo.text}</div>
						<div className="action">
							<button onClick={() => deleteTodo(todo.id)} >Remove</button> 
						</div>								
					</div>
					
				: 
					<div className="item">
						<div>{(index+1) +'. ' +todo.text}</div>
						<div className="action">
							<button onClick={() => markDone(todo.id)}>Done</button>
							<button onClick={() => handleEditToDo(todo.id, todo.text)}>Edit</button>
							<button onClick={() => deleteTodo(todo.id)} >Remove</button> 
						</div>
					</div>
			}
		</div>
	))
	return (
		<div className="to-do-list">
			{editMode ? 
				<form onSubmit={handleUpdateText} className="edit-form">
					<input placeholder="edit task" onChange={handleCurrentTextChange} value={currentText} required></input>
					<button className="btn-cancel" onClick={()=>setEditMode(false)}>Cancel</button>
					<button className="btn-save" type='submit'>Save</button>
				</form> 
			:
				<>	
					{list}
				</>
			}
			
		</div>
	)
}

export default ToDoListComponent
