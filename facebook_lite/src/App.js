import React, { Component } from 'react';
import './App.css';
import Button from './Composants/Button/Button';
import Profil from './Composants/Profil/Profil';
import Commentaire from './Composants/Commentaire/Commentaire';
// Photos de profils
import jeanne from './Composants/Profil/jeanne.png';
import martine from './Composants/Profil/martine.png';
import claude from './Composants/Profil/claude.png';
import './Composants/Profil/profil.css';

class App extends Component {
  state = {
    persons: [
      {firstname: "Jeanne", lastname: "Moretti", birth: "27/03/1978", likes: 0},
      {firstname: "Martine", lastname: "Maillard", birth: "12/07/1984", likes: 0},
      {firstname: "Claude", lastname: "LePont", birth: "09/01/1965", likes: 0}
    ],
    commentaires: [
      {publication: "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character. I have a dream ... "},
      {publication: "…we shall defend our Island, whatever the cost may be, we shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields and in the streets, we shall fight in the hills; we shall never surrender"},
      {publication: "We choose to go to the moon. We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills"}

    ],
    show_jeanne: false,
    show_martine: false,
    show_claude: false,
    likes_jeanne: 0,
    likes_martine: 0,
    likes_claude: 0
  }

  // jeanne_profil = () => {
  //   const doesShow = [...this.state.persons]
  //   doesShow[0].show = true;
  //   this.setState({persons: doesShow})
  // }
  jeanne_profil = () => {
    const doesShow = this.state.show_jeanne;
    this.setState({show_jeanne: !doesShow})
    this.state.show_martine = false;
    this.state.show_claude = false;
  }
  martine_profil = () => {
    const doesShow = this.state.show_martine;
    this.setState({show_martine: !doesShow})
    this.state.show_jeanne = false;
    this.state.show_claude = false;
  }
  claude_profil = () => {
    const doesShow = this.state.show_claude;
    this.setState({show_claude: !doesShow})
    this.state.show_jeanne = false;
    this.state.show_martine = false;
  }  
  nb_likes_jeanne = () => {
    this.setState({likes_jeanne: this.state.likes_jeanne + 1})
  }
  nb_likes_martine = () => {
    this.setState({likes_martine: this.state.likes_martine + 1})
  }
  nb_likes_claude = () => {
    this.setState({likes_claude: this.state.likes_claude + 1})
  }

  render() {
    let profil = null;

    if(this.state.show_jeanne) {
      profil = (
        <div>
          <div>
            <Profil
              pp = {jeanne}
              firstname={this.state.persons[0].firstname} 
              lastname={this.state.persons[0].lastname} 
              birth={this.state.persons[0].birth}
            />
            </div>
            <Commentaire 
            publi={this.state.commentaires[0].publication}
            liked={this.nb_likes_jeanne}
            nb_likes={this.state.likes_jeanne}
            />
        </div>
      )
    }
    if(this.state.show_martine) {
      profil = (
        <div>
          <Profil 
            pp = {martine}
            firstname={this.state.persons[1].firstname} 
            lastname={this.state.persons[1].lastname} 
            birth={this.state.persons[1].birth}
          />
          <Commentaire 
            publi={this.state.commentaires[1].publication}
            liked={this.nb_likes_martine}
            nb_likes={this.state.likes_martine}
          />
        </div>
      )
    }
    if(this.state.show_claude) {
      profil = (
        <div>
          <Profil 
            pp = {claude}
            firstname={this.state.persons[2].firstname} 
            lastname={this.state.persons[2].lastname} 
            birth={this.state.persons[2].birth}
          />
          <Commentaire 
            publi={this.state.commentaires[2].publication}
            liked={this.nb_likes_claude}
            nb_likes={this.state.likes_claude}
          />
        </div>
      )
    }
    return (
      <div>
        <div className="rightside">
          <Button clicked={this.jeanne_profil} firstname={this.state.persons[0].firstname}/>
          <Button clicked={this.martine_profil} firstname={this.state.persons[1].firstname}/>
          <Button clicked={this.claude_profil} firstname={this.state.persons[2].firstname}/>
        </div>
        <main>
          {profil}
        </main>
      </div>
    );
  }
}

export default App;
