import React from 'react'
class App extends React.Component {
// eslint-disable-next-line no-useless-constructor
constructor()
{
    super();
    this.state = {nom:'Dabbek',
prenom:'',
age:''
}

}
onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    };
render()
{
    return(
        <>
        <h2>Bienvenu {this.state.nom+' '+this.state.prenom}</h2>
        <br></br>
        le double de votre age est {this.state.age*2}
        <br></br>
        Nom:<input name="nom" type="text" value={this.state.nom} onChange={this.onChange}></input>
        <br></br>
        Prenom:<input name="prenom" type="text" value={this.state.prenom} onChange={this.onChange}></input>
        Age:<input name="age" type="text" value={this.state.age} onChange={this.onChange}></input>
        </>
    )
}


}
export default App;
