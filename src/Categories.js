import { Grid } from '@chakra-ui/react';
import { useState } from 'react';
import Menu from "./Menu";

function Categories({ menu, setMenu }) {
  const [filteredMenu, setFilteredMenu] = useState(menu);

  const allMenu = () => {
    setFilteredMenu(menu);
  };

  const filterBreakfast = () => {
    const breakfast = menu.filter(item => item.category === "breakfast");
    setFilteredMenu(breakfast);
  };

  const filterLunch = () => {
    const lunch = menu.filter(item => item.category === "lunch");
    setFilteredMenu(lunch);
  };

  const filterShakes = () => {
    const shakes = menu.filter(item => item.category === "shakes");
    setFilteredMenu(shakes);
  }

  return (
    <section className="categories">
      <div className='btns'>
        <button onClick={allMenu}>All</button>
        <button onClick={filterBreakfast}>Breakfast</button>
        <button onClick={filterLunch}>Lunch</button>
        <button onClick={filterShakes}>Shakes</button>
      </div>
      <div>
        <Grid templateColumns='repeat(2, 1fr)' gap={20}>
          {
            filteredMenu.map(item => (
              <Menu key={item.id} {...item} />
            ))
          }
        </Grid>
      </div>
    </section>
  )
};

export default Categories;