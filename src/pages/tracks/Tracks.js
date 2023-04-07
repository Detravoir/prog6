import React from 'react';
import Item from '../../components/Item';

export default class Tracks extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tracks: null
        };

        this.handleDelete = this.handleDelete.bind(this);
    }

    async componentDidMount() {
        
        const res = await fetch('http://145.24.222.56:8000/savantmusic', {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Accept': 'application/json',
        }});
        const data = await res.json();
        
        this.setState({ 
            tracks: data['items']
        })
    }

    handleDelete = track => {
        const trackId = track._id;
        const tracks = this.state.tracks;

        fetch(`http://145.24.222.56:8000/savantmusic/${trackId}`, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (res.ok) {
            }
        });

        this.setState({
            tracks: tracks.filter(track => track._id !== trackId)
        });
    };

    render() {
        return (
            <div>
                <h1 style={{marginLeft: '21px'}}>Savant tracks</h1>
                {
                    !this.state.tracks ? (
                        <div>Retrieving</div>
                    ) : (
                        <div>
                            {
                                this.state.tracks.map(track => <Item onDelete={this.handleDelete} key={track._id} track={track}></Item>)
                            }
                        </div>
                    )
                }
            </div>
        )
    }
}