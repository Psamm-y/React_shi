
function List() {
  const fruits = [{id:1, name: 'fig',calories:43 },
    {id:2, name: 'apple', calories: 95 },
    {id:3,name: 'cherry', calories: 50 },
    {id:4,name: 'banana' , calories: 105 },
    {id:5,name: 'date', calories: 80 },
    {id:6,name: 'grape', calories: 60},];


  //fruits.sort((x, y) => x.name.localeCompare(y.name));
  //fruits.sort((a,b) => a.calories - b.calories);

  const lowCalFruits= fruits.filter(fruit => fruit.calories < 100);

  const ListItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp;<b>{fruit.calories}</b></li>);

  return(
    <ol>
      {ListItems}
    </ol>
    )
}

export default List;