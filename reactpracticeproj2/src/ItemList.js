import LineItem from './LineItem';

const ItemList = ({content}) => {
  return (
    <ul>
        {content.map((entry) => (
            <LineItem
                key={entry.id}
                entry={entry}
            />
        ))}
    </ul>
  )
}

export default ItemList