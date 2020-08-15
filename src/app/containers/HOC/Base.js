import React from 'react';
import Base from '../Base';
import { getUser } from '../../actions/index';
import { connect } from 'react-redux';
import * as actions from  '../../actions';

const base = Component => {

     class ComponentBase extends React.Component {
        
        componentDidMount() {
            this.props.getUser();
          }
       
        render(){
            return (
                <Base history={this.props.history}>
                    <Component {...this.props}/>
                </Base>
            )
        }
    }
    return connect(null, actions)(ComponentBase)
}

export default base;