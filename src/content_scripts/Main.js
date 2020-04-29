import React, { Component } from 'react'
import Footer from './Footer'

export default class Main extends Component {
    render() {
        const { query } = this.props
        console.log(query)
        return (
            <div className="widget-container" style={styles.main}>
                
                <Footer />
            </div>
        )
    }
}

const styles = {
    main: {
        padding: '30px 20px'
    }
}