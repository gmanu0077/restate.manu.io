import Home from './pages/home';
import Book from './pages/bookmark';
import {BrowserRouter,  Route,Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/bookmark" element={<Book/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;