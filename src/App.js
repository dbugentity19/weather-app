import { useState } from 'react';
import './App.css';
import Input from './components/Input';
import Navbar from './components/Navbar';

function App() {
  const [location, setLocation] = useState('');

  return (
    <div className="border-[15px] border-pink-300 min-h-screen">
      {/* Navbar */}
      <Navbar />
      <div className="border-b-[3px] border-black pb-2 mt-4 max-w-[800px] mx-auto">
        {/* Input */}
        <Input
          name={'location'}
          type={'text'}
          value={location}
          placeholder={'Dolors Park, SF'}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
