import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

export function MyComponentJobOne() {

    return(<div><Container fluid style={{textAlign: 'left'}}>
        <Row>
        <Col>
        <h3><b><u>Employment History</u></b></h3>
        </Col>
        </Row>
        <Row>
        <Col sm={4}><p>June 06 – To Date</p></Col>
        <Col sm={8}>
        <p>Strawberry Recruitment<br />
        Recruitment Director</p>
        <p><i>Strawberry Recruitment</i> provides a UK wide recruitment service helping our clients and candidates to find the best solution for them.</p>
        <p>Our recruitment service mainly focuses on the following key sectors:</p>
        <p>Adult Education and Skills<br />
        IT/Digital<br />
        Executive Search<br />
        Finance<br /></p>
        <p>I have been responsible for the strategic management of a recruitment team, consisting of a Senior Recruitment Consultant and a number of Recruitment Consultants and Resourcers. My main duties and responsibilities have included -</p>
        <p>To drive KPIs and sales in order to achieve business objectives/targets.</p>
        <p>Ability to manage operations within budgetary constraints.</p>
        <p>Sage Accounting (Payroll, SOs, POs, P&L, VAT returns, etc). </p>
        <p>MIS/CRM management – including populating two recruitment CRMs (HRS and Palustris) with relevant data (search fields, etc) from the ground up.</p>
        <p>Creating, managing and analyzing performance data and other information.</p>
        <p>Arranging and chairing team meetings to discuss strategy.</p>
        <p>Recruit staff, oversee their induction, appraisals and trainings</p>
        <p>Performance management.</p>
        <p>Meeting with clients to discuss potential recruitment needs and negotiating rates, contracts etc.</p>
        <p>Account management </p>
        <p>Sourcing suitable candidates for client vacancies using a variety of different sources – internet job boards, company website, newspaper advertising and conferences/exhibitions.</p>
        <p>Thorough screening of candidates to ascertain suitability.</p>
        <p>Arranging candidate interviews and discussing offers of employment, rejections, etc.</p>
        <p>Selecting different advertising media, negotiating advertising costs, designing advertising copy and job board maintenance.</p>

        </Col>
        </Row>

      </Container></div>)
}