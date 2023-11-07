import logo from './logo.svg';
import './App.css';
import { Message } from './Message';
import {ListElements} from './ListElements';
function App() {
  //we can return only one element in the return statement.
  return(
  <div>
    <Message></Message>
    <Message></Message>
    <ListElements></ListElements>
  </div>
  )
}
export default App;
