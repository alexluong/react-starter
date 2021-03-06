import React from 'react';
import { connect } from 'react-redux';

import { loadingSelector } from 'modules/selectors';
import { uploadFile, UPLOAD_FILE } from 'modules/upload';
import { Button, Input } from 'elements';

class UploadImage extends React.Component {
  state = {
    error: '',
    name: '',
    file: null,
  };

  constructor(props) {
    super(props);

    this.fileInput = React.createRef();
  }

  uploadVideo = e => {
    e.preventDefault();

    const { file } = this.state;
    if (file) {
      this.props.uploadFile(file);
    } else {
      this.setState({ error: 'No file is selected' });
    }
  };

  handleFileSelect = e => {
    this.setState({
      file: e.target.files[0],
      name: e.target.files[0].name,
    });
  };

  render() {
    const { error, name } = this.state;
    const { file } = this.props;
    const imgURL = file ? file.url : null;

    return (
      <React.Fragment>
        <form method="post" onSubmit={this.uploadVideo}>
          <input
            type="file"
            ref={this.fileInput}
            accept="image/*"
            onChange={this.handleFileSelect}
            style={{ display: 'none' }}
          />
          <Button type="button" onClick={() => this.fileInput.current.click()}>
            Select File
          </Button>
          <Input
            variant="text"
            type="text"
            label="File name"
            placeholder="name..."
            value={name}
            disabled
          />
          {error.length > 0 && <p style={{ color: 'red' }}>{error}</p>}
          {this.props.uploading && <p>Uploading</p>}
          <Button type="submit" color="primary">
            Submit
          </Button>
        </form>
        {imgURL && (
          <React.Fragment>
            <p>{imgURL}</p>
            <img src={imgURL} alt="uploaded" />
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({
    uploading: loadingSelector([UPLOAD_FILE])(state),
    file: state.upload.file,
  }),
  { uploadFile },
)(UploadImage);
