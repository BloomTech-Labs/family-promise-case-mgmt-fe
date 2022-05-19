import React from 'react';
import { Avatar, Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

function getImage(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must be  smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

class ProfilePic extends React.Component {
  state = {
    loading: false,
  };
  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getImage(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        })
      );
    }
  };

  render() {
    const { loading, imageUrl } = this.state;
    const uploadButton = (
      <div classname="UploadButton">
        {loading ? (
          <LoadingOutlined className="LoadingOutline" />
        ) : (
          <PlusOutlined className="PlusOutline" />
        )}
        <Avatar className="FP_ProfilePic">FP</Avatar>
      </div>
    );
    return (
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? (
          <img
            className="Avatar-img"
            src={imageUrl}
            alt="avatar"
            style={{ width: '75px' }}
          />
        ) : (
          uploadButton
        )}
      </Upload>
    );
  }
}

// const ProfilePic = () => {
//   return <Avatar className="FP_ProfilePic">FP</Avatar>;
// };

export default ProfilePic;
