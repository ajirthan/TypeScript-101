import React, { useState } from "react";
import ShoppingList from "./components/ShoppingList";
import Item from "./models/item";
import { v4 as getId } from "uuid";
import "./App.css";
import ShoppingListForm from "./components/ShoppingListForm";

function App(): JSX.Element {
    const [items, setItems] = useState<Item[]>([]);
    const AddItem = (product: string, quantity: number) => {
        console.log("MADE TO THE APP COMPONENT");
        setItems([...items, { id: getId(), product, quantity }]);
    };
    // const items = [
    //     { id: 1, product: "Lemon", quantity: 3 },
    //     { id: 2, product: "Chicken Breast", quantity: 2 }
    // ];
    return (
        <div>
            <ShoppingList items={items}/>
            <ShoppingListForm onAddItem={AddItem}/>
        </div>
    );
}

export default App;
