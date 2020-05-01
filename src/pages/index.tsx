import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Calc1051 from './1051'
import {Divider, Layout, Menu, Switch,} from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined, LineChartOutlined} from '@ant-design/icons';
import Router from './Router';
import {
    ThunderboltOutlined,
    BulbOutlined
} from '@ant-design/icons';
import './App.css';

const { Header, Sider, Content, Footer} = Layout;
const { SubMenu } = Menu;



export default () => {
    //const[collapsed,setCollapsed] = useState(false);
    const[theme,setTheme] = useState("dark");
    const[current,setCurrent] = useState('1051');

    const changeTheme=() => {
      setTheme(theme === "light" ? "dark":"light");
    };

    const handleClick = (e: any) => {
      console.log('click ', e);
      setCurrent(e.key);
    };

    // const toggle = () => {
    //     setCollapsed(!collapsed);
    // }

    const renderContent=() => {
        if(current == '1051'){
            return <Calc1051/>
        }
    }

    const renderTitle=() => {
        if(current == '1051'){
            return <div>1051 电位计</div>
        }
    }

    return (
        <Layout>
        <Sider trigger={null} collapsible theme={theme === 'dark' ? 'dark':'light'} 
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
            }}
        className='sider'>
            <div className="logo" />
            <Menu
            theme={theme === 'dark' ? 'dark':'light'}
            onClick={handleClick}
            defaultOpenKeys={['sub1']}
            selectedKeys={[current]}
            mode="inline"
            >
            <Menu.Item
                key="1031"
            >
                <LineChartOutlined />
                <span>1031示波器</span>
            </Menu.Item>
            <Menu.Item
                key="1051"
            >
                <ThunderboltOutlined />
                <span>1051电位计</span>
            </Menu.Item>
            <Menu.Item
                key="1071"
            >
                <BulbOutlined />
                <span>1071分光仪</span>
            </Menu.Item>
            </Menu>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
      <Header className="site-layout-background" style={{ textAlign: "center" }}>
                {renderTitle()}
      </Header>
      <Content style={{ margin: '24px 16px 0', overflow: 'initial'}}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 500}}>
                {renderContent()}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Save Your BPE ©2020 Created by thy</Footer>
    </Layout>
      </Layout>
    );
};