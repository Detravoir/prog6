import React from 'react';

export default class Show extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            track: null
        };
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        
        const uri = `http://145.24.222.56:8000/savantmusic/${id}`;
        const res = await fetch(uri,{
            method: 'GET',
            cache: 'no-cache',
            mode: 'cors',
            headers: {
            'Accept': 'application/json',
    }});
        
        this.setState({
            track: await res.json()
        })
    }
    render() {
        return (
            <div> 
                {
                    !this.state.track ? ( 
                        <div>Retrieving</div>
                    ) : (
                        <div>
                            <h1 style={{marginLeft: '22px'}}>Song name: {this.state.track.SongName}</h1>
                            <table style={{marginLeft: '22px'}}>
                                <td>
                                    <tr style={{fontWeight: 'bold'}}>Album: {this.state.track.Album}</tr>
                                    <br/>
                                    <tr style={{fontWeight: 'bold'}}>My rating: {this.state.track.MyRating}</tr>
                                </td>
                            </table>
                        </div>
                    )
                }
            </div>
        )
    }
}