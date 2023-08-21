import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Swal from "sweetalert2";


export const TodosList = ({ todos, setTodos }) => {
  
  const handleDelete = ({id}) => {
    setTodos(todos.filter((task) => task.id  !== id))

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
      title: 'Correctly deleted'
    })
  }

  return (
    <>
      {todos.map((task) => (
        <li className="list-item" key={task.id}>
          <input 
            type="text" 
            value={task.title} 
            className="list" 
            onChange={(event) => event.preventDefault()}
          />
          <div>
            <button className="button-delete" onClick={() => handleDelete(task) }>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </li>        
      ))}
    </>
  )
}