import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

export function MyComponentEducation() {

    return(<div><Container fluid style={{textAlign: 'left'}}>
        <Row>
        <Col>
        <h3><b><u>Education/Training</u></b></h3>
        <p>9 GCSEs<br />3 A'Levels</p>
        <p>Telesales Course (Yorkshire Post Training)<br />
        Introduction to Computing (CLAIT)<br />
        Diploma in Recruitment Practice (REC)<br />
        Level 2 ITQ (Bradford College)<br />
        Level 2 Equality & Diversity (Learning@Work)<br />
        Sage 50 Accounts <br />
        Sage Instant Accounts<br />
        Sage Bookkeeping Stage 1 <br />
        Sage Bookkeeping Stage 2 <br /></p>
        <p>Introduction to Javascript: Drawing & Animation (online via Khan Academy, Sep 2019)</p>
        <p>Jan 2020<br />
        Web/Software Developer Course, The Developer Academy, Sheffield<br />
        A flexible online/group session course/assessment – allowing students the flexibility to study coding part-time/ad-hoc around their current employment/life commitments. Face to face mentorship/tuition is delivered via three – three hourly - sessions per week (Tuesday/Wednesday evenings and Saturday mornings) and online assessment via The Developer Academy’s own bespoke modules on the Repl.it learning portal.<br />
        The programme covers: <br />
        Programming Foundations<br />
        Programming Fundamentals<br />
        Frontend Development<br />
        Backend Development<br />
        Final Projects<br />
        <br />
        Coding Languages/Technical Skills covered:<br />
        Python, HTML, CSS, Bootstrap, JavaScript, React, Node.JS, C#</p>


        </Col>
        </Row>
      </Container></div>)
}