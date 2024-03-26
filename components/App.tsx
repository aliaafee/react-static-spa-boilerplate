import * as React from 'react';

import "../src/style.css";

interface AppProps {
  message: string;
}

const App: React.FC<AppProps> = ({ message } : AppProps) => {
  return (
    <div className='bg-red-300'>
      <h1>Hello there {message}!</h1>
    </div>
  );
}

export default App;