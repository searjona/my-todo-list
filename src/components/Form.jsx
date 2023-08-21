import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";


export const Form = ({ input, setInput, todos, setTodos }) => {
  
  const onInputChange = (event) => {
    setInput(event.target.value);    
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, {id: uuidv4(), title: input}])
    setInput("");
  }

  const handleAdd = () => {
    const Show = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Show.fire({
      icon: 'success',
      title: 'Correctly added'
    })
  }

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input 
          type="text" 
          placeholder="Enter a new task" 
          className="task-input"  
          value={input}
          onChange={onInputChange}
        />
        <button  type="submit" className="button-add" onClick={handleAdd}>Add</button>
      </form>
    </>
  )
}