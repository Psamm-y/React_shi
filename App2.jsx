import Card from './Card.jsx';
import Button from './Button.jsx';
import Student from './Student.jsx';

function App2() {
  return (
    <>
      <Card/>
      <Button />
      <Student name="Samuel" age={18} isStudent={true} />
    </>
  );
} 

export default App2;