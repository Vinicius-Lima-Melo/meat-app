import { MenuItem } from "../menu-item/menu-item.model";
import { CartItem } from "./item-cart.model";

export class ShoppingCartService{
    items: CartItem[] = [];


    clear(){
        this.items = []
    }
    addItem(item:MenuItem){
        console.table(this.items)
        // const found = this.items.find(element => element.menuItem.id == item.id);
        let foundItem = this.items.find((mItem) => mItem.menuItem.id == item.id)
        if(foundItem){
            foundItem.quantity = foundItem.quantity + 1;
        }else{
            this.items.push(new CartItem(item))
        }
    }
    removeItem(item:CartItem){
        this.items.splice(this.items.indexOf(item),1)
    }

    total(): number{
        return this.items
                .map(item => item.value())
                .reduce((prev, value)=> prev+value, 0) 
    }

}
