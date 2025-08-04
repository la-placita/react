import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

 export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState(['One Punch', 'Dragon Ball', 'Samurai X']);
  const addCategory = (category) => {
       setCategories([...categories, category]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        onNewCategory={(category) => {
          if (categories.includes(category)) return;
          addCategory(category);
        }}
      />
      <h2>Categories</h2>
      { categories.map((category) => (
        <GifGrid
          key={category}
          category={category}
        />
      )) }
    </>
  );
}
