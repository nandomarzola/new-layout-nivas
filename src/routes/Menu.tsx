import { Card } from "../components/Card"
import { MdOutlineNoDrinks, MdFastfood, MdFoodBank } from "react-icons/md";
import { BiDrink } from "react-icons/bi";
import { IoFastFood } from "react-icons/io5";
import { TbSoup } from "react-icons/tb";

const Menu = () => {
    return (
       <div>
            <div style={{margin:'0 20px 0 20px', display:'flex', justifyContent:'space-between', gap:'20px', marginTop:'40px'}}>
                    <Card href="drinks" text="Bebidas ALCOÓLICAS ">
                        <BiDrink size={32} color="#000"/>
                    </Card>
                    <Card href="drinks-not-alcohol" text="Bebidas não ALCOÓLICAS ">
                        <MdOutlineNoDrinks size={32} color="#000"/>
                    </Card>
            </div>
            <div style={{margin:'0 20px 0 20px', display:'flex', justifyContent:'space-between', gap:'20px', marginTop:'40px'}}>
                    <Card href="portions" text="Porções">
                        <IoFastFood size={32} color="#000"/>
                    </Card>
                    <Card href="snacks" text="(salgados, Bolinhos, PASTÉIS, ESPETOS)">
                        <MdFastfood size={32} color="#000"/>
                    </Card>
            </div>
            <div style={{margin:'0 20px 0 20px', display:'flex', justifyContent:'space-between', gap:'20px', marginTop:'40px'}}>
                    <Card href="soups" text="Caldos">
                        <TbSoup size={32} color="#000"/>
                    </Card>
                    <Card href="individual" text="Individuais">
                        <MdFoodBank size={32} color="#000"/>
                    </Card>
            </div>
            {/* <Footer /> */}
       </div>
    )
}

export default Menu;