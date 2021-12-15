import { useState, useEffect } from "react"
import "./styles.css"
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PersonProfile from "./pages/PersonProfile";
import { useNavigate } from "react-router-dom";
export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  let navigate = useNavigate();
  useEffect(() => {
    if (navigate.state) {
      console.log(navigate.state);
      setHiredPeople([...hiredPeople, navigate.state]);
      console.log(hiredPeople);
    }
  }, [navigate])

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <Link to={"/"}>Dashboard</Link>
          </ul>
          <Routes>
            <Route path="/"
              element={
                <Dashboard hiredPeople={hiredPeople} />
              } />

            <Route path="PersonProfile/:id/"
              element={
                <PersonProfile setHiredPeople={setHiredPeople} hiredPeople={hiredPeople} />
              } />
          </Routes>
        </nav>
      </header>
    </>
  )
}
