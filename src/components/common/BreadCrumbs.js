import React from 'react';
import { Breadcrumb } from 'antd';
import '../../styles/css/BreadCrumbs.css';

const breadCrumbNameMap = {
  '/layouttemplate': 'Layout Template',
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
