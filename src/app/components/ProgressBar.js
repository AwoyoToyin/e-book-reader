import React from 'react'
import { ProgressBarAndroid, ProgressViewIOS, Platform } from 'react-native'

class ProgressBar extends React.Component {
    state = {
        progress: this.props.initialProgress,
    }

    // to avoid setState warning message
    mounted = false

    componentDidMount() {
        this.mounted = true
        this.progressLoop()
    }

    componentWillUnmount() {
        this.mounted = false
    }

    progressLoop() {
        setTimeout(() => {
            if (this.mounted) {
                this.setState({
                    progress: this.state.progress === 1 ? 0 : Math.min(1, this.state.progress + 0.01),
                })
                this.progressLoop()
            }
        }, 17 * 2)
    }

    render() {
        if (Platform.OS === 'ios') {
            return (
                <ProgressViewIOS
                    style={this.props.style}
                    progressTintColor={this.props.progressTintColor}
                    progress={this.state.progress}
                />
            )
        } else {
            return (
                <ProgressBarAndroid
                    styleAttr='Horizontal'
                    style={this.props.style}
                    color={this.props.progressTintColor}
                    progress={this.state.progress}
                />
            )
        }
    }
}

export default ProgressBar
