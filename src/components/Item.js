import React from 'react';
import { Link } from "react-router-dom";

export default class Item extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            track: this.props.track
        }
    }

    render() {
        return (
            <div style={{ display: 'inline-block', padding: '20px', margin: '20px', borderRadius: '25px', backgroundColor: 'whitesmoke'}}>
                <h2>{this.state.track.SongName}</h2>
                <div style={{ padding: '5px', marginBottom: '5px' }}>
                    <Link to={`/savantmusic/${this.state.track._id}/show`} style={{textDecoration: 'none'}}>Detail</Link>
                </div>
                <div style={{ padding: '5px', marginBottom: '5px' }}>
                    <Link to={`/savantmusic/${this.state.track._id}/edit`} style={{textDecoration: 'none'}}>Edit</Link>
                </div>
                <div style={{ padding: '5px' }}>
                    <Link onClick={
                        () => this.props.onDelete(this.state.track)
                    } style={{textDecoration: 'none'}} to={"/"}>Delete</Link>
                </div>
            </div>
        )
    }
}