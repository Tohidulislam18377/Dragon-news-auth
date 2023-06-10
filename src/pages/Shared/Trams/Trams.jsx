import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Trams = () => {
    return (
        <Container>
            <h3>terms and condition</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio laboriosam ab enim, necessitatibus, rem animi at suscipit iure soluta ducimus nostrum facere nihil minus sit.</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </Container>
    );
};

export default Trams;