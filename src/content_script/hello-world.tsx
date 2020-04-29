import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash'

type State = {
    hover: boolean
}

class HelloWorld extends React.Component<{}, State, string> {
    constructor(props: any) {
        super(props);
        const finalMouseDelay = props.mouseDelay || 3000;

        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.toggleHover = _.debounce(this.toggleHover.bind(this), finalMouseDelay);

        this.state = { hover: false };
    }
    handleMouseLeave() {
        console.log('handleMouseLeave');
        this.toggleHover(false);
    }

    handleMouseEnter() {
        console.log('handleMouseEnter');
        this.toggleHover(true);
    }

    toggleHover(to: any) {
        console.log('toggle from', this.state.hover, 'to', to);
        this.setState({ hover: to }); //!this.state.hover
    }
    render() {
        return (
            <div onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                Hello, React!
            </div>
        )
    }
    componentDidMount() {
        document.onselectionchange = function (ev) {
            console.log(document.getSelection()?.toString());
        }
    }
};

export default HelloWorld;