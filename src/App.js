import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home.js";
import MovieList from "./components/MovieList";
import MovieDetail from "./pages/MovieDetail";
import Error from "./pages/Error";
import { Outlet } from 'react-router-dom';


function App() {

  const PageLayout = () => (
    <>
      <Header />
      <Outlet />
      <MovieList />
    </>
  );

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={PageLayout()}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<h1>login page</h1>}></Route>
            <Route path="/signup" element={<h1>signup page</h1>}></Route>
            <Route path="/movie/:id" element={<MovieDetail />}></Route>
            <Route path="/movies/:type" element={<MovieList />}></Route>
          </Route>
          <Route path="/*" element={<Error />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
