
function List() {
  const fruits = ['fig','apple',  'cherry','banana', 'date',  'grape'];

  const ListItems = fruits.map(fruits => <li>{fruits}</li>);
  return(
    <ol>
      {ListItems}
    </ol>
    )
}

export default List;