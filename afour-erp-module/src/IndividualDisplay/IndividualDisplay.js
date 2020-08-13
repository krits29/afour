import React, {Component} from 'react';
import './IndividualDisplay.css';

class IndividualDisplay extends Component {
    state = {
        showSoft: true,
        showHard: false,
        showValue: false,
        showUp: false
    }

    resetState = () => {
        this.setState({showSoft: false});
        this.setState({showHard: false});
        this.setState({showValue: false});
        this.setState({showUp: false});
        // this.setState({
        //     showSoft: false,
        //     showHard: false,
        //     showValue: false,
        //     showUp: false
        // }, toggleTab);
    }

    toggleSoftHandler = () => {
        this.resetState();
        this.setState({showSoft: true});
    }

    toggleHardHandler = () => {
        this.resetState();
        this.setState({showHard: true});
    }

    toggleValueHandler = () => {
        this.resetState();
        this.setState({showValue: true});
    }

    toggleUpHandler = () => {
        this.resetState();
        this.setState({showUp: true});
    }

    render() {

        return(
            <div>
                <div className = "tab">
                    <button className = "tablinks" onClick = {() => {this.resetState(); this.toggleSoftHandler();}}>Soft Skills</button>
                    <button className = "tablinks" onClick = {() => {this.resetState(); this.toggleHardHandler();}}>Hard Skills</button>
                    <button className = "tablinks" onClick = {() => {this.resetState(); this.toggleValueHandler();}}>Value Addition</button>
                    <button className = "tablinks" onClick = {() => {this.resetState(); this.toggleUpHandler();}}>Up Learning</button>
                </div>

                <div id="Soft" className={this.state.showSoft ? "showcontent" : "nocontent"}>
                    <h3>Soft Skills Comments</h3>
                    <p>{this.props.softComments}</p>
                </div>

                <div id="Hard" className={this.state.showHard ? "showcontent" : "nocontent"}>
                    <h3>Hard Skills Comments</h3>
                    <p>{this.props.hardComments}</p>
                </div>

                <div id="Value" className={this.state.showValue ? "showcontent" : "nocontent"}>
                    <h3>Value Addition Comments</h3>
                    <p>{this.props.valueComments}</p>
                </div>

                <div id="Up" className={this.state.showUp ? "showcontent" : "nocontent"}>
                    <h3>Up Learning Comments</h3>
                    <p>{this.props.upComments}</p>
                </div>
            </div>
        );
    }
}

export default IndividualDisplay;