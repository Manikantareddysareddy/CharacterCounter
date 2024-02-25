import './index.css'

const Character = props => {
  const {Item} = props
  const {characterName, length} = Item
  return (
    <li className="list-item">
      <p className="list-heading">
        {characterName}: {length}
      </p>
    </li>
  )
}

export default Character
