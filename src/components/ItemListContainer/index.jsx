/* eslint-disable no-template-curly-in-string */
/* eslint-disable react/jsx-no-undef */
import  ItemCount  from "../ItemCount";
import React from "react";
import Title from "../Title";


export const ItemListContainer = ({texto}) => {
  const onAdd = (quantily) => {
    console.log('compraste ${quantily} umidades');
  }
  return (
   <div>
   <Title greeting ={texto} />
   
   <ItemCount initial={3}  stock={5} onAdd={onAdd}/>

   </div> 
  );
}
export default ItemListContainer;
