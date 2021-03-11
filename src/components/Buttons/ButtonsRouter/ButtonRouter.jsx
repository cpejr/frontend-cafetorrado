/* eslint-disable */
import { React, useState } from 'react';
import './ButtonRouter.css';
import { AiOutlineTool } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';

function ButtonRouter(){
const history= useHistory()
return (
    <div>
      <button onClick={()=>{history.push('/Manual')}} className="power-3" type="button" >
      <AiOutlineTool size={40}  />   
      </button>
    </div>
  );
}
export default ButtonRouter;