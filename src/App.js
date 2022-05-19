import { useState } from 'react';
import Categories from "./Categories";
import data from "./data";

function App() {

  const [menu, setMenu] = useState(data);

  return (
    <main className="container">
      <article className="menu-container">
        <h1>Our Menu</h1>
        <Categories menu={menu} setMenu={setMenu} />
      </article>
    </main>
  )
};

export default App;