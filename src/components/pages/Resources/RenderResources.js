import React from 'react';
import DashHeader from '../../common/DashHeader';
import SearchIcon from '../../common/CaseDetails/SearchIcon';

import { List } from '../../common';
import RenderExampleListPage from '../ExampleList/RenderExampleListPage';
import { getExampleData } from '../../../api';

import { Layout, Space, Input, Button } from 'antd';
const { Sider, Footer } = Layout;

export default function RenderResources() {
  function searchResourcesBtn(evt) {
    // console.log('search button works');
  }

  function handleChange(evt) {
    // console.log(evt.target);
  }

  return (
    <div className="RenderResources">
      <DashHeader />
      <div className="ResourceHeader">
        <h2>Resources</h2>
      </div>
      <div className="ResourceBody">
        <Layout className="Layout">
          <div className="SearchContainer">
            <div className="search-bar">
              <h3>Search Resources</h3>
              <Input
                prefix={<SearchIcon className="searchIcon" />}
                placeholder="Search resources"
                className="SearchBar"
                onChange={handleChange}
              />
              <Button
                type="Default"
                className="SidebarButton"
                onClick={searchResourcesBtn}
              >
                SEARCH
              </Button>
            </div>
          </div>
          {/* <List className='ResourceList'
              // passing Axios request helper function as a callback.
              getItemsData={ getExampleData }
              // component that shows while waiting for API request
              // to complete
              LoadingComponent={() => <div>Loading Items...</div>}
              // passing in a component that receives new data and returns JSX elements.
              RenderItems={ RenderExampleListPage }
            />
            */}
          <div className="CurrentResource">
            <h4> Current Resource Title </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip
            </p>

            <a href="#">Resource Link</a>
          </div>
          <div className="ResourcesRight">
            <h3>Resources List</h3>
            <a href="#">Resource 1</a>
            <a href="#">Resource 2</a>
            <a href="#">Resource 3</a>
            <a href="#">Resource 4</a>
            <a href="#">Resource 5</a>
            <a href="#">Resource 6</a>
            <a href="#">Resource 7</a>
            <a href="#">Resource 8</a>
            <a href="#">Resource 9</a>
            <a href="#">Resource 10</a>
            <a href="#">Resource 11</a>
            <a href="#">Resource 12</a>
          </div>
        </Layout>
      </div>

      <Footer className="Footer">
        Family Promise of Spokane ©2022 Created by BloomTech Labs
      </Footer>
    </div>
  );
}
