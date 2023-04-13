import React from 'react';
import './../../../styles/css/styles.css';
import FPLogo from './../../../assets/fplogo.png';
import FPImage from './../../../assets/FamPromImage.png';
import {
  PushpinOutlined,
  FundProjectionScreenOutlined,
  UserOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { Layout } from 'antd';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'antd';
import { Typography } from 'antd';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { HiUsers, HiHomeModern } from 'react-icons/hi';
import { BsFillMapFill } from 'react-icons/bs';
import LoginContainer from '../Login/LoginContainer';
import LogoutContainer from '../Logout/LogoutContainer';
const { Header, Footer, Content } = Layout;
const { Title } = Typography;

const TempLandingPage = () => {
  const { loginWithRedirect, logout } = useAuth0();
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <Layout>
        <Header className="landing-header">
          <img
            className="fam-promise-logo"
            src={FPLogo}
            alt="Family Promise Logo"
          />
        </Header>
        <Content
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <div className="right-side-login-col">
            <div className="info-bar-wrapper">
              <div className="info-bar">
                <div className="info-col">
                  <PushpinOutlined
                    style={{ color: '#fec357' }}
                    className="info-bar-icons"
                  />
                  <p className="info-desc">200+</p>
                  <p className="info-desc" style={{ fontWeight: 'bolder' }}>
                    Affiliates
                  </p>
                  <p className="info-desc">Nationally</p>
                </div>
                <div className="info-col">
                  <FundProjectionScreenOutlined
                    style={{ color: '#fec357' }}
                    className="info-bar-icons"
                  />
                  <p className="info-desc">43</p>
                  <p className="info-desc" style={{ fontWeight: 'bolder' }}>
                    States
                  </p>
                  <p className="info-desc">With Affiliates</p>
                </div>
                <div className="info-col">
                  <UserOutlined
                    style={{ color: '#fec357' }}
                    className="info-bar-icons"
                  />
                  <p className="info-desc">186K</p>
                  <p className="info-desc" style={{ fontWeight: 'bolder' }}>
                    Served
                  </p>
                  <p className="info-desc">In 2021</p>
                </div>
                <div className="info-col">
                  <HomeOutlined
                    style={{ color: '#fec357' }}
                    className="info-bar-icons"
                  />
                  <p className="info-desc">81%</p>
                  <p className="info-desc" style={{ fontWeight: 'bolder' }}>
                    Served
                  </p>
                  <p className="info-desc">Find Houseing</p>
                </div>
              </div>
            </div>
            <div className="login-wrapper">
              <LoginContainer />
              <LogoutContainer />
              {/* <Button
                style={{
                  backgroundColor: '#006fba',
                  color: 'white',
                  borderRadius: '.25rem',
                  width: '12rem',
                  height: '2.5rem',
                }}
                onClick={() =>
                  loginWithRedirect({
                    redirectUri: `${window.location.origin}/dashboard`,
                  })
                }
                type="primary"
                htmlType="submit"
              >
                Login
              </Button> */}
              <Title style={{ fontSize: '1rem', marginTop: '1rem' }}>
                {' '}
                Follow Us on Social Media!
              </Title>
              <div className="social-wrapper">
                <FaFacebookF className="social-icons" />
                <FaTwitter className="social-icons" />
                <FaInstagram className="social-icons" />
              </div>
            </div>
            <div className="mission-quote">
              <Title
                style={{
                  color: 'black',
                  fontWeight: 'lighter',
                  marginTop: '2rem',
                }}
                level={2}
              >
                Our mission is to help families experiencing homelessness and
                low-income families achieve sustainable independence through a
                community-based response.
              </Title>
            </div>
          </div>
          <div className="left-side-landing-col">
            <img
              src={FPImage}
              className="fp-image"
              alt="A mother and her two young children returning home."
            />
            <div className="slogan-background">
              <Title style={{ color: 'white', fontWeight: 'lighter' }}>
                WE ARE FAMILY PROMISE
              </Title>
              <Title
                style={{ color: 'white', fontWeight: 'lighter' }}
                level={4}
              >
                Transforming the lives of families experiencing homelessness.
                Because every child deserves a home.
              </Title>
            </div>
          </div>
        </Content>
        {isAuthenticated && (
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Log Out
          </button>
        )}
        <Footer className="landing-footer">
          <img
            className="fam-promise-logo"
            src={FPLogo}
            alt="Family Promise Logo"
          />
        </Footer>
      </Layout>
    </>
  );
};

export default TempLandingPage;
