import React, { useState, useEffect } from 'react';
import { Select, Upload, Button, Table, Space } from 'antd';
import { connect } from 'react-redux';
import { document } from '../../../../state/actions';
import {
  InboxOutlined,
  DeleteOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import axios from 'axios';

const documentOptions = [
  {
    label:
      'Completed the HFCA (Homeless Families Coordinated Assessment) within the past 90 days',
    value: 'completed_hfca',
  },
  {
    label: 'A valid Driver’s License or State Identification Card',
    value: 'valid_driver',
  },
  {
    label: 'A valid social security card for everyone in my household',
    value: 'valid_social',
  },
  {
    label: 'Signed up for benefits through DSHS (WIC, TANF, SNAP)',
    value: 'dshs_wic_tanf_snap',
  },
  {
    label: 'Completed the Responsible Renters Course',
    value: 'responsible_renters_course',
  },
  {
    label: 'Birth certificates for children in household',
    value: 'birth_cert_for_children',
  },
  { label: 'Children Enrolled in School', value: 'child_enrolled_school' },
  { label: 'Childcare', value: 'childcare' },
];

const documentTypeFilter = [
  { text: 'completed_hfca', value: 'completed_hfca' },
  { text: 'valid_driver', value: 'valid_driver' },
  { text: 'valid_social', value: 'valid_social' },
  { text: 'dshs_wic_tanf_snap', value: 'dshs_wic_tanf_snap' },
  { text: 'responsible_renters_course', value: 'responsible_renters_course' },
  { text: 'birth_cert_for_children', value: 'birth_cert_for_children' },
  { text: 'child_enrolled_school', value: 'child_enrolled_school' },
  { text: 'childcare', value: 'childcare' },
];

const Documents = props => {
  const [disabled, setDisabled] = useState(true);
  const [documentType, setDocumentType] = useState(null);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Type',
      dataIndex: 'documentType',
      key: 'type',
      filters: documentTypeFilter,
    },
    {
      title: 'Options',
      key: 'options',
      render: (text, record, i) => (
        <Space size="middle">
          <Button
            icon={<DeleteOutlined />}
            onClick={e => handleDelete(record)}
          ></Button>
        </Space>
      ),
    },
    {
      title: 'Uploaded',
      key: 'uploaded',
      render: (text, record, i) => (
        <Space size="middle">
          {record.success ? (
            <CheckCircleOutlined />
          ) : (
            <ExclamationCircleOutlined />
          )}
        </Space>
      ),
    },
  ];

  useEffect(() => {
    if (props.client.id !== 0) {
      axios
        .get(`http://localhost:8000/api/documents/${props.client.id}`)
        .then(documents => {
          console.log(documents.data);
          props.setDocuments(documents.data);
          console.log(documents.data);
        })
        .catch(error => {
          alert('ERROR ' + error);
        });
    }
  }, [props.client]);

  const handleDelete = file => {
    axios
      .post(`http://localhost:8000/api/documents/${props.client.id}`, file)
      .then(() => {
        props.deleteDocument(file);
      })
      .catch(error => {
        alert('ERROR ' + error);
      });
  };

  const upload = async e => {
    console.log(e.file.name, { ...e.file });

    setDisabled(true);
    let file = e.file;
    let fileParts = e.file.name.split('.');
    let fileName = fileParts[0];
    let fileType = fileParts[1];
    axios
      .post('http://localhost:8000/api/documents/sign_s3', {
        fileName: fileName,
        fileType: fileType,
      })
      .then(response => {
        var returnData = response.data.data.returnData;
        var signedRequest = returnData.signedRequest;
        var url = returnData.url;
        var options = {
          headers: {
            'Content-Type': fileType,
          },
        };
        axios
          .put(signedRequest, file, options)
          .then(result => {
            const documentObj = {
              name: fileName,
              success: true,
              url: url,
              documentType: documentType,
              extension: fileType,
            };
            props.addDocument([documentType, documentObj]);
            axios
              .post(
                `http://localhost:8000/api/documents/${props.client.id}/update`,
                { [documentType]: documentObj }
              )
              .then(result => {
                setDocumentType(null);
              })
              .catch(error => {
                alert('ERROR ' + error);
              });
          })
          .catch(error => {
            alert('ERROR ' + error);
          });
      })
      .catch(error => {
        alert('ERROR ' + error);
      });
  };

  const onSelect = e => {
    setDisabled(false);
    setDocumentType(e);
  };

  return (
    <div className="sectionContainer">
      <div className="subsectionContainer">
        <h2 className="subsectionHeader">Documents</h2>
        <div className="documentUploadContainer">
          <Upload.Dragger
            name="file"
            multiple={false}
            customRequest={upload}
            disabled={disabled}
            showUploadList={false}
          >
            {Object.values(props.documents).length > 0 ? (
              <div>
                <Table
                  dataSource={Object.values(props.documents)}
                  columns={columns}
                />
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
              </div>
            ) : (
              <div>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
              </div>
            )}
          </Upload.Dragger>
          <div className="documentUploadControl">
            <Select
              placeholder="Select document type before uploading"
              options={documentOptions}
              onSelect={onSelect}
              value={documentType}
            ></Select>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    documents: state.document,
    client: state.client,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addDocument: data => dispatch(document.addDocument(data)),
    setDocuments: data => dispatch(document.setDocuments(data)),
    deleteDocument: data => dispatch(document.removeDocument(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Documents);
