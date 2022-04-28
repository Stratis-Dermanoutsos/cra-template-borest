import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const AboutPage = () => {
    return (
        <Container className='mt-5 py-4'>
            <h1>About</h1>
            <Row className='mt-4'>
                <Col xs={{ span: 10, offset: 1 }}>
                    <p>
                        This{' '}
                        <a className='rainbow' href='https://create-react-app.dev'>create-react-app</a>{' '}
                        template was made by{' '}
                        <a href='https://github.com/Stratis-Dermanoutsos'>Stratis Dermanoutsos</a>{' '}
                        to easily create a <a className='rainbow' href='https://reactjs.org'>React</a>{' '}
                        project using all of the following packages:
                    </p>
                    <ul>
                        <li className='bootstrap'><a href='https://getbootstrap.com'>Bootstrap</a></li>
                        <li className='react-bootstrap'><a href='https://react-bootstrap.github.io'>React-Bootstrap</a></li>
                        <li className='react-router'><a href='https://reactrouter.com'>React-Router</a></li>
                        <li className='redux'><a href='https://redux.js.org'>Redux</a></li>
                        <li className='scss'><a href='https://sass-lang.com'>SCSS</a></li>
                        <li className='typescript'><a href='https://www.typescriptlang.org'>TypeScript</a></li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <h3>Want to contribute?</h3>
                <Col xs={{ span: 10, offset: 1 }}>
                    <p>
                        Feel free to visit{' '}
                        <a href='https://github.com/Stratis-Dermanoutsos/cra-template-borest'>this repository</a>.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutPage;