import react from "react";
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
function HireForm(props) {
  const [wage, setWage] = useState(0)
  const { hiredPeople, person, setHiredPeople, setPerson } = props;
  let navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    console.log(person);
    setHiredPeople([...hiredPeople, person]);
    navigate("/");

  }

  useEffect(() => {
    setPerson({ ...person, wage: wage });
  }, [wage])

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit" onSubmit={handleSubmit}>Hire</button>
    </form>
  )
}

export default HireForm
