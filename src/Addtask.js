import {useState} from 'react'


function AddTask({ addTodo }) {
    const [value, setValue] = useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </form>
    );
  }

  export default AddTask;