const t=`import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const app = createRoot(document.getElementById('root'));
app.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)`,e=`import { useState } from 'react';

export default function App() {
  const [num, setNum] = useState(0);

  const addNum = () => {
    setNum(num + 1);
  }

  return (
    <div>
      <h1>Hello World !</h1>
      <p>{num}</p>
      <button type="button" onClick={addNum}>add</button>
    </div>
  );
}`,o=[{name:"main.tsx",source:t,isActive:!1},{name:"App.tsx",source:e,isActive:!0}];export{o as default};
