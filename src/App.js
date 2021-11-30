import { useDispatch,useSelector } from 'react-redux';
import './App.css';
import Counter from './Components/Counter';
import {show} from './redux/action'

function App() {
  const toggle = useSelector(state => state.show);
  const dispatch = useDispatch(show());
  return (
    <div className="App">
    <button onClick={()=>dispatch(show())}>{toggle ? 'hide' : 'show'}</button>
    {toggle &&<Counter/>}
    </div>
  );
}

export default App;
