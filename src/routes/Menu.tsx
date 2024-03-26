import { Card } from "../components/Card"
import { MdOutlineNoDrinks } from "react-icons/md";
import { BiDrink } from "react-icons/bi";
import { IoFastFood } from "react-icons/io5";
import { PiBowlFoodFill } from "react-icons/pi";

const Menu = () => {
    return (
       <div>
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
       </div>
    )
}

export default Menu;