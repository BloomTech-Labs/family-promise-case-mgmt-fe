//Basic and antD imports
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Collapse, Input, Space } from 'antd';

//Style and icon imports
import '../../../styles/css/styles.css';
import arrow from '../../../assets/VectorarrowForAllCases.png';
import filter from '../../../assets/filterIcon.PNG';
import SearchIcon from './SearchIcon';

//Component imports
import ClientFamilyInfoForm from '../CaseDetailsForms/ClientFamilyInformation';
import HouseholdInformationForm from '../CaseDetailsForms/HouseholdInformationForm';

//AntD special component peices
const { Panel } = Collapse;
const { TextArea } = Input;

//When connecting to the backend, be sure to replace placeholderArray with api array
//Change the placeholder data for the notes section into api data
//Add keys to mapped data when we have an id from api data
//Once all of the forms have been added to this page the four buttons at the bottom right side will need to be setup with that data.
//Once all forms have been made they an be imported and added to the collapsible panels

function CaseDetails() {
  //State slices for filtered search bar
  const [filterSearch, setFilterSearch] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  //State slices for adding notes
  const [newNote, setNewNote] = useState('');

  //onClick handler for buttons
  const generateFormHandler = event => {
    console.log('Itsworking!!!');
  };

  const hfcaHandler = event => {
    console.log('Itsworking!!!');
  };

  const hvcPacketHandler = event => {
    console.log('Itsworking!!!');
  };

  const printDocuHandler = event => {
    console.log('Itsworking!!!');
  };

  const saveNotesHandler = event => {
    placeholderArray.push(newNote);
  };

  //onChange for filtered search bar
  let placeholderArray = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.',
  ];
  const filterSearchHandler = filterValue => {
    setFilterSearch(filterValue);
    //Once backend connected, change placeholderArray to API data instead
    if (filterValue !== '') {
      const filteredData = placeholderArray.filter(item => {
        return Object.values(item)
          .join('')
          .toLowerCase()
          .includes(filterValue.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(placeholderArray);
    }
  };

  //onChange for adding a note text field
  const addNoteHandler = event => {
    setNewNote(event.target.value);
  };

  return (
    <div className="CaseDetails">
      <div className="CaseDetails__LeftSide">
        <div className="CaseDetails__LeftSideHead">
          <h2>Doe, John</h2>
          <Link to="/cases">
            <Button type="Primary">
              ALL CASES
              <img src={arrow} alt="Arrow for all cases button" />
            </Button>
          </Link>
        </div>
        <div className="CaseDetails__LeftSideBtnsContainer">
          <Collapse accordion className="mainCollapse">
            <Panel header="CLIENT/FAMILY INFORMATION" key="1" showArrow={false}>
              <ClientFamilyInfoForm />
            </Panel>
            <Panel header="HOUSEHOLD INFORMATION" key="2" showArrow={false}>
              <HouseholdInformationForm />
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
          <Button
            type="Default"
            className="leftSideBottomButtons"
            onClick={generateFormHandler}
          >
            Generate Form
          </Button>
          <Button
            type="Default"
            className="leftSideBottomButtons"
            onClick={hfcaHandler}
          >
            HFCA
          </Button>
          <Button
            type="Default"
            className="leftSideBottomButtons"
            onClick={hvcPacketHandler}
          >
            HVC Packet
          </Button>
          <Button
            type="Default"
            className="leftSideBottomButtons"
            onClick={printDocuHandler}
          >
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
                onChange={event => filterSearchHandler(event.target.value)}
              />
            </Space>
          </div>
        </div>
        <div className="Rightside__Notes__BoxandButton">
          <Space direction="vertical">
            <TextArea rows={6} onChange={addNoteHandler} />
          </Space>
          <Button
            type="Default"
            className="saveNoteButton"
            onClick={saveNotesHandler}
          >
            Save Note
          </Button>
        </div>
        <div className="Rightside__PreviousNotes">
          {filterSearch.length > 1
            ? filteredResults.map(item => {
                return (
                  <div>
                    <h3>Title here</h3>
                    <p>Note goes here.</p>
                  </div>
                );
              })
            : placeholderArray.map(item => {
                return (
                  <div>
                    <div>
                      <h3>Title here2</h3>
                      <p>Note goes here.2</p>
                    </div>
                    <div>
                      <h3>Title here2</h3>
                      <p>Note goes here.2</p>
                    </div>
                    <div>
                      <h3>Title here2</h3>
                      <p>Note goes here.2</p>
                    </div>
                    <div>
                      <h3>Title here2</h3>
                      <p>Note goes here.2</p>
                    </div>
                    <div>
                      <h3>Title here2</h3>
                      <p>Note goes here.2</p>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
}

export default CaseDetails;
