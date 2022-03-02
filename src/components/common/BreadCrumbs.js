import React from 'react';
import { Breadcrumb } from 'antd';

const breadCrumbNameMap = {
  '/layouttemplate': 'Layout Template',
};

const BreadCrumbs = ({ pathname }) => {
  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>{breadCrumbNameMap[pathname]}</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadCrumbs;
