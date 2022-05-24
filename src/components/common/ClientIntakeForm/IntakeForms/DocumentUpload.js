import React from 'react';
import { Upload } from 'antd';
import { connect } from 'react-redux';
import { document } from '../../../../state/actions';

const Documents = props => {
  return (
    <div className="sectionContainer">
      <div className="subsectionContainer">
        <h2 className="subsectionHeader">Documents</h2>
        <div className="documentUploadContainer"></div>
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
