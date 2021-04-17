import logo from './logo.svg';
import './App.css';
import WithoutJsx from './WithoutJsx';
import Welcome from './Welcome';
import StateDemo from './StateDemo';
import EventBinding from './EventBinding';
import JsxDemo from './JsxDemo';
import PropdDemo from './PropdDemo';

function App() {
  return (
    <div className="App">
      {/* <WithoutJsx ></WithoutJsx>
      <Welcome name='abhishek'></Welcome>
      <Welcome name='ravi'></Welcome> */}
      {/* <StateDemo></StateDemo>
      <EventBinding></EventBinding> */}
      <JsxDemo></JsxDemo>
      <PropdDemo name="abhishek"></PropdDemo>
      <PropdDemo name="sashi"></PropdDemo>
      <PropdDemo name="Jyoti"></PropdDemo>
    </div>
  );
}

export default App;
