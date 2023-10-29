import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
function MovieCard({simpson:{id,firstName,lastName,hobbies,imgUrl}}) {
  return (
    <div>    
    <Card style={{ width: '18rem', height:'500px' , backgroundColor:"#FFFF00" }}>
    <Card.Img variant="top" style={{height:'280px'}} src={imgUrl} />
    <Card.Body>
      <Card.Title>{firstName}</Card.Title>
      <Card.Text>
      {lastName}
     {hobbies}
      </Card.Text>
      <Button variant="primary" className='button' style={{backgroundColor:	"#FFDAB9"}}>see more</Button>
    </Card.Body>
  </Card>
  </div>
  )
}
export default MovieCard