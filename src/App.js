import logo from './logo.svg';
import './App.css';
import CustomerData from './components/CustomerData';
import CustomerCreate from './components/CustomerCreate'
import DeleteCustomer from './components/DeleteCustomer'

function App() {
  return (
    <div className="App">
      <CustomerCreate />
      {/* <CustomerData />
      <DeleteCustomer /> */}
    </div>
  );
}

export default App;
