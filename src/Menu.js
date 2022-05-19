function Menu({ title, category, price, img, desc }) {
  return (
    <section className="menu">

      <div className="image">
        <img src={img} alt={title} />
      </div>

      <div className="menu-info">
        <div className="title">
          <h4>{title}</h4>
          <h4>$ {price}</h4>
        </div>
        <div>
          <p>{desc}</p>
        </div>
      </div>

    </section>
  )
};

export default Menu;