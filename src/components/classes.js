import React from "react"
class JXS extends React.Component{
    constructor (props) {
        super(props)
        this.handleAddition = this.handleAddition.bind(this)
        this.handleSubtraction = this.handleSubtraction.bind(this)
        this.handleReset= this.handleReset.bind(this)
        this.state = {
            count: 0,
        }
    }
    handleAddition() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }
    handleSubtraction() {
        this.setState((prevState) => {
            return {
                count : prevState.count -1
            }
        })
    }
    handleReset() {
        this.setState((prevState) => {
            return {
                count : 0
            }
        })
    }
    render() {
        return (
            <div>
                <h3>count : { this.state.count }</h3>
                <button onClick={this.handleAddition}>add</button>
                <button onClick={this.handleSubtraction}>subtract</button>
                <button onClick={this.handleReset}>reset</button>
        </div>
       )
    }

}

export default JXS