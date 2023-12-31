import React,{useState} from "react";


function Items({CreateItem}){

  const [itemname,setName] = useState("");
  const [type,setType] = useState("");
  const [count,setCount] = useState(0);
  const [price,setPrice] = useState(0);

  function nameChange(e){
    setName(e.target.value);
  }
  function typeChange(e){
    setType(e.target.value);
  }
  function countChange(e){
    setCount(e.target.value);
  }
  function priceChange(e){
    setPrice(e.target.value);
  }
  function onSubmit(){
    CreateItem(itemname,type,count,price)
  }
  return(
    <div>
      <input value={itemname} onChange={nameChange} type="text" />
      <input value={type} onChange={typeChange} type="text" />
      <input value={count} onChange={countChange} type="number" />
      <input value={price} onChange={priceChange} type="number" />
      <button onClick={onSubmit}>추가</button>
      <br></br>

    </div>
  )
}

export default Items;