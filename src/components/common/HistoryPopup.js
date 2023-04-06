import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';
import moment from 'moment';

// Requires antd 4.23.4 to be installed as a dependency to funtion properly
const HistoryPopup = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [timestamp, setTimestamp] = useState('');

  const handleClick = async () => {
    try {
      const response = await axios.post(`http://localhost:8000/:1/notes`, {
        timestamp: moment().toISOString(),
      });
      setTimestamp(response.data.timestamp);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      style={{
        display: 'block',
        width: 700,
        padding: 30,
      }}
    >
      <h4>History Popup Time Stamp Button Using Ant-Design Modal</h4>
      <>
        <Button
          type="secondary"
          onClick={() => {
            setIsModalVisible(true);
          }}
        >
          Click to open Modal
        </Button>
        <Modal
          title="Record History"
          visible={isModalVisible}
          onOk={() => {
            setIsModalVisible(false);
          }}
          onCancel={() => {
            setIsModalVisible(false);
          }}
        >
          <p>Push To Record a Time Stamp on History Page</p>
          <Button type="secondary" onClick={handleClick}>
            Make Stamp
          </Button>
        </Modal>
      </>
    </div>
  );
};

export default HistoryPopup;
