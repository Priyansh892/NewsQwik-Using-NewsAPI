import React from 'react'
import Card from "react-bootstrap/Card";
function NewsItem(props) {

  return (
    
    <div>
      <br></br>
         <Card style={{ width: "22rem"}}>
         <img src={props.urlToImage} className="card-img-top" alt="..." style={{
             height: 200,
             width: 350,
           }}></img>
        <Card.Body>
          <Card.Title style={{ color: "#000000" }}>{props.title}...</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
          {props.description}...
          </Card.Subtitle>
          <Card.Link href={props.url} target='_blank'> More Information</Card.Link>
        </Card.Body>
      </Card>
      <br></br>
    </div>
  );


}
export default NewsItem;
