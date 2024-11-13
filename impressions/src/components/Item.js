import "../css/Item.css";
import { Outlet, NavLink } from "react-router-dom";
const Item = (item) => {
    return (
        <section className={item.type}>
            <h3 className="item-name"><NavLink to={item.link}>{item.name}</NavLink></h3>
            <img className="item-pic" src={item.image} alt={item.name} />
            <p className="item-desc">{item.desc}</p>
        </section>
    )
};

export default Item;