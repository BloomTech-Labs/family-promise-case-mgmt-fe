import React, { useState } from 'react';
import {
  message,
  Progress,
  Select,
  Upload,
  Form,
  Button,
  Table,
  Space,
} from 'antd';
import { connect } from 'react-redux';
import { document } from '../../../../state/actions';
import {
  InboxOutlined,
  EditOutlined,
  DeleteOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import axios from 'axios';

const props = {
  name: 'file',
  multiple: false,
};

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
  const [form] = Form.useForm();
  const [progress, setProgress] = useState(0);
  const [success, setSuccess] = useState(false);
  const [url, setURL] = useState('');
  const [documents, setDocuments] = useState([]);
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
          <Button icon={<EditOutlined />}></Button>
          <Button icon={<DeleteOutlined />}></Button>
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

  const upload = async e => {
    setSuccess(false);
    console.log(e.file.name, { ...e.file });

    setDisabled(true);
    let file = e.file;
    let fileParts = e.file.name.split('.');
    let fileName = fileParts[0];
    let fileType = fileParts[1];
    console.log('Preparing the upload');
    axios
      .post('http://localhost:8000/api/documents/sign_s3', {
        fileName: fileName,
        fileType: fileType,
      })
      .then(response => {
        var returnData = response.data.data.returnData;
        var signedRequest = returnData.signedRequest;
        var url = returnData.url;
        setURL(url);
        console.log('Recieved a signed request ' + signedRequest);

        var options = {
          headers: {
            'Content-Type': fileType,
          },
        };
        axios
          .put(signedRequest, file, options)
          .then(result => {
            console.log('Response from s3', result);
            setSuccess(true);
            setDocuments([
              ...documents,
              {
                ...e.file,
                name: e.file.name,
                documentType: documentType,
                success: true,
              },
            ]);
            // axios
            //   .put('http://localhost:8000/api/documents/sign_s3', (id, {[documentType]:}))
          })
          .catch(error => {
            alert('ERROR ' + JSON.stringify(error));
          });
      })
      .catch(error => {
        alert('ERROR ' + JSON.stringify(error));
      });
  };
  // setDocumentType(null);
  const onFinish = e => {};

  const onSelect = e => {
    setDisabled(false);
    setDocumentType(e);
  };

  return (
    <Form
      name="referralForm"
      form={form}
      onFinish={onFinish}
      className="sectionContainer"
    >
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
            {documents.length > 0 ? (
              <div>
                <Table dataSource={documents} columns={columns} />
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
            {progress > 0 ? <Progress percent={progress} /> : null}
          </Upload.Dragger>
          <div className="documentUploadControl">
            <Select
              placeholder="Select document type before uploading"
              options={documentOptions}
              onSelect={onSelect}
              value={documentType}
            ></Select>
            <Form.Item style={{ textAlign: 'center' }}>
              <Button
                style={{ margin: '0 20px' }}
                htmlType="submit"
                type="primary"
              >
                Upload
              </Button>
            </Form.Item>
          </div>
        </div>
      </div>
    </Form>
  );
};

const mapStateToProps = state => {
  return {
    documents: state.document,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDocuments: () => dispatch(document.getDocuments()),
    addDocument: () => dispatch(document.addDocuments()),
    editDocument: () => dispatch(document.editDocument()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Documents);
