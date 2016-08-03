/**
 * Created by Jery on 02.08.2016.
 */
import React, {PropTypes as pt} from 'react';
import ReactDOM from 'react-dom';
import update from 'react-addons-update';

import Storage from './Storage';
import NoteList from './NoteList';
import Constants from './Constants';

class App extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            notes: []
        };
    }

    componentDidMount() {
        this.updateStateFromStorage();
        this.props.storage.change(this.updateStateFromStorage.bind(this));
    }

    render() {
        return (
            <div className="app">
                <h1 className="app__title">My notes:</h1>
                <NoteList
                    notes={this.state.notes}
                    addNote={this.addNote.bind(this)}
                    noteCallbacks={{
                        titleChange: this.noteTitleChange.bind(this),
                        textChange: this.noteTextChange.bind(this),
                        remove: this.removeNote.bind(this)
                    }}
                />
            </div>
        );
    }

    updateStateFromStorage() {
        const storedState = this.props.storage.get() || {notes: []};
        this.setState(storedState);
    }

    pushState(nextState) {
        this.setState(nextState);
        this.props.storage.set(nextState);
    }

    addNote() {
        let note = {
            id: Date.now(),
            title: '',
            text: ''
        };
        let nextState = update(this.state, {notes: {$push: [note]}});

        this.pushState(nextState);
    }

    removeNote(id) {
        let noteIndex = this.state.notes.findIndex((t) => t.id === id);
        let nextState = update(this.state, {notes: {$splice: [[noteIndex, 1]]}});

        this.pushState(nextState);
    }

    updateNote(note) {
        let noteIndex = this.state.notes.findIndex((t) => t.id === note.id);
        let nextState = update(
            this.state, {
                notes: {
                    [noteIndex]: {$set: note}
                }
            }
        );

        this.pushState(nextState);
    }


    noteTitleChange(note, e) {
        let updatedNote = update(note, {title: {$set: e.target.value}});

        this.updateNote(updatedNote);
    }

    noteTextChange(note, e) {
        let updatedNote = update(note, {text: {$set: e.target.value}});

        this.updateNote((updatedNote))
    }
}

App.propTypes = {
    storage: pt.instanceOf(Storage).isRequired
};

ReactDOM.render(
    <App storage={new Storage(Constants.storageKey)} />,
    document.getElementById('app')
);