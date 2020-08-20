import React from 'react';
import Base from '../Base';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const base = Component => {

    class ComponentBase extends React.Component {

        componentDidMount() {
            const { getUser, authorized, history } = this.props;
            getUser();
            if (!authorized) history.replace("/login");
        }

        componentDidUpdate(nextProps) {
            const { authorized, history } = this.props;
            if (authorized && !nextProps.authorized) history.replace("/login");
        }


        render() {
            return (
                <Base history={this.props.history}>
                    <Component {...this.props} />
                </Base>
            )
        }
    }

    const mapStateToProps = state => ({
        authorized: state.auth.authorized,
        usuario: state.auth.usuario
    });

    return connect(mapStateToProps, actions)(ComponentBase)
}

export default base;