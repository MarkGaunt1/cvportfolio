import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

export function MyComponentJobTwo() {

    return(<div><Container fluid style={{textAlign: 'left'}}>
        <Row>
        <Col sm={4}><p>Sept 04 – June 06</p></Col>
        <Col sm={8}>
        <p>Protocol Training (Tutor Recruitment Department)<br />
        Senior Recruitment Consultant (Internal/External)<br />
        Recruitment Consultant</p>
        <p><i>Protocol Training</i> was part of the Protocol group of companies and specialised in the development of learning material (NVQ and VRQ), learner recruitment and tutor/assessor recruitment.</p>
        <p>I was employed in the Tutor Recruitment department where I was responsible for sourcing assessors, IVs and sales executives for partner FE colleges and also our sister company Protocol Skills (a national training provider).</p>
        <p>In addition to the above, I was also heavily involved in the initial creation and marketing the above recruitment service to external clients (ie FE colleges and training providers).</p>
        </Col>
        </Row>

      </Container></div>)
}