
import React from 'react';
import 'whatwg-fetch';
import { Link } from 'react-router-dom';
import { Row, Col, Input, Icon, Cascader, DatePicker, Button, Tooltip, Popconfirm } from 'antd';

const Search = Input.Search;
const border={
    margin:20
}
const fontS={
    textOverflow:'ellipsis',
     overflow:'hidden',
      whiteSpace:'nowrap', 
    width:260, 
    display:'inline-block'   
}
const fontL={
    marginLeft:20,
    display:'inline-block' 
}
export default class UForm extends React.Component{
	constructor(props){
        super(props);
        this.state={ts:null,m:false,msg:[], newData: ''}
    }
   
    getSearch=(key)=>{
        let newts;
        console.log(this.state.ts);
        let temp=Object.values(this.state.ts);
        console.log("信息0"+temp);
        this.setState({msg:temp})
        console.log("信息"+this.state.msg);
        newts = this.state.msg.filter(function(item,index){
         if(item.title_news.indexOf(key)!=-1){
             console.log("显示"+item);
             return item;
         }else{
             return false
         }
         }),      
     this.setState({newts:newts}) 
     console.log("新结果"+newts)   ;      
    }

componentDidMount(){
    this.contentInfo();
}
    contentInfo() {
        fetch("http://www.qhdlink-student.top/student/newsa.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",

            },
            body:  "username=" + window.sessionStorage.getItem('username') + "&&userpwd=" + window.sessionStorage.getItem('userpwd') + "&&userclass=" + window.sessionStorage.getItem('userclass') + "&&type=2"
        }).then((res)=>res.json()).then((json)=>{
            this.setState({ts:json,m:true});
            console.log(this.state.ts);
        })
            /*.catch((e)=>{console.log(e);});*/
    }


    render(){
        return(
            <div>
            <Search
                placeholder="input search text"
                enterButton="Search"
                size="large"
                onSearch={value => this.getSearch(value)}
            />
            <ul style={border}>
            {this.state.m?Object.keys(this.state.newts?this.state.newts:this.state.ts).map(key => {return <li style={border} >
                {/* console.log(this.state.ts[key]) */}
            <span style={fontS}>{this.state.ts[key].title_news}</span>
            <span style={fontL}>{this.state.ts[key].time_news}</span>
            <Link to={{pathname:'/app/banner/detail',state:this.state.ts[key].id_news}} style={fontL}><span>查看详情</span></Link>
            
            </li>;}):"没加载"}
        </ul>
        </div>
        )
    }
}


// import React from 'react';
// import 'whatwg-fetch';
// import { Link } from 'react-router-dom';
// import { Row, Col, Input, Icon, Cascader, DatePicker, Button, Tooltip, Popconfirm } from 'antd';

// const Search = Input.Search;
// const border={
//     margin:20
// }
// const fontS={
//     textOverflow:'ellipsis',
//      overflow:'hidden',
//       whiteSpace:'nowrap', 
//     width:260, 
//     display:'inline-block'   
// }
// const fontL={
//     marginLeft:20,
//     display:'inline-block' 
// }
// export default class UForm extends React.Component{
// 	constructor(props){
//         super(props);
//         this.state={ts:null,m:false, newData: ''}
//     }
//     componentDidMount(){
//         this.contentInfo();
//     }
//     getSearch=(key)=>{
//         let newts;
//         newts = this.state.ts.filter(function(item,index){
//          if(item.title_news.indexOf(key)!=-1){
//              return true
//          }else{
//              return false
//          }
//          })
         
//      this.setState({newts:newts})          
//     }

      
//     contentInfo() {
//         fetch("http://www.qhdlink-student.top/student/newsa.php", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/x-www-form-urlencoded",

//             },
//             body:  "username=" + window.sessionStorage.getItem('username') + "&&userpwd=" + window.sessionStorage.getItem('userpwd') + "&&userclass=" + window.sessionStorage.getItem('userclass') + "&&type=2"
//         }).then((res)=>res.json()).then((json)=>{
//             this.setState({ts:json,m:true});
//             console.log(this.state.ts);
//         })
//             /*.catch((e)=>{console.log(e);});*/
//     }


//     render(){
//         return(
//             <div>
//             <Search
//                 placeholder="input search text"
//                 enterButton="Search"
//                 size="large"
//                 onSearch={value => this.getSearch(value)}
//             />
//             <ul style={border}>
//             {this.state.m?Object.keys(this.state.ts).map(key => {return <li style={border} >
//                 {/* console.log(this.state.ts[key]) */}
//             <span style={fontS}>{this.state.ts[key].title_news}</span>
//             <span style={fontL}>{this.state.ts[key].time_news}</span>
//             <Link to={{pathname:'/app/banner/detail',state:this.state.ts[key].id_news}} style={fontL}><span>查看详情</span></Link>
            
//             </li>;}):"没加载"}
//         </ul>
//         </div>
//         )
//     }
// }

