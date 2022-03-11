import React from 'react';
import { Breadcrumb } from 'antd';

const breadCrumbNameMap = {
  '/layouttemplate': 'Layout Template',
  '/cases': 'Cases',
};

const BreadCrumbs = ({ pathname }) => {
  return (
    <Breadcrumb className="BreadCrumbs">
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>{breadCrumbNameMap[pathname]}</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadCrumbs;
