
function List(props) {
  
  const itemList = props.items;

  //fruits.sort((x, y) => x.name.localeCompare(y.name));
  //fruits.sort((a,b) => a.calories - b.calories);

  const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

  const ListItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp;<b>{fruit.calories}</b></li>);
  const ListItems2 = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>{lowCalFruit.name}: &nbsp;<b>{lowCalFruit.calories}</b></li>);

  return (
    <ol>
      {ListItems}
    </ol>
  )

}
  export default List;
