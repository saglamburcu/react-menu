import { Grid } from '@chakra-ui/react';
import { useState } from 'react';
import Menu from "./Menu";


function Categories({ menu }) {

  // Unique Values
  const categories = ["all", ...new Set(menu.map(item => item.category))];
  //console.log(categories)

  const [filteredMenu, setFilteredMenu] = useState(menu);

  const filterItems = (category) => {
    if (category === "all") {
      setFilteredMenu(menu);
      return;
    }

    const items = menu.filter(item => item.category === category);
    setFilteredMenu(items);
  }

  return (
    <section className="categories">
      <div className='btns'>
        {
          categories.map((category, index) => (
            <button key={index} onClick={() => filterItems(category)}>
              {category}
            </button>
          ))
        }
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