import React  from 'react'
class Header extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(

            <div>

                {this.props.object.map((el,index)=><div >
                    <h1>{el.name}</h1>
                    <h2>{el.age && el.age.map((el,index)=><p>{el.num}</p>)}</h2>
                </div>

                )}
                <h1>
                    Header
                </h1>
            </div>
        )

    }
}
export default Header;