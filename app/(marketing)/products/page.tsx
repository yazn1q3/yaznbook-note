import { Separator } from "@/components/ui/separator"
import { Footer } from "../_components/footer"
import List from "@/components/List"
import { Label } from "@/components/ui/label"

const ProductsPage = () => {
 return(
  <div>
    <div className="w-[100%] flex justify-center items-center" >
<h1 className=" font-bold text-[29px]" >Yaznbook Products</h1>

 
 </div>
 <Separator />
 <List>
   <div className="w-[18em] p-2 shadow-md rounded-[10px] m-2 h-[10em]" >
    <img src="jr.jpg" className="w-[100%] h-[6em] rounded-[5px] object-cover" />
    <Label>Yaznbook Ai</Label>
    </div> 
 </List>
  </div>
 )
}

export default ProductsPage