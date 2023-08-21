import { useState } from 'react'
import { Form } from './components/Form'
import { Header } from './components/Header'
import { TodosList } from './components/TodosList'
import imgGit from './assets/logo-github.webp'
import imgUninorte from './assets/logo-uninorte.png'
import './App.css'


export const App = () => {

  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  
  return (
    <>
      <main className='container'>
        <div className='app-wrapper'>
          <div>
            <Header />
          </div>
          <div>
            <Form 
              input={input}
              setInput={setInput}
              todos={todos}
              setTodos={setTodos}
            />
          </div>
          <div>
            <TodosList todos={todos} setTodos={setTodos}/>
          </div>
        </div>
      </main>
      <footer className='footer'>
        <div>
          <p>
            Sergio Arjona Nieto ®
          </p>          
        </div>
        <div>
          <img src={imgGit} alt="Logo-github" className='img-git'/>
        </div>
        <div>
          <a href="https://virtual.uninorte.edu.co/" target='_blank'>
            <img src={imgUninorte} alt="Logo-github" className='img-uninorte'/>
          </a>
        </div>
      </footer>
    </>
  )
}