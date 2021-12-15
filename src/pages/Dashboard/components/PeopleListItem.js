import { Link } from "react-router-dom"
function PeopleListItem(props) {
  const { person, index } = props

  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
      <Link to={`PersonProfile/${index}`} state={{ person }}>View Profile</Link>
    </li>
  )
}

export default PeopleListItem
