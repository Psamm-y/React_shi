import PropTypes from 'prop-types';
function List(props) {
  
  const itemList = props.items;
  const category = props.category;

  //fruits.sort((x, y) => x.name.localeCompare(y.name));
  //fruits.sort((a,b) => a.calories - b.calories);

  //const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

 // const ListItems = itemList.map(item => <li key={item.id}>{item.name}: &nbsp;<b>{item.calories}</b></li>);
 // const ListItems2 = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>{lowCalFruit.name}: &nbsp;<b>{lowCalFruit.calories}</b></li>);

  const highCalItems = itemList.sort((a,b)=> b.calories-a.calories);

  const ListItems = highCalItems.map(item => <li key={item.id}>{item.name}: &nbsp; <em> <b>{item.calories}</b></em></li>)
  return (
    <>
      <h3 className='list-category'>{category}</h3>
    <ol className='list-items'>
      {ListItems}
      </ol>
    </>
  )

}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string, 
                                             name: PropTypes.string,
                                             calories: PropTypes.number}
  )),
  category: PropTypes.string,
}

List.defaultProps = {
  category: "Category",
  items: []
}
  export default List;
