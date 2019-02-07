import React, { Component } from 'react';
import './Commentaire.css'

class Commentaire extends Component {
    
    render() {
        const publi = this.props.publi;
        const liked = this.props.liked;
        const nb_likes = this.props.nb_likes;
        return (
            <center>
                <div className="block_commentaire">
                    <p>{publi}</p>
                    <br/>
                    <button className="button-like" onClick={liked}>C'est Super !</button>
                    <p>{nb_likes}</p>
                </div>
            </center>
        );
    }
}
export default Commentaire;