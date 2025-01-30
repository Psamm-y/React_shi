import Card from './Card.jsx';
import Button from './Button.jsx';
import Student from './Student.jsx';

function App2() {
  return (
    <>
      <Card/>
      <Button />
      <Student name="Samuel" age={18} isStudent={true} location="Ofankor" />
      <Student name="Ichigo Kurosaki" age={21} isStudent={false} location="Pokuase" />
      <Student name="Bernard" age="30" isStudent={false} location="Amasaman" />
      <Student name="Fenuku Reynolds" age={19} isStudent={true} location="Pokuase" />
    </>
  );
} 

export default App2;