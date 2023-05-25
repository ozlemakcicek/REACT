import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'


const TeacherDetails = () => {


 

  return (
    <Container className="text-center mt-4">
      <div>
        <h3> </h3>
        <img
       
          alt=""
          width="250px"
        />
        <h4>{}</h4>
        <h5>{}</h5>
        <h5>{}</h5>
        <h5>{}</h5>
        <div>
          <button class="btn btn-primary" >
            GO BACK
          </button>
          <button class="btn btn-warning" >
            GO HOME
          </button>
        </div>
      </div>
    </Container>
  );
}

export default TeacherDetails