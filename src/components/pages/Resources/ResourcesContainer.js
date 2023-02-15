import React from 'react';
import RenderResources from './RenderResources';
import DashHeader from '../../common/DashHeader';

import SearchIcon from '../../common/CaseDetails/SearchIcon';

import { Input, Button, Layout } from 'antd';
const { Footer } = Layout;

export default function ResourcesContainer() {
  function searchResourcesBtn(evt) {
    // console.log('search button works');
    // can search by tag system, suggest for case managers to be able
    // to add, customize their own tags for easier tracking
  }

  function handleChange(evt) {
    // console.log(evt.target);
    //input will trigger evt to render onto current resource
  }

  return (
    <>
      <DashHeader />
      <div className="ResourceHeader">
        <h2>Resources</h2>
        <div className="ResearchSearchContainer">
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

      <RenderResources />

      <Footer className="Footer">
        Family Promise of Spokane ©2022 Created by BloomTech Labs
      </Footer>
    </>
  );
}
