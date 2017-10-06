import React from 'react'

 export default (props) => {

   const handleOnClick = () => {
     props.store.dispatch({ type: 'INCREASE_COUNT' });
   }

   const decrease = () =>{
     props.store.dispatch({ type: 'DECREASE_COUNT' });
   }

   return (
     <div>
       <button onClick={handleOnClick}>+</button>
       <button onClick={decrease} >-</button>
       <div>{props.store.getState().count}</div>
     </div>
   )
 };
