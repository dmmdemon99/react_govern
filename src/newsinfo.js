import React from 'react';
import fetch from 'node-fetch';
export default class Newsinfo extends React.Component{
    constructor(props){
        super(props);
        this.state={p:null,load:false}
    }
    componentDidMount(){
        this.contentInfo();

    }
    contentInfo(){
        fetch("http://www.qhdlink-student.top/student/newsinfo.php",{
            method:'POST',
            headers:{"Content-Type":"application/x-www-form-urlencoded"},
            body:"username=" + window.localStorage.getItem('username') + "&&userpwd=" + window.localStorage.getItem('userpwd') + "&&userclass=" + window.localStorage.getItem('userclass') + "&&type=2"+"&&m="+this.props.location.state
        }).then((res)=>res.json()).then((json)=>{console.log(json);this.setState({p:json,load:true})}).catch((e)=>{alert(e)});

    }
    render(){
        if(this.state.load){
            {for(let value in this.state.p){
               return(
                   <div>
                   <h1>
                       {this.state.p[value].title_news}
                   </h1>
                      <div dangerouslySetInnerHTML={{ __html:this.state.p[value].info_news}}></div>

                   </div>
               )
            }}

        }else{
            return (
                <div>页面加载中....</div>)
        }
    }
}