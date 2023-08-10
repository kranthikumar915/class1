import React,{Component} from "react";

const x =123
const title = 'welcome to react'
const isView = false
const users = ['kranthi', 'krishna','umesh','balu']
const emp = {
    id : 123,
    name: 'kranthi',
    email: 'rcbkranthi@gmail.com'
}

class Ex7 extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h1>variable and data binding in class componenet</h1>
              
        <h4> x= {x}</h4>
         <h3>boolean= {isView ? 'say True' : 'say False'}</h3>
         <hr />
         <div>
            {isView ? <h1>True</h1> : <h1>False</h1>}
         </div>
         <hr/>
         <ul>
            {
                users.map((item,index) => {
                    return (
                        <li key={index}>{index} {item}</li>
                    )
                })
            }
         </ul>
         <hr/>

         <h3>emp id  = {emp.id}</h3>
         <h3>emp name  = {emp.name}</h3>
         <h3>emp email  = {emp.email}</h3>
            </div>
        )
    }
}
export default Ex7