import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

export function MyComponentPersonal() {

    return(<div><Container fluid>
        <Row>
        <Col>
        <h3><b><u>Personal Details</u></b></h3>
        <p>5 St Andrews Close<br />
		Rodley<br />
		LEEDS<br />
		LS13 1JE</p>
        <p>07894 851852</p>
        <p>mark@strawberryrecruitment.co.uk</p>
        <p>uk.linkedin.com/pub/mark-gaunt/23/812/8aa</p>
		<p>Car Driver/Owner/Clean Licence</p>

        


        </Col>
        </Row>
      </Container></div>)
}