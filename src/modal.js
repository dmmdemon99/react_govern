import { Modal, Button } from 'antd';
import React from 'react';
import '../node_modules/antd/dist/antd.min.css';
export class App extends React.Component {
    state = { visible: false }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showModal} style={{marginTop:'10px'}}>
                    Open Modal
                </Button>
                <Modal

                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    {this.props.content.map((value,index)=>{
                        return <div key={index}>
                        <span>{value.type} : </span>
                            <span>{value.url}</span>
                        </div>
                    })}

                </Modal>
            </div>
        );
    }
}