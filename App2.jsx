import Card from './Card.jsx';
import Button from './Button.jsx';
import Student from './Student.jsx';
import UserGreeting from './USerGreeting.jsx';

function App2() {
  return (
    <>
      <Card/>
      <Button />
      <Student name="Samuel" age={18} isStudent={true} location="Ofankor" />
      <Student name="Ichigo Kurosaki" age={21} isStudent={false} location="Pokuase" />
      <Student name="Bernard" age={30} isStudent={false} location="Amasaman" />
      <Student name="Fenuku Reynolds" age={19} isStudent={true} location="Pokuase" />
      <UserGreeting isLoggedIn={True} userName="Psammy"/>
    </>
  );
} 

export default App2;