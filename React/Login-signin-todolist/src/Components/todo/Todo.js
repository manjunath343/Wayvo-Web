import React, { useState, useEffect } from 'react';
import './Todo.css'; // Import the CSS file

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState('');
    const [dueDate, setDueDate] = useState('');

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('tdl')) || [];
        setTodos(storedTodos);
    }, []);

    useEffect(() => {
        localStorage.setItem('tdl', JSON.stringify(todos));
    }, [todos]);

    const addTodo = () => {
        if (task.trim() === '' || dueDate === '') {
            alert("Please enter both a task and a due date.");
            return;
        }
        setTodos([...todos, { task, duedate: dueDate, status: 'pending' }]);
        setTask('');
        setDueDate('');
    };

    const toggleStatus = (index) => {
        const updatedTodos = todos.map((todo, i) => 
            i === index ? { ...todo, status: todo.status === 'completed' ? 'pending' : 'completed' } : todo
        );
        setTodos(updatedTodos);
    };

    const editTodo = (index) => {
        const newTask = prompt("Edit Task:", todos[index].task);
        const newDueDate = prompt("Edit Due Date:", todos[index].duedate);

        if (newTask !== null && newDueDate !== null) {
            if (newTask.trim() === "" || newDueDate.trim() === "") {
                alert("Please enter both a task and a due date.");
                return;
            }
            const updatedTodos = todos.map((todo, i) => 
                i === index ? { ...todo, task: newTask, duedate: newDueDate } : todo
            );
            setTodos(updatedTodos);
        }
    };

    const deleteTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    return (
        <div className="todo-container">
            <h1 className="todo-title">Wayvo.ai Todo-List</h1>
            <div className="input-group">
                <input 
                    type="text" 
                    value={task} 
                    onChange={(e) => setTask(e.target.value)} 
                    placeholder="Enter your task" 
                    className="input-task" 
                />
                <input 
                    type="date" 
                    value={dueDate} 
                    onChange={(e) => setDueDate(e.target.value)} 
                    className="input-date" 
                />
                <button onClick={addTodo} className="add-button">Add</button>
            </div>
            <div className="todo-list">
                {todos.map((todo, index) => (
                    <div key={index} className="todo-item">
                        <div className="todo-text">
                            <span className={todo.status === 'completed' ? 'completed1' : ''}>
                                {todo.task} - {todo.duedate}
                            </span>
                        </div>
                        <div>
                            <button onClick={() => toggleStatus(index)} className="todo-button complete-button">
                                {todo.status === 'completed' ? 'Undo' : 'Complete'}
                            </button>
                            <button onClick={() => editTodo(index)} className="todo-button edit-button">Edit</button>
                            <button onClick={() => deleteTodo(index)} className="todo-button delete-button">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Todo;