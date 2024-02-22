import { useState } from "react";
import "./App.css";
import ShoppingForm from "./components/ShoppingForm";
import ShoppingList from "./components/ShoppingForm";

function App() {
  const [shoppingListItem, setShoppingListItem] = useState("");
  const shoppingListItems = (text) => {
    setShoppingListItem(text);
  };
  return <></>;
}

export default App;
