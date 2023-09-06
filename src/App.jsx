
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import ArticlesList from './components/ArticlesList'
import ArticleItem from './components/ArticleItem'
import Header from './components/Header'




function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/article-list' element={<ArticlesList/>}/>
        <Route path='/article-details/:articleId' element={<ArticleItem/>}  />
        <Route path='/article-details/:articleId/comments-list' element={<ArticleItem/>} />
      </Routes>

    </>
  )
}

export default App
