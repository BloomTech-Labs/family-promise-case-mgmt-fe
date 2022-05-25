import React from 'react';
import AWS from 'aws-sdk';
import { message, Upload } from 'antd';
import { connect } from 'react-redux';
import { document } from '../../../../state/actions';
import { InboxOutlined } from '@ant-design/icons';

const S3_BUCKET = 'family-promise-case-management';
const REGION = 'us-east-1';

AWS.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
});

const myBucket = new AWS.S3({
  params: { Bucket: S3_BUCKET },
  region: REGION,
});

const props = {
  name: 'file',
  multiple: false,

  onChange(info) {
    const { status } = info.file;

    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }

    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },

  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

const Documents = props => {
  return (
    <div className="sectionContainer">
      <div className="subsectionContainer">
        <h2 className="subsectionHeader">Documents</h2>
        <div className="documentUploadContainer">
          <Upload.Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint"></p>
          </Upload.Dragger>
        </div>
      </div>
    </div>
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
    addDocument: () => dispatch(document.addDocument()),
    editDocument: () => dispatch(document.editDocument()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Documents);
