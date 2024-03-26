import * as React from 'react';

import "../src/style.css";

interface AppProps {
  message: string;
}

const App: React.FC<AppProps> = ({ message } : AppProps) => {
  return (
    <div>
      <h1>Hello there {message}!</h1>
    </div>
  );
}

export default App;