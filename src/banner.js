import React from 'react';
import fetch from 'node-fetch';
import { Upload, Icon, Modal } from 'antd';

export default class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {p: null, load: false}
    }

    componentDidMount() {
        this.contentInfo()
    }

    contentInfo() {
        if (window.localStorage.getItem('username')) {
            fetch("http://www.qhdlink-student.top/student/banner.php", {
                method: 'POST',
                headers: {"Content-Type": "application/x-www-form-urlencoded"},
                body: "username=" + window.localStorage.getItem('username') + "&&userpwd=" + window.localStorage.getItem('userpwd') + "&&userclass=" + window.localStorage.getItem('userclass') + "&&type=2"
            }).then((res) => res.json()).then(json => {
                this.setState({p: json, load: true})
            }).catch((e) => alert(e));
        } else {
            alert('请先登录');
        }
    }

    render() {
        if (this.state.load) {
            let pathBanner = "";
            let commonPath = "http://www.qhdlink-student.top/";
            let images = [];
            {
                for (let value in this.state.p) {
                    pathBanner = commonPath + this.state.p[value].path_banner;
                    console.log(pathBanner);
                    images.push(<img src={pathBanner} key={this.state.p[value].id_banner}
                                     style={{width: 360, marginLeft: 20, marginTop: 20}} alt=""/>)
                }
            }
            return (

                <div>
                    <h1>Banner查看</h1>
                    {images.map(function (value, index) {
                        return value
                    })}
                    
                </div>
            )
        } else {
            return (
                <div>数据加载中....</div>)
        }
    }
}

