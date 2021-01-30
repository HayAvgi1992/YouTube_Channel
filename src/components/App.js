import React from 'react';
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetails from './VideoDetails';

class App extends React.Component {
    state = {videos: [], videoSelect: null}
    
    onVideoSelect = (video) => {
        this.setState({videoSelect: video})
    }

    componentDidMount = () => {
        this.onTermSubmit('buildings')
    }

    
    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        this.setState({
            videos:response.data.items,
            videoSelect: response.data.items[0]
        })
    }
    
    render() {
        return (
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetails video={this.state.videoSelect}></VideoDetails>
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default App
