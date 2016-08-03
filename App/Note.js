/**
 * Created by Jery on 03.08.2016.
 */
import React, {PropTypes as pt} from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import Constants from './Constants'

class Note extends React.Component {
    render() {
        return (
            <div className="note">
                <div className="note__header">
                    <input type="text"
                           className="note__title"
                           placeholder="No title"
                           maxLength={Constants.titleMaxLength}
                           value={this.props.note.title}
                           onChange={this.props.noteCallbacks.titleChange.bind(null, this.props.note)}
                    />
                    <a href="#"
                       className="note__remove-btn"
                       onClick={this.props.noteCallbacks.remove.bind(null, this.props.note.id)}>x</a>
                </div>
                <TextareaAutosize className="note__text"
                          value={this.props.note.text}
                          onChange={this.props.noteCallbacks.textChange.bind(null, this.props.note)}
                >
                </TextareaAutosize>
            </div>
        );
    }
}

Note.propTypes = {
    note: pt.object.isRequired,
    noteCallbacks: pt.shape({
        titleChange: pt.func.isRequired,
        textChange: pt.func.isRequired,
        remove: pt.func.isRequired
    })
}

export default Note;