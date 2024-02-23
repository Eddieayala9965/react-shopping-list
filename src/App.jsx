import { useState } from "react";
import "./App.css";
import ShoppingForm from "./components/ShoppingForm";
import ShoppingList from "./components/ShoppingForm";

function App() {
  const [shoppingListItem, setShoppingListItem] = useState("");

  const generateList = (listItems) => {
    setShoppingListItem(listItems);
  };

  return (
    <>
      <h1>Grovery List</h1>
      <ShoppingForm generateList={generateList} />
      <ShoppingList items={shoppingListItem} />
    </>
  );
}

export default App;
