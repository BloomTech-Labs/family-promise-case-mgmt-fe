import React, { useState, useEffect } from 'react';
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
  TimePicker,
} from 'antd';
import moment from 'moment';
import 'antd/dist/antd.dark.css';
import axios from 'axios';
import dayjs from 'dayjs';

const { Sider, Content, Footer } = Layout;
const weekFormat = 'MM/DD';
const customWeekStartEndFormat = value =>
  `${moment(value).startOf('week').format(weekFormat)} ~ ${moment(value)
    .endOf('week')
    .format(weekFormat)}`;

function RenderCalendar() {
  const dateCellRender = currentDate => {
    const date = currentDate.format('YYYY-MM-DD');
    const events = getEventsByDate(date);
    return (
      <ul className="events">
        {events.map(event => (
          <li key={event.title}>
            <span className="event-title">{event.title}</span>
          </li>
        ))}
      </ul>
    );
  };

  const getEventsByDate = date => {
    return events.filter(event => {
      return dayjs(event.start).format('YYYY-MM-DD') === date;
    });
  };

  const getURL = 'https://fp-case-mgmt-api.herokuapp.com/api/google_events';
  const postURL = 'https://fp-case-mgmt-api.herokuapp.com/api/google_events/1';

  useEffect(() => {
    const ar = [];
    axios
      .get(getURL)
      .then(res => {
        console.log(res);
        setEvents(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const [selectedDate, setSelectedDate] = useState(moment());
  const [events, setEvents] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: moment(),
  });

  const handleDateChange = value => {
    setSelectedDate(value);
  };

  const handleCreateEventClick = () => {
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    axios
      .post(postURL, { eventData })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    const start =
      newEvent.startDate.format('YYYY-MM-DD') +
      'T' +
      newEvent.startTime.format('HH:mm:ss') +
      'Z';
    const end =
      newEvent.endDate.format('YYYY-MM-DD') +
      'T' +
      newEvent.endTime.format('HH:mm:ss') +
      'Z';

    const eventData = {
      title: newEvent.title,
      description: newEvent.description,
      location: newEvent.location,
      start: start,
      end: end,
    };
    console.log(eventData);
    setEvents([...events, eventData]);
    setIsModalVisible(false);
    setNewEvent({
      title: '',
      date: moment(),
      location: '',
      description: '',
      startDate: '',
      startTime: '',
      endDate: '',
      endTime: '',
    });
    console.log('New event created:', eventData);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    setNewEvent({
      title: '',
      date: moment(),
      location: '',
      description: '',
      startDate: '',
      starTime: '',
      endDate: '',
      endTime: '',
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
              <Calendar
                dateCellRender={dateCellRender}
                value={selectedDate}
                onChange={handleDateChange}
              />
              <List
                header={<div>Events</div>}
                dataSource={events.filter(event =>
                  moment(event.start).isSame(selectedDate, 'day')
                )}
                renderItem={item => (
                  <List.Item>
                    <div>
                      <span>{item.title}</span>
                      <span>{item.date.format('dddd, MMMM Do YYYY')}</span>
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

        <Modal
          title="Create Event"
          visible={isModalVisible}
          onOk={handleModalOk}
          onCancel={handleModalCancel}
        >
          <Form>
            <Form.Item label={<label style={{ color: 'white' }}>Title</label>}>
              <Input
                placeholder="Event title"
                value={newEvent.title}
                onChange={e => handleNewEventChange('title', e.target.value)}
              />
            </Form.Item>
            <Form.Item
              label={<label style={{ color: 'white' }}>Location</label>}
            >
              <Input
                placeholder="Event Location"
                value={newEvent.location}
                onChange={e => handleNewEventChange('location', e.target.value)}
              />
            </Form.Item>
            <Form.Item
              label={<label style={{ color: 'white' }}>Description</label>}
            >
              <Input
                placeholder="Event description"
                value={newEvent.description}
                onChange={e =>
                  handleNewEventChange('description', e.target.value)
                }
              />
            </Form.Item>
            <Form.Item
              label={<label style={{ color: 'white' }}>Start Date</label>}
            >
              <DatePicker
                format="YYYY-MM-DD"
                value={newEvent.startDate}
                onChange={value => handleNewEventChange('startDate', value)}
              />
            </Form.Item>
            <Form.Item
              label={<label style={{ color: 'white' }}>Start Time</label>}
            >
              <TimePicker
                format="HH:mm:ss"
                value={newEvent.startTime}
                onChange={value => handleNewEventChange('startTime', value)}
              />
            </Form.Item>
            <Form.Item
              label={<label style={{ color: 'white' }}>End Date</label>}
            >
              <DatePicker
                format="YYYY-MM-DD"
                value={newEvent.endDate}
                onChange={value => handleNewEventChange('endDate', value)}
              />
            </Form.Item>
            <Form.Item
              label={<label style={{ color: 'white' }}>End Time</label>}
            >
              <TimePicker
                format="HH:mm:ss"
                value={newEvent.endTime}
                onChange={value => handleNewEventChange('endTime', value)}
              ></TimePicker>
            </Form.Item>
          </Form>
        </Modal>
      </ConfigProvider>
    </div>
  );
}

export default RenderCalendar;
