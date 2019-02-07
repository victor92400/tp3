import React, { Component } from 'react';
import './profil.css';

class Profil extends Component {

    state = {
        change_color: "" 
    }

    changeColor = () => {
        const color = this.state.change_color;
        if(color == "") {
            this.setState({change_color: "#ccffff"})
        }
        else {
            this.setState({change_color: ""})
        }
      }

  render() {

    const pp = this.props.pp;
    const firstname = this.props.firstname;
    const lastname = this.props.lastname;
    const birth = this.props.birth;

    return (
        <center>
            <div className="block" style={{backgroundColor: this.state.change_color}}>
                <img src={pp} className="photo" /> <br />
                <p className="prenom_profil">{firstname}</p>
                <p className="nom_profil">{lastname}</p>
                <p className="birth_profil">{birth}</p>
                <button onClick={this.changeColor} className="style_button draw-border">Change style</button>
            </div>
        </center>
    );
  }
}

export default Profil;
