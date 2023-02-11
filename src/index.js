import { TodoBoxProvider } from './context/TodoContext'
import { NewsProvider } from './context/NewsContext'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <TodoBoxProvider>
      <NewsProvider>
        <App />
      </NewsProvider>
    </TodoBoxProvider>
  </React.StrictMode>
)
