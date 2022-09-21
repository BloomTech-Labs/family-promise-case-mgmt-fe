import React, { Component } from "react";
import "./styles.css";
import ReactModal from "react-modal-resizable-draggable";

// react-modal-resizable-draggable   0.1.6  is the dependency used here to make the pop up window funtion properly *SEE BELOW FOR NEEDED CSS

class Popup extends Component {
  state = {
    seen: false
  };

  togglePop = () => {
    this.setState({
      seen: !this.state.seen
    });
  };

  render() {
    return (
      <div className="Popup">
        <button onClick={this.togglePop}>Open Timer</button>
        <ReactModal
          initWidth={400}
          initHeight={200}
          className={"my-modal-custom-class"}
          onRequestClose={this.togglePop}
          isOpen={this.state.seen}
        >
          <h3>Case Timer</h3>
          <div className="body">
            <p>Timer Goes Here!</p>
          </div>
          <button onClick={this.togglePop}>Close Timer</button>
        </ReactModal>
      </div>
    );
  }
}

export default Popup;



// *** The code below needs to be moved to and integrated into the CSS for the pop up to function properly
  
//   .flexible-modal {
//     position: absolute;
//     z-index: 1;
//     border: 1px solid #ccc;
//     background: white;
//   }
//   .flexible-modal-mask {
//     position: fixed;
//     height: 100%;
//     background: rgba(55, 55, 55, 0.6);
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//   }
//   .flexible-modal-resizer {
//     position: absolute;
//     right: 0;
//     bottom: 0;
//     cursor: se-resize;
//     margin: 5px;
//     border-bottom: solid 2px #333;
//     border-right: solid 2px #333;
//   }
//   .flexible-modal-drag-area {
//     background: rgba(22, 22, 333, 0.2);
//     height: 50px;
//     position: absolute;
//     right: 0;
//     top: 0;
//     cursor: move;
//   }