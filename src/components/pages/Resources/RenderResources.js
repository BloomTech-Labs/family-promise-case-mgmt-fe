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
              {/* <h3>Search Resources</h3> */}
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
          <div className="cr-wrap">
            <section className="resource-list">
              <h3>Recently Viewed</h3>

              <div className="resource-links-wrap">
                <div className="resource-link-odd">
                  <p>This is a resource</p>
                  <button className="resource-btn">View</button>
                </div>

                <div className="resource-link-even">
                  <p>This is a resource</p>
                  <button className="resource-btn">View</button>
                </div>
              </div>
            </section>
            <section className="CurrentResource">
              <h3> Current Resource Sample </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip
              </p>

              <a href="#" className="resource-link">
                External link
              </a>
            </section>
          </div>
        </Layout>
      </div>

      <Footer className="Footer">
        Family Promise of Spokane ©2022 Created by BloomTech Labs
      </Footer>
    </div>
  );
}
