import React from 'react';
//Function based component
// let MyComp =() =>{
//     return(
//         <div>
//             <h1>My Skills</h1>
//             <p>Web Dev</p>
//             <ul>
//                 <li>HTML/CSS</li>
//                 <li>Js</li>
//                 <li>React Js</li>
//             </ul>
//         </div>
//     )
// }

//Class Based Component
class MyComp extends React.Component{

    state= {
        SomeNum :0,
    }

    render =() =>{
        return (
            <div>
                {/* <h1>Hello let's increment number</h1> */}
                <button onClick={()=>{
                    this.setState({SomeNum: this.state.SomeNum +1 })
                }
                }>
                Click Me for incrementing
                </button>
                <h1> {this.state.SomeNum} </h1>
                <button onClick={()=>{
                    this.setState({SomeNum: this.state.SomeNum - 1 })
                }
                }>
                Click Me for decrementing
                </button>
            </div>
        )
    }
}

export default MyComp;