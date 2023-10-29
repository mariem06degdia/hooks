import React from 'react'

function Rating({rating, setRate}) {
    const rate =[1,2,3,4,5];
  return (
    <div>
        {rate.map((s)=>
        rating<s?(
            <i className="fa-regular fa-star" style={{color:" #f38a12"}}></i>
        ):(
            <i className="fa-solid fa-star" style={{color:" #db860f"}} ></i>
        )
        )}
    </div>
  );
}
export default Rating