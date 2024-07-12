const t=`import { render } from 'solid-js/web'

import App from './App';

const root = document.getElementById('root');

render(() => <App />, root);
`,o=`import { createSignal } from "solid-js";

export default function Counter() {
  const [count, setCount] = createSignal(1);
  const increment = () => setCount(count => count + 1);

  return (
    <button type="button" onClick={increment}>
      {count()}
    </button>
  );
}`,e=[{name:"main.tsx",source:t,isActive:!1},{name:"App.tsx",source:o,isActive:!0}];export{e as default};
