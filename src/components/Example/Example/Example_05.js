import React from 'react';
import {Tabs} from 'antd';
import { useNavigate } from "react-router-dom";

const {TabPane} = Tabs;
const TabExample = () => {
    let navigate = useNavigate();
    const handleChange = (value) => {
       navigate(`/${value}`);
    }
    return (
        <Tabs defaultActiveKey='1' onChange={handleChange} centered>
            <TabPane tab="Table" key="table">
             Content of Tab pane 1
            </TabPane>
            <TabPane tab="Grid" key="grid">
                Content of Tab pane 2
            </TabPane>
            <TabPane tab="Layout" key="layout">
                Content of Tab pane 3
            </TabPane>
        </Tabs>
    );
};
export default TabExample;