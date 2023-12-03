import React from 'react';
import ReactDOM from 'react-dom/client';
import SeasonDisplay from "./SeasonDisplay";

const root = ReactDOM.createRoot(document.getElementById('root'));
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      lat: null, errorMessage: "" ,todo: {}
    }

  }
  // state = { lat: null, errorMessage: "" };
  
  componentDidMount() {
    console.log("mycomponent rendered!")
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("Position")
        this.setState({ lat: position.coords.latitude })},
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  
  componentWillMount (){
    console.log("gdf")
      // fetch("https://jsonplaceholder.typicode.com/todos/3")
      //   .then(response => response.json())
      //   .then(json => {
      //     this.setState({ todo: json });
      //   });
  }
  // componentDidUpdate() {
  // console.log("my data updated again")
  // }

  // React says we have to define render!!
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <div>Loading!</div>;
  }
//   render() {
//     const { todo } = this.state;
//     console.log(todo)
//     return (
//       <div>
         
// <p>API call :</p>
 
 
//         Todo title :
// <p>{todo.title}</p>
 
 
//         Todo completed :
         
// <p>{todo.completed === true ? "true" :
//                             "false"}</p>
 
//       </div>
//     );
//   }
}
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


