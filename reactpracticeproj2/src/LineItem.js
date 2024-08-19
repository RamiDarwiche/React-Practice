const LineItem = ({entry}) => {
  return (
    <li className="item">
        {JSON.stringify(entry)}
    </li>
  )
}

export default LineItem