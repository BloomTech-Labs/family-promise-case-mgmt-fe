import React, { useState } from "react";
import { Modal, Button } from "antd";
import "./styles.css";
import "antd/dist/antd.css";

// Requires antd 4.23.4 to be installed as a dependency to funtion properly

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div
      style={{
        display: "block",
        width: 700,
        padding: 30
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
          <button>Make Stamp</button>
        </Modal>
      </>
    </div>
  );
}