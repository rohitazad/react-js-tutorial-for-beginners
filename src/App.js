import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import MyFirstComponent from './MyFirstComponent';
import MyRoutes from './Routes';

function App() {
  // Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML
  return (
    <div className="App">
      <MyRoutes />
      {/* <MyFirstComponent /> */}
    </div>
  );
}

export default App;
