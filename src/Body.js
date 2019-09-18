import React,{Component} from 'react'

export default class Body extends Component {
    render () {
        return(
            <div>
                <h1>Body</h1>
                <h2>aaaa</h2>
                {this.props.object.map(el=><div>
                    {el.name}
                </div>)}

            </div>
            
        )
    }
}
