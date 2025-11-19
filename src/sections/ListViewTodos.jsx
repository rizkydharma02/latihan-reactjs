import { useState } from 'react';
import TodoListsRedux from '../components/TodoListsRedux';
import TodoListsZustand from '../components/TodoListsZustand';

const ListViewTodos = () => {
  const [activeTab, setActiveTab] = useState('redux');
  return (
    <>
      <div
        style={{
          textAlign: 'center',
          padding: '20px',
          backgroundColor: '#f0f0f0',
        }}
      >
        <h2>Learning Redux and Zustand for Todolist</h2>
        <div style={{ marginTop: '20px' }}>
          <button
            style={{
              padding: '10px 30px',
              marginRight: '10px',
              fontSize: '16px',
              backgroundColor: activeTab === 'redux' ? '#764abc' : '#fff',
              color: activeTab === 'redux' ? '#fff' : '#000',
              border: '2px solid #764abc',
              cursor: 'pointer',
              borderRadius: '5px',
            }}
            onClick={() => setActiveTab('redux')}
          >
            Redux
          </button>
          <button
            style={{
              padding: '10px 30px',
              marginRight: '10px',
              fontSize: '16px',
              backgroundColor: activeTab === 'redux' ? '#764abc' : '#fff',
              color: activeTab === 'redux' ? '#fff' : '#000',
              border: '2px solid #764abc',
              cursor: 'pointer',
              borderRadius: '5px',
            }}
            onClick={() => setActiveTab('zustand')}
          >
            Zustand
          </button>
        </div>

        {activeTab === 'redux' ? <TodoListsRedux /> : <TodoListsZustand />}
      </div>
    </>
  );
};

export default ListViewTodos;
