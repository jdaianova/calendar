import './App.css';
import Calendar from './Calendar';

function App() {
  //const now = new Date();
  const now = new Date(2010,10,10);
  //console.log(now=', now);
  return (
    <div>
      <Calendar date = {now} />
    </div>
  );
}

export default App;
