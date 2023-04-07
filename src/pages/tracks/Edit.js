import React from 'react';

export default class Edit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            track: null,
        }
    }

    async componentDidMount() {
        const { id } = this.props.match.params;

        const res = await fetch(`http://145.24.222.56:8000/savantmusic/${id}`,{
            method: 'GET',
            cache: 'no-cache',
            mode: 'cors',
            headers: {
                'Accept': 'application/json'
            },
        });
        const track = await res.json()

        this.setState({
            loading: true,
            id: track._id,
            SongName: track.SongName,
            Album: track.Album,
            MyRating: track.MyRating
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        fetch(`http://145.24.222.56:8000/savantmusic/${this.state.id}`, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                SongName: e.target.SongName.value,
                Album: e.target.Album.value,
                MyRating: e.target.MyRating.value
            })
        }).then(res => {
            if (res.ok) {
            }
        })
    }

    render() {
        return (
            <div>
                <h1 style={{marginLeft: '22px'}}>Edit track</h1>
                {
                    !this.state.loading ? (
                        <div>Retrieving</div>
                    ) : (
                        <form onSubmit={this.handleSubmit} style={{ padding: '10px', margin: '10px' }}>
                            <div>
                                <label style={{marginLeft: '4px'}}>Name</label>
                                <br/>
                                <input style={{ margin: '5px' }} type="text" name="SongName" value={this.state.SongName} onChange={e => this.setState({ SongName: e.target.value })} />
                            </div>
                            <div>
                                <label style={{marginLeft: '4px'}}>Album</label>
                                <br/>
                                <input style={{ margin: '5px' }} type="text" name="Album" value={this.state.Album} onChange={e => this.setState({ Album: e.target.value })} />
                            </div>
                            <div>
                                <label style={{marginLeft: '4px'}}>My rating</label>
                                <br/>
                                <input style={{ margin: '5px' }} type="text" name="MyRating" value={this.state.MyRating} onChange={e => this.setState({ MyRating: e.target.value })}/>
                            </div>
                            <input style={{ borderRadius: '5px', marginTop: '10px', marginLeft: '4px' }} type="submit" value="Edit"/>
                        </form>
                    )
                }
            </div>
        )
    }
}