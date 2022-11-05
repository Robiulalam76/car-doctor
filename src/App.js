import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Route/Routes/Routes';

function App() {
  return (
    <div className='max-w-screen-lg	mx-auto' style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
