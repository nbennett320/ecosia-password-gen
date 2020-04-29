import React, { Component } from 'react'
import Password from './Password'
import Footer from './Footer'

export default class Main extends Component {
    render() {
        const { pword } = this.props
        return (
            <div className="widget-container" style={styles.main}>
                <Password pword={pword} />
                <Footer />
            </div>
        )
    }
}

const styles = {
    main: {
        padding: '0'
    }
}