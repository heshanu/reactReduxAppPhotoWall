import React, { Component } from "react";
import Title from "../Components/Title";
import Photowall from "../Components/Photowall";
import PropTypes from "prop-types";
import AddPhoto from "../Components/AddPhoto";
import { Route,Routes} from "react-router-dom";
class Main extends Component {
  
  //added state
  constructor() {
    super();
    this.state = {
      posts: [
        {
          id: "0",
          description: "beautiful landscape",
          imageLink:
            "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
            "3919321_1443393332_n.jpg",
        },
        {
          id: "1",
          description: "Aliens???",
          imageLink:
            "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg",
        },
        {
          id: "2",
          description: "On a vacation!",
          imageLink:
            "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg",
        },
      ],
      screen: "photos", //photos add photos
    };
    this.removePhoto = this.removePhoto.bind(this);
    this.navigate = this.navigate.bind(this);
  }

  //update state
  removePhoto(postRemoved) {
    console.log(postRemoved.description);
    this.setState((state) => ({
      posts: state.posts.filter((post) => post !== postRemoved),
    }));
  }

  navigate() {
    this.setState({
      screen: "AddPhoto",
    });
  }

  componentDidUpdate(prevProps, prevState) {
    alert("re-render");
    console.log(prevState.posts);
    console.log(this.state);
  }

  addPhoto(postSubmitted){
    this.setState(state=>({
      posts:state.posts.concat([postSubmitted])
    }));
  }
  //lifecycle
  // componentDidMount() {
  //   const data = SimulationFromDB();
  //   this.setState({
  //     posts: data,
  //   });
  //   console.log("component didmount");
  // }

  // componentDidUpdate() {
  //   alert("rerender");
  // }

  render() {
    return (<div><Routes>
      <Route exact path="/" element={
        <React.Fragment>
          <Title title="PhotoWall" />
              <Photowall
                posts={this.state.posts}
                onRemovePhoto={this.removePhoto}
                onNavigate={this.navigate}
              />
        </React.Fragment>
      }/>
            
        <Route path="/AddPhoto" element={<AddPhoto onAddPhoto={(addedPost)=>{
          //console.log(addedPost);
          this.addPhoto(addedPost);
          window.location ="/"; 
          
        }}/>}/>
      </Routes>
      </div>
    )
  }
}


Photowall.propTypes = {
  posts: PropTypes.array.isRequired,
  onRemovePhoto: PropTypes.func.isRequired,
};

export default Main;
