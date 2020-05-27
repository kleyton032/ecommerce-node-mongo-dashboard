import React from 'react';

class Dashboard extends React.Component {
    render(){
        return(
            <div className="flex horizotal">
                <div className="flex vertical">
                    <p>Menu</p>
                </div>
                <div className="flex vertical">
                    <div className="flex horizotal">
                        barra topo
                    </div>
                    <div className="flex">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;