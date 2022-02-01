import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

function Navigation() {
    const [current, setCurrent] = useState(null);
    
    return(
        <Menu onClick={({key}) => setCurrent(key)} selectedKeys={[current]} mode="horizontal">
            <Menu.Item key="home"><Link to ="/"/>Home</Menu.Item>
            <Menu.Item key="case-view"><Link to="/case-view"/>Cases</Menu.Item>
            <Menu.Item key="calandar"><Link to="/calendar" />Calendar</Menu.Item>
            <Menu.Item key="resources"><Link to="/resources" />Resources</Menu.Item>
            <Menu.Item key="services"><Link to="/services" />Services</Menu.Item>
        </Menu>
    )
};

export default Navigation;