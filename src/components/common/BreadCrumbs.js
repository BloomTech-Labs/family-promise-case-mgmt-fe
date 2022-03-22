import React from 'react';
import { Breadcrumb } from 'antd';

const breadCrumbNameMap = {
  '/layouttemplate': 'Layout Template',
};

// renders breadcrumbs for dynamic routes
const dynamicPathname = pathname => {
  // as new dynamic page routes are added to the application, new conditionals should be added to this function
  const pathArr = pathname.split('/');
  if (pathArr[1] === 'cases') {
    return `Cases / Case ID: ${pathArr[2]}`;
  } else return 'Not Found';
};

const BreadCrumbs = ({ pathname }) => {
  return (
    <Breadcrumb className="BreadCrumbs">
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>
        {breadCrumbNameMap[pathname]
          ? breadCrumbNameMap[pathname]
          : dynamicPathname(pathname)}
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadCrumbs;
