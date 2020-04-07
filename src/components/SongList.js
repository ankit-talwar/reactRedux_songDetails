import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';
class SongList extends Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary" onClick={() => this.props.selectSong(song)}>
                            Select
                        </button>
                    </div>

                    <div>
                        <div className="content">{song.title}</div>
                    </div>
                </div>
            );


        });
    }
    render() {

        return <div>{this.renderList()}</div>;
    }
}
//connect redux to react component
const mapStateToProps = (state) => {
    console.log(state);
    return { songs: state.song };
};

export default connect(mapStateToProps, { selectSong })(SongList);
