import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserContext } from './contexts/User';
import './App.css';
import ReviewsListPage from './pages/ReviewsListPage';
import Homepage from './pages/Homepage';
import Header from './components/Header';
import NavBar from './components/NavBar';

function App() {
  const [ username, setUsername ] = useState("SallyB")
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ username, setUsername }}>
        <div className="App">
          <div className='title-banner'>
            <Header />
            {username && <p className='signed-in'>Signed in as {username}</p>}
            <NavBar />
          </div>
          <main>
            <Routes>
              <Route path="/" element={<Homepage />}/>
              <Route path="/reviews" element={<ReviewsListPage />}/>
            </Routes>
          </main>
        </div>
        </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
