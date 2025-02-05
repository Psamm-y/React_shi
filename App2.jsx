import Card from './Card.jsx';
import Button from './Button.jsx';
import Student from './Student.jsx';
import UserGreeting from './USerGreeting.jsx';
import List from './List.jsx'

function App2() {
  const fruits = [{ id: 1, name: 'fig', calories: 43 },
  { id: 2, name: 'apple', calories: 95 },
  { id: 3, name: 'cherry', calories: 50 },
  { id: 4, name: 'banana', calories: 105 },
  { id: 5, name: 'date', calories: 80 },
    { id: 6, name: 'grape', calories: 60 },];
  
  const vegetables = [{ id: 1, name: 'potatoes', calories: 110 },
  { id: 2, name: 'apple', calories: 95 },
  { id: 3, name: 'celery', calories: 15 },
  { id: 4, name: 'carrots', calories: 25 },
  { id: 5, name: 'corn', calories: 63 },
    { id: 6, name: 'brocolli', calories: 50 },];
  return (
    <>
      <Card/>
      <Button />
      <Student name="Samuel" age={18} isStudent={true} location="Ofankor" />
      <Student name="Ichigo Kurosaki" age={21} isStudent={false} location="Pokuase" />
      <Student name="Bernard" age={30} isStudent={false} location="Amasaman" />
      <Student name="Fenuku Reynolds" age={19} isStudent={true} location="Pokuase" />
      <UserGreeting isLoggedIn={true} userName="Psammy" />
    
    {/* rendering only if the fruits array is not null */}
      {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
      {/*using the and operator to render if only the array is not null which will make the statement true*/}
      {vegetables.length>0 &&<List items={vegetables} category="Veggies" />}
    </>
  );
} 

export default App2;