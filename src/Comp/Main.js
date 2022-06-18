import {React,Component} from "react";
import Title from './Title';
import List from './Lists';

class Main extends Component {
    render() {
      return (
        <div>
          <Title title='TOdoList'/>
          <List tasks={['dance','drink','sleep']} />
          <List tasks={['dancing','drinking','sleeping']} />
        </div>
      );
    }
  }

  export default Main;