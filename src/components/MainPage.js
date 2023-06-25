import React from 'react';
import { Routes, Route, Link , NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


function MainPage() {
  return (
    <div>
         <Container>
      <Row className="justify-content-md-center">
      <Col xs={4}>
      <Card className="text-center gap-2 mt-3">
      <Card.Img className = "cardImage" 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2HMXhrt0ecbhggN_JxKtM2lhB54Nnj777deAEeSViGbdOrOrF-FBNXPBb3JrIUwyTeHE&usqp=CAU" 
      alt="Card image"
      style={{ width: '430px', height: '270px' }}
       />
      <Card.ImgOverlay>
        <br/>
        <br/>
        <br/>
        <Card.Title style={{ fontSize: '24px', color: 'white', fontWeight: "bold" }}>HAVAS</Card.Title>
        <Card.Text>
          <NavLink to ="/havas"   style={{ fontSize: '16px', color: 'white', textDecoration: 'none' }}>Read More</NavLink>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
      </Col>
      
        <Col xs={4}>
        <Card className="text-center gap-2 mt-3">
        <Card.Img className = "cardImage" 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBYbmHJC2_s3ejgMZvJt3bXvRfPwZzHAbmfaz9cvDTT-cwkVxxF74IsgrIivvsoJ8wlIY&usqp=CAU" 
        alt="Card image"
        style={{ width: '430px', height: '270px' }}
         />
      <Card.ImgOverlay>
        <br/>
        <br/>
        <br/>
        <Card.Title style={{ fontSize: '24px', color: 'white', fontWeight: "bold" }}>Air Calculator</Card.Title>
        <Card.Text>
        <NavLink to = '/aircalc'  style={{ fontSize: '16px', color: 'white', textDecoration: 'none' }}>Read More</NavLink>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
      <Col xs={4}>   
      <Card className="text-center gap-2 mt-3">
      <Card.Img className = "cardImage" 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf3QVXFFoeju3zuzddn21ld7rCd0B8ZFJ0JM23r0bro1V9z1jP_gl8ev_ZKKlsCb9ez9Q&usqp=CAU"
       alt="Card image" 
       style={{ width: '430px', height: '270px' }}
       />
      <Card.ImgOverlay>
        <br/>
        <br/>
        <br/>
        <Card.Title style={{ fontSize: '24px', color: 'white', fontWeight: "bold" }}>Air Density</Card.Title>
        <Card.Text>
        <NavLink to = '/Airdensity'  style={{ fontSize: '16px', color: 'white', textDecoration: 'none' }}>Read More</NavLink>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    </Col>


        <Col xs={4}>   
        <Card className="text-center gap-2 mt-3">
     <Card.Img className = "cardImage"
     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTef9EzCqeu-l-nrIMvpOc-Vy-XXux6dLUY20nDh7sJez6r3MnfKzkQA7bfMgJe8b0mrU8&usqp=CAU" 
     alt="Card image"
     style={{ width: '430px', height: '270px' }}
      />
      <Card.ImgOverlay>
        <br/>
        <br/>
        <br/>
        <Card.Title style={{ fontSize: '24px', color: 'white', fontWeight: "bold" }}>Air Velocity</Card.Title>
        <Card.Text>
        <NavLink to = '/Airvelocity'  style={{ fontSize: '16px', color: 'white', textDecoration: 'none' }}>Read More</NavLink>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    </Col>



      </Row>
      <Row className="justify-content-md-center">
      <Col xs={4}>   
      <Card className="text-center gap-2 mt-3">
      <Card.Img className = "cardImage"
      src="https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/dc/6c/7b/dc6c7b3e-04cb-fb0c-d843-a77547b964c5/Unit_Converter-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.jpeg/1200x600wa.png" 
      alt="Card image"
      style={{ width: '430px', height: '270px' }}
       />
      <Card.ImgOverlay>
        <br/>
        <br/>
        <br/>
        <Card.Title style={{ fontSize: '24px', color: 'white', fontWeight: "bold" }}>Convertor</Card.Title>
        <Card.Text>
        <NavLink to = '/convertor'  style={{ fontSize: '16px', color: 'white', textDecoration: 'none' }}>Read More</NavLink>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    </Col>


   

        <Col xs={4}>   
        <Card className="text-center gap-2 mt-3">
      <Card.Img classidName = "cardImage" 
      src="https://media.wired.co.uk/photos/606dba1c9a15f73a597a2aa1/master/w_1600%2Cc_limit/weather.jpg" 
      alt="Card image"
      style={{ width: '430px', height: '270px' }}
       />
      <Card.ImgOverlay>
        <br/>
        <br/>
        <br/>
        <Card.Title style={{ fontSize: '24px', color: 'white', fontWeight: "bold" }}>Weather</Card.Title>
        <Card.Text>
        <NavLink to = '/weather'  style={{ fontSize: '16px', color: 'white', textDecoration: 'none' }}>Read More</NavLink>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    </Col>




      </Row>
      <Row className="justify-content-md-center">
      <Col xs={4}>  
       <Card className="text-center gap-2 mt-3">
    <Card.Img className = "cardImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_GQ2PlJPYYnxj5rl99HekncFHXtgrw79RROFOkUmfxWiUj9q4lmdJEGQd_-LPPL5JHfk&usqp=CAU" 
    alt="Card image" 
    style={{ width: '430px', height: '270px' }}
    />
      <Card.ImgOverlay>
        <br/>
        <br/>
        <br/>
        <Card.Title style={{ fontSize: '24px', color: 'white', fontWeight: "bold" }}>Osha Injury</Card.Title>
        <Card.Text>
        <NavLink to = '/osha'  style={{ fontSize: '16px', color: 'white', textDecoration: 'none' }}>Read More</NavLink>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    </Col>




        <Col xs={4}>  
         <Card className="text-center gap-2 mt-3">
         <Card.Img className = "cardImage"
         src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgp5ft0yMrlK3eKsagKq90agksLBviAlQnXA&usqp=CAU"
        alt="Card image" 
          style={{ width: '430px', height: '270px' }}
          />
      <Card.ImgOverlay>
        <br/>
        <br/>
        <br/>
        <Card.Title style={{ fontSize: '24px', color: 'white', fontWeight: "bold" }}>Earthquake</Card.Title>
        <Card.Text>
        <NavLink to = '/earthquake'  style={{ fontSize: '16px', color: 'white', textDecoration: 'none' }}>Read More</NavLink> 
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    </Col>


      </Row>
      <Row className="justify-content-md-center">
      <Col xs={4}>   
      <Card className="text-center gap-2 mt-3">
       <Card.Img className = "cardImage" 
       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYq25xTW_9R9Li8DOKtNXTSPpSbCqzIdruJAXXDZR1Q051VYcKlFlxRb7SxpAYlvypBTc&usqp=CAU" 
       alt="Card image" 
       style={{ width: '430px', height: '270px' }}
       />
      <Card.ImgOverlay>
        <br/>
        <br/>
        <br/>
        <Card.Title style={{ fontSize: '24px', color: 'white', fontWeight: "bold" }}>Drops</Card.Title>
        <Card.Text>
        <NavLink to = '/drops'  style={{ fontSize: '16px', color: 'white', textDecoration: 'none' }}>Read More</NavLink> 
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    
    </Col>
      </Row>
     </Container>
    </div>
  )
}

export default MainPage