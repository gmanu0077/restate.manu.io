import React from 'react'
import pic from './R.jpg'
import './card.css'

const FavHotel=()=>{
  let Hotels=JSON.parse(localStorage.getItem('book'))
  const hotelcard=Hotels?(Hotels?.map((re)=>
  
  {
 
      

    
       
       return(
        <div>
        {/* <ul >
        <li>
            <img src={pic} width="200px" /></li>
            <li>
         <h4 >price: ${re.price}</h4> </li>
         <li>
         <h4 >name: {re.name}</h4> </li>
         <li>
         <h4 >location: {re.location}</h4> </li>
         
         
        
          </ul> */}
           <div className="row">
    <div className="col s12 m12 l12">
      <div className="card">
        <div className="card-image">
          <img src={pic} />
          <span className="card-title">{re.name}</span>
          <a className="btn-floating btn-large halfway-fab waves-effect waves-light red"><i className="material-icons">book</i></a>
        </div>
        <div className="card-content">
          <h4>price: ${re.price}</h4>
          <h4>location: {re.location}</h4>
        </div>
      </div>
    </div>
  </div>

         
        </div>
      )

      }
      
      
       
    
   

 )):( <h2>No Bookmarked hotels</h2>
 )






return(
  
  <div>
  <h1 className="bookmark center pink-text">BOOKMARK</h1>
  <div className="cardcontainer">
{hotelcard}
  </div>
</div>
)}
export default FavHotel; 