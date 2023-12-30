import React, { Fragment, useState, useEffect } from 'react';

const SearchTodo = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [todos, setTodos] = useState([]);

    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:8000/todos");
            const jsonData = await response.json();
            setTodos(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getTodos();
    }, []);

    useEffect(() => {
        const results = todos.filter(todo =>
            todo.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    }, [searchTerm, todos]);

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    return (
        <Fragment>
            <div className="input-group mb-3 mt-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search Todos"
                    value={searchTerm}
                    onChange={handleChange}
                />
            </div>
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th scope="col">Description</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {searchResults.map(todo => (
                        <tr key={todo.todo_id}>
                            <td>{todo.description}</td>
                            <td>
                                {/* Add EditTodo component here */}
                            </td>
                            <td>
                                {/* Add DeleteTodo button here */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
};

export default SearchTodo;