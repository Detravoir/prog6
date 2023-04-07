import React from 'react';

export default class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        fetch('http://145.24.222.56:8000/savantmusic/', {
            method: 'POST',
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
    };

    render() {
        return (
            <div>
                <h1 style={{ marginLeft: '22px' }}>Add new Song</h1>
                <form onSubmit={this.handleSubmit} style={{ display: 'inline-block', padding: '10px', margin: '10px' }}>
                    <div>
                        <label>Name</label>
                        <br/>
                        <input style={{ margin: '10px' }} type="text" name="SongName"/>
                    </div>
                    <div>
                        <label>Album</label>
                        <br/>
                        <textarea style={{ margin: '10px' }} type="text" name="Album"/>
                    </div>
                    <div>
                        <label>My Rating</label>
                        <br/>
                        <input style={{ margin: '10px' }} type="text" name="MyRating"/>
                    </div>
                    <input style={{ margin: '10px' }} type="submit" value="Create"/>
                </form>
            </div>
        )
    }
}