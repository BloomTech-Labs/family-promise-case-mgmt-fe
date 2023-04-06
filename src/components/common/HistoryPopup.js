import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';
import moment from 'moment';

// Requires antd 4.23.4 to be installed as a dependency to funtion properly
const HistoryPopup = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleClick = () => {
    const timestamp = moment().format();
    console.log(timestamp);
    const clientId = 1; // Replace with the ID of the client that the note belongs to
    axios
      .post(`http://localhost:8000/api/clients/${clientId}/notes`, {
        timestamp,
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
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
