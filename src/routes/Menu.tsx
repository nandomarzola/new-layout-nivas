import { Card } from "../components/Card"
import { MdOutlineNoDrinks } from "react-icons/md";
import { BiDrink } from "react-icons/bi";
import { IoFastFood } from "react-icons/io5";
import { PiBowlFoodFill } from "react-icons/pi";
import { Footer } from "../components/Footer";
import Logo from "../components/Logo";

const Menu = () => {
    return (
       <div>
            <Logo urlImg="https://img.freepik.com/vetores-gratis/menu-logotipo-design-grafico_24908-54835.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710979200&semt=ais" />
            <div style={{margin:'0 20px 0 20px', display:'flex', justifyContent:'space-between', gap:'20px', marginTop:'40px'}}>
                    <Card href="drinks" text="Bebidas Alcoolicas">
                        <BiDrink size={32} color="#000"/>
                    </Card>
                    <Card href="drinks-not-alcohol" text="Bebidas não Alcoolicas">
                        <MdOutlineNoDrinks size={32} color="#000"/>
                    </Card>
            </div>
            <div style={{margin:'0 20px 0 20px', display:'flex', justifyContent:'space-between', gap:'20px', marginTop:'40px'}}>
                    <Card href="portions" text="Porções">
                        <IoFastFood size={32} color="#000"/>
                    </Card>
                    <Card href="snacks" text="Petiscos">
                        <PiBowlFoodFill size={32} color="#000"/>
                    </Card>
            </div>
            <Footer />
       </div>
    )
}

export default Menu;