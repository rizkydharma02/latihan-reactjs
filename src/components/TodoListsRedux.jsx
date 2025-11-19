import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, editTodo, toggleTodo } from '../features/todos/todosSlice';

const TodoListsRedux = () => {
  // usestate for input
  const [input, setInput] = useState('');
  const [editText, setEditText] = useState('');
  const [editingId, setEditingId] = useState(null);

  // get data from redux store
  const todos = useSelector((state) => state.todos.todos);

  // dispatch for actions
  const dispatch = useDispatch();

  // handle add todo
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  // handle toggle todo
  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  // handle delete todo
  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  // handle edit todo
  const handleEditTodo = (id) => {
    if (editText.trim()) {
      dispatch(editTodo({ id, text: editText }));
      setEditingId(null);
      setEditText('');
    }
  };

  // handle edit start todo
  const handleEditTodoStart = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px' }}>
      <h2>Todolist Dengan Redux</h2>
      <form onSubmit={handleAddTodo} style={{ marginBottom: '20px' }}>
        <label htmlFor="inputText" style={{ display: 'none' }}>
          Masukan Todo
        </label>
        <input id="inputText" type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Tambahkan todo baru..." style={{ padding: '10px', width: '70%', marginRight: '10px', fontSize: '16px' }} />
        <button type="submit" style={{ padding: '20px 20px', fontSize: '16px', cursor: 'pointer' }}>
          Tambah Todo
        </button>
      </form>

      <div>
        {todos.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#999' }}>Belum ada todo</p>
        ) : (
          todos.map((todo) => (
            <div key={todo.id} style={{ padding: '15px', marginBottom: '10px', border: '1px solid #ddd', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              {editingId === todo.id ? (
                <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} style={{ flex: 1, padding: '5px', fontSize: '16px' }} />
              ) : (
                <button
                  onClick={() => handleToggleTodo(todo.id)}
                  style={{
                    flex: 1,
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    color: todo.completed ? '#999' : '#000',
                    cursor: 'pointer',
                  }}
                >
                  {todo.text}
                </button>
              )}

              <div>
                {editingId === todo.id ? (
                  <>
                    <button onClick={() => handleEditTodo(todo.id)} style={{ marginLeft: '5px', padding: '5px 10px' }}>
                      Simpan
                    </button>
                    <button onClick={() => setEditingId(null)} style={{ marginLeft: '5px', padding: '5px 10px' }}>
                      Batal
                    </button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEditTodoStart(todo)} style={{ marginLeft: '5px', padding: '5px 10px' }}>
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteTodo(todo.id)}
                      style={{
                        marginLeft: '5px',
                        padding: '5px 10px',
                        backgroundColor: '#ff4444',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                      }}
                    >
                      Hapus
                    </button>
                  </>
                )}
              </div>
            </div>
          ))
        )}
      </div>
      <p style={{ marginTop: '20px', textAlign: 'center', color: '#666' }}>
        Total : {todos.length} | Selesai: {todos.filter((todo) => todo.completed).length}
      </p>
    </div>
  );
};

export default TodoListsRedux;
