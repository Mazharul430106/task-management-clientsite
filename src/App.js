import logo from './logo.svg';
import './App.css';
import Main from './Layout/Main';
import { RouterProvider } from 'react-router-dom';
import { router } from './Shared/Routes/Routes';

function App() {
  return(
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
