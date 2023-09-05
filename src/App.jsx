
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import ArticlesList from './components/ArticlesList'
import ArticleItem from './components/ArticleItem'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/article-list' element={<ArticlesList/>}/>
        <Route path='/article-details/:articleId' element={<ArticleItem/>}  />
      </Routes>

    </>
  )
}

export default App
