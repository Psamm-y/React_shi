
function List() {
  const fruits = [{id:1, name: 'fig' },
    {id:2, name: 'apple', calories: 95 },
    {id:3,name: 'cherry', calories: 50 },
    {id:4,name: 'banana' , calories: 105 },
    {id:5,name: 'date', calories: 80 },
    {id:6,name: 'grape', calories: 60},];

  const ListItems = fruits.map(fruit => <li key={fruit.name}>{fruit.name}</li>);


  return(
    <ol>
      {ListItems}
    </ol>
    )
}

export default List;