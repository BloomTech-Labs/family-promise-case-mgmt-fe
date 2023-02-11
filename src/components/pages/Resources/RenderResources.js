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
    // can search by tag system using API
  }

  function handleChange(evt) {
    // console.log(evt.target);
    //input will trigger evt to render onto current resource
  }

  return (
    <div className="RenderResources">
      <DashHeader />
      <div className="ResourceHeader">
        <h2>Resources</h2>
        <div className="SearchContainer">
          <div className="search-bar">
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
      </div>
      <div className="ResourceBody">
        <Layout className="Layout">
          <div className="cr-wrap">
            <section className="resource-list">
              <h3>Recently Viewed</h3>

              <div className="resource-links-wrap">
                <div className="resource-link rl-odd">
                  <h4>This is a resource</h4>
                  <button className="resource-btn">View</button>
                </div>

                <div className="resource-link rl-even">
                  <h4>This is a resource</h4>
                  <button className="resource-btn">View</button>
                </div>

                <div className="resource-link rl-odd">
                  <h4>This is a resource</h4>
                  <button className="resource-btn">View</button>
                </div>

                <div className="resource-link rl-even">
                  <h4>This is a resource</h4>
                  <button className="resource-btn">View</button>
                </div>
              </div>
            </section>
            <section className="CurrentResource">
              <h3> Current Resource Sample </h3>

              <h4> Summary </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip
              </p>
              <h4> Details </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip
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
