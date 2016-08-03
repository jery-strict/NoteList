/**
 * Created by Jery on 03.08.2016.
 */
import React, {PropTypes as pt} from 'react';
import update from 'react-addons-update';

import Constants from './Constants';
import Note from './Note';

class NoteList extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            filter: ''
        };
    }

    render() {
        let visibleNotes = this.props.notes.filter((item) => {
            return item.title.toLowerCase().indexOf(this.state.filter) === 0;
        }).map((note) => (
            <li key={note.id} className="note-list__item">
                <Note note={note} noteCallbacks={this.props.noteCallbacks}/>
            </li>
        ));

        return (
            <div className="note-list">
                <div className="note-list__header">
                    <input type="search"
                           className="note-list__search"
                           placeholder="Search"
                           maxLength={Constants.titleMaxLength}
                           value={this.props.filter}
                           onChange={this.setFilter.bind(this)}
                    />
                </div>
                <ul className="note-list__list">
                    {visibleNotes}
                </ul>
                <a href="#" className="note-list__add-btn" onClick={this.props.addNote}>+</a>
            </div>
        );
    }

    setFilter(e) {
        let nextState = update(this.state, { filter: {$set: e.target.value}});

        this.setState(nextState);
    }
}

NoteList.propTypes = {
    notes: pt.arrayOf(Object).isRequired,
    noteCallbacks: pt.object.isRequired,
    addNote: pt.func.isRequired,
    setFilter: pt.func.isRequired
};

export default NoteList;
