import React, { Component } from 'react'
import { IconButton } from '@material-ui/core'
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined'

export default class Password extends Component {
    handleCopy = pword => navigator.clipboard.writeText(pword)
    render() {
        const { pword } = this.props
        return (
            <div style={styles.main}>
                <span style={styles.span}>
                    {pword}

                    <IconButton style={styles.button}
                        size="medium"
                        onClick={() => this.handleCopy(pword)}
                    >
                        <FileCopyIcon />
                    </IconButton>
                </span>
            </div>
        )
    }
}

const styles = {
    main: {
        padding: '30px 10px',
        fontSize: '24px',
        color: '#4a4a4a',
        cursor: 'text'
    },

    span: {
        margin: '0 10px'
    },

    button: {
        marginLeft: '10px'
    }
}