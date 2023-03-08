import React, { useState } from 'react';
import DashHeader from '../../common/DashHeader';
import SearchIcon from './SearchIcon';
import {
  Layout,
  DatePicker,
  Form,
  Button,
  Input,
  Space,
  Calendar,
  ConfigProvider,
  List,
  Modal,
} from 'antd';
import moment from 'moment';
import 'antd/dist/antd.dark.css';

const { Sider, Content, Footer } = Layout;
const weekFormat = 'MM/DD';
const customWeekStartEndFormat = value =>
  `${moment(value).startOf('week').format(weekFormat)} ~ ${moment(value)
    .endOf('week')
    .format(weekFormat)}`;

function RenderCalendar() {
  const [selectedDate, setSelectedDate] = useState(moment());
  const [events, setEvents] = useState([]); // Initialize an empty array to store events
  const [isModalVisible, setIsModalVisible] = useState(false); // Initialize the modal visibility state
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: moment(),
  }); // Initialize the new event data state

  const handleDateChange = value => {
    setSelectedDate(value);
  };

  const handleCreateEventClick = () => {
    setIsModalVisible(true); // Show the modal when the "CREATE EVENT" button is clicked
  };

  const handleModalOk = () => {
    const eventData = {
      title: newEvent.title,
      date: newEvent.date,
      // TODO: Add other event data fields as needed
    };
    setEvents([...events, eventData]); // Add the new event data to the events array
    setIsModalVisible(false); // Hide the modal when the user submits the event details
    setNewEvent({
      // Reset the new event data state
      title: '',
      date: moment(),
    });
    console.log('New event created:', eventData); // Log the new event data to the console
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    setNewEvent({
      title: '',
      date: moment(),
    });
  };

  const handleNewEventChange = (key, value) => {
    setNewEvent({
      ...newEvent,
      [key]: value,
    });
  };

  return (
    <div>
      <ConfigProvider theme="dark">
        <Layout className="Layout">
          <DashHeader />
          <Layout>
            <Sider className="Sider">
              <div className="SidebarContainer">
                <div className="Rightside__SearchBar">
                  <div>
                    <Space direction="vertical">
                      <Input
                        prefix={<SearchIcon className="searchIcon" />}
                        placeholder="Search event"
                        className="SearchEventBar"
                      />
                    </Space>
                  </div>
                </div>

                <Form.Item label="Select Date" name="Date" initialValue="">
                  <DatePicker
                    defaultValue={moment()}
                    format={customWeekStartEndFormat}
                    picker="week"
                    onChange={handleDateChange}
                  />
                </Form.Item>
                <div className="SidebarButtons">
                  <Button
                    type="Default"
                    className="SidebarButton"
                    onClick={handleCreateEventClick}
                  >
                    CREATE EVENT
                  </Button>
                </div>
              </div>
            </Sider>
            <Content className="WeeklyCalendar">
              <Calendar value={selectedDate} onChange={handleDateChange} />
              <List
                header={<div>Events</div>}
                dataSource={events.filter(event =>
                  event.date.isSame(selectedDate, 'day')
                )}
                renderItem={item => (
                  <List.Item>
                    <div>
                      <span>{item.title}</span>
                      <span>{item.date.format('dddd, MMMM Do YYYY')}</span>
                      {/* TODO: Display other event data fields as needed */}
                    </div>
                  </List.Item>
                )}
              />
            </Content>
          </Layout>
          <Footer className="Footer">
            Family Promise of Spokane ©2022 Created by BloomTech Labs
          </Footer>
        </Layout>

        {/* Modal for creating new events */}
        <Modal
          title="Create Event"
          visible={isModalVisible}
          onOk={handleModalOk}
          onCancel={handleModalCancel}
        >
          <Form>
            <Form.Item label="Title">
              <Input
                placeholder="Event title"
                value={newEvent.title}
                onChange={e => handleNewEventChange('title', e.target.value)}
              />
            </Form.Item>
            <Form.Item label="Date">
              <DatePicker
                value={newEvent.date}
                onChange={value => handleNewEventChange('date', value)}
              />
            </Form.Item>
            {/* TODO: Add other form fields as needed */}
          </Form>
        </Modal>
      </ConfigProvider>
    </div>
  );
}

export default RenderCalendar;
