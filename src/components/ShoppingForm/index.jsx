import { useState } from "react";
export const ShoppingForm = ({ generateList }) => {
  const [myList, setMyList] = useState({
    item1: "",
    item2: "",
    item3: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setMyList((currentItems) => ({
      ...currentItems,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateList(myList);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Item 1
          <input
            type="text"
            name="item1"
            onChange={handleChange}
            value={myList.item1}
          />
        </label>
        <label>
          Item 2
          <input
            type="text"
            name="item2"
            onChange={handleChange}
            value={myList.item2}
          />
        </label>
        <label>
          Item 3
          <input
            type="text"
            name="item3"
            onChange={handleChange}
            value={myList.item3}
          />
        </label>
        <button type="submit">Generate List</button>
      </form>
    </>
  );
};
export default ShoppingForm;
