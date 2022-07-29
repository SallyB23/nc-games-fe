import { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { UserContext } from './contexts/User';
import './App.css';
import ReviewsListPage from './pages/ReviewsListPage';
import ReviewPage from './pages/ReviewPage';
import Homepage from './pages/Homepage';
import Header from './components/Header';
import NavBar from './components/NavBar';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  const [ username, setUsername ] = useState("happyamy2016")
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
              <Route path="/sign-in" element={!username ? <SignInPage /> : <Navigate to="/" replace/>}/>
              <Route path="/sign-up" element={!username ? <SignUpPage /> : <Navigate to="/" replace/>}/>
              <Route path="reviews" element={<ReviewsListPage />}>
                <Route path=":category" element={<ReviewsListPage/>} />
              </Route>
              <Route path="review/:review" element={<ReviewPage />} />
            </Routes>
          </main>
        </div>
        </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
