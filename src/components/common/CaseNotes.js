import React, { useState } from 'react';
import { Button, Input, Form, List, Modal } from 'antd';
import moment from 'moment';

const { TextArea } = Input;

const CaseNotes = () => {
  // Define state for storing notes
  const [notes, setNotes] = useState([]);

  // Get a reference to the form instance
  const [form] = Form.useForm();

  // Define state for tracking the index of the note being edited
  const [editIndex, setEditIndex] = useState(null);

  // Define state for the edit form visibility
  const [editVisible, setEditVisible] = useState(false);

  // Function to handle note submission
  const onFinish = values => {
    // Create a new note object with timestamp
    const note = {
      text: values.note,
      timestamp: moment().format('LLL'),
    };

    // Add the new note to the notes array
    setNotes([...notes, note]);

    // Reset the form to clear the input field
    form.resetFields();
  };

  // Function to handle note deletion
  const handleRemove = index => {
    // Create a copy of the notes array
    const newNotes = [...notes];

    // Remove the note at the given index
    newNotes.splice(index, 1);

    // Update the notes state with the new array
    setNotes(newNotes);
  };

  // Function to handle note editing
  const handleEdit = index => {
    // Set the edit index to the given index
    setEditIndex(index);

    // Show the edit form
    setEditVisible(true);

    // Set the initial value of the edit form to the current note text
    form.setFieldsValue({ note: notes[index].text });
  };

  // Function to handle edit form submission
  const handleEditSubmit = values => {
    // Create a copy of the notes array
    const newNotes = [...notes];

    // Update the note at the edit index with the new text and timestamp
    newNotes[editIndex] = {
      text: values.note,
      timestamp: moment().format('LLL'),
    };

    // Update the notes state with the new array
    setNotes(newNotes);

    // Reset the edit index
    setEditIndex(null);

    // Hide the edit form
    setEditVisible(false);
  };

  // Function to handle edit form cancellation
  const handleEditCancel = () => {
    // Reset the edit index
    setEditIndex(null);

    // Hide the edit form
    setEditVisible(false);
  };

  return (
    <div>
      {/* Form for adding new notes */}
      <Form form={form} onFinish={onFinish}>
        <Form.Item name="note">
          <TextArea rows={4} placeholder="Add a note..." />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Add Note
        </Button>
      </Form>

      {/* List of notes */}
      <List
        dataSource={notes}
        renderItem={(item, index) => (
          <List.Item
            // Actions for editing and deleting notes
            actions={[
              <Button onClick={() => handleEdit(index)} type="link">
                Edit
              </Button>,
              <Button onClick={() => handleRemove(index)} type="link">
                Delete
              </Button>,
            ]}
          >
            <List.Item.Meta
              // Display the note text as title and timestamp as description
              title={item.text}
              description={item.timestamp}
            />
          </List.Item>
        )}
      />

      {/* Edit note modal */}
      <Modal
        title="Edit Note"
        visible={editVisible}
        onCancel={handleEditCancel}
        footer={[
          <Button key="cancel" onClick={handleEditCancel}>
            Cancel
          </Button>,
          <Button form="editForm" key="submit" htmlType="submit" type="primary">
            Save Changes
          </Button>,
        ]}
      >
        <Form form={form} id="editForm" onFinish={handleEditSubmit}>
          <Form.Item name="note">
            <TextArea rows={4} placeholder="Edit the note..." />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default CaseNotes;
