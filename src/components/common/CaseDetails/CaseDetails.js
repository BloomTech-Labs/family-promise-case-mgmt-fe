import React from 'react';
import { Button, Collapse, Input, Space } from 'antd';

import '../../../styles/css/styles.css';
import arrow from '../../../assets/VectorarrowForAllCases.png';
import filter from '../../../assets/filterIcon.PNG';
import SearchIcon from './SearchIcon';

import ClientFamilyInformationForm from '../CaseDetailsForms/ClientFamilyInformation';
import HouseholdInformationForm from '../CaseDetailsForms/HouseholdInformationForm';
import Notes from '../CaseDetailsForms/Notes';

const { Panel } = Collapse;
const { TextArea } = Input;

const CaseDetails = () => {
  return (
    <div className="CaseDetails">
      <div className="CaseDetails__LeftSide">
        <div className="CaseDetails__LeftSideHead">
          <h2>Doe, John</h2>
          <h3>000-000-0000</h3>
          <Button type="Primary">
            ALL CASES
            <img src={arrow} alt="Arrow for all cases button" />
          </Button>
        </div>
        <div className="CaseDetails__LeftSideBtnsContainer">
          {/* <div>
            <Row className="CaseDetails__Leftside__gridHead">
              <Col span={8} className="gridColumns">HoH Here</Col>
              <Col span={8} className="gridColumns">HoH Phone Here</Col>
              <Col span={8} className="gridColumns">HoH Email Here</Col>
            </Row>
          </div> */}
          <Collapse accordion className="mainCollapse">
            <Panel header="CLIENT/FAMILY INFORMATION" key="1" showArrow={false}>
              {/* <ClientFamilyInformationForm /> */}
              <p>When form is built, we can add it here</p>
            </Panel>
            <Panel header="HOUSEHOLD INFORMATION" key="2" showArrow={false}>
              {/* <HouseholdInformationForm /> */}
              <p>When form is built, we can add it here</p>
            </Panel>
            <Panel header="EDUCATION" key="3" showArrow={false}>
              <p>When form is built, we can add it here</p>
            </Panel>
            <Panel header="EMPLOYMENT" key="4" showArrow={false}>
              <p>When form is built, we can add it here</p>
            </Panel>
            <Panel header="FINANCES" key="5" showArrow={false}>
              <p>When form is built, we can add it here</p>
            </Panel>
            <Panel header="INSURANCE" key="6" showArrow={false}>
              <p>When form is built, we can add it here</p>
            </Panel>
            <Panel header="DOCUMENTS" key="7" showArrow={false}>
              <p>When form is built, we can add it here</p>
            </Panel>
            <Panel header="GOALS/STRENGTHS" key="8" showArrow={false}>
              <p>When form is built, we can add it here</p>
            </Panel>
          </Collapse>
        </div>
        <div className="Leftside__Bottom__ButtonsContainer">
          <Button type="Default" className="leftSideBottomButtons">
            Generate Form
          </Button>
          <Button type="Default" className="leftSideBottomButtons">
            HFCA
          </Button>
          <Button type="Default" className="leftSideBottomButtons">
            HVC Packet
          </Button>
          <Button type="Default" className="leftSideBottomButtons">
            Print Documents
          </Button>
        </div>
      </div>
      <div className="CaseDetails__RightSide">
        <div className="Rightside__Head">
          <h2 className="Rightside__Header">Case Notes</h2>
        </div>
        <div className="Rightside__SearchBar">
          <img src={filter} alt="Sign for filtering with a search bar" />
          <h3>Filter Case Notes</h3>
          <div>
            <Space direction="vertical">
              <Input
                prefix={<SearchIcon className="searchIcon" />}
                placeholder="Search for keywords"
                className="SearchBar"
              />
            </Space>
          </div>
        </div>
        <div className="Rightside__Notes__BoxandButton">
          <Space direction="vertical">
            <TextArea rows={6} />
          </Space>
          <Button type="Default" className="saveNoteButton">
            Save Note
          </Button>
        </div>
        <div className="Rightside__PreviousNotes"></div>
      </div>
    </div>
  );
};

export default CaseDetails;
