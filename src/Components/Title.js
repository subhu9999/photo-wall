import React,{Component} from 'react';
import { Link } from 'react-router-dom';

class Title extends Component{
    render(){
            return (
                <Link to="/" className="link">
                    <h1>{this.props.title}</h1>
                </Link>
            )
    }
        
}
 

export default Title;