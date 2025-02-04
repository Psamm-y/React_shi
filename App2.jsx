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
  return (
    <>
      <Card/>
      <Button />
      <Student name="Samuel" age={18} isStudent={true} location="Ofankor" />
      <Student name="Ichigo Kurosaki" age={21} isStudent={false} location="Pokuase" />
      <Student name="Bernard" age={30} isStudent={false} location="Amasaman" />
      <Student name="Fenuku Reynolds" age={19} isStudent={true} location="Pokuase" />
      <UserGreeting isLoggedIn={true} userName="Psammy" />
      <List />
    </>
  );
} 

export default App2;