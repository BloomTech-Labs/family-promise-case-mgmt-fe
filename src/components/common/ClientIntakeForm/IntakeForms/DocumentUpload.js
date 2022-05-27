import React, { useState } from 'react';
import AWS from 'aws-sdk';
import { message, Progress, Upload } from 'antd';
import { connect } from 'react-redux';
import { document } from '../../../../state/actions';
import { InboxOutlined } from '@ant-design/icons';

const REGION = 'us-east-1';

AWS.config.update({
  accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_SECRET_ACCESS_KEY,
});

// AWS.Credentials(process.env.ACCESS_KEY_ID,process.env.SECRET_ACCESS_KEY);

const myBucket = new AWS.S3({
  params: { Bucket: process.env.REACT_APP_BUCKET },
  region: REGION,
});

const sign_s3 = (req, res) => {
  const s3 = new AWS.S3(); // Create a new instance of S3
  const fileName = req.body.fileName;
  const fileType = req.body.fileType;

  const s3Params = {
    Bucket: process.env.REACT_APP_BUCKET,
    Key: fileName,
    Expires: 500,
    ContentType: fileType,
    ACL: 'public-read',
  };

  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if (err) {
      console.log(err);
      res.json({ success: false, error: err });
    }

    const returnData = {
      signedRequest: data,
      url: `https://${s3Params.Bucket}.s3.amazonaws.com/${fileName}`,
    };
  });
};

const props = {
  name: 'file',
  multiple: false,
};

const Documents = props => {
  const [progress, setProgress] = useState(0);
  const [success, setSuccess] = useState(false);
  const [url, setURL] = useState('');

  const upload = e => {
    console.log(e);
  };

  return (
    <div className="sectionContainer">
      <div className="subsectionContainer">
        <h2 className="subsectionHeader">Documents</h2>
        <div className="documentUploadContainer">
          <Upload.Dragger name="file" multiple={false} customRequest={upload}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint"></p>
            {progress > 0 ? <Progress percent={progress} /> : null}
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
