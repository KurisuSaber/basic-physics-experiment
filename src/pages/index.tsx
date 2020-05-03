import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Calc1051 from './1051'
import AboutUs from './AboutUs'
import {Divider, Layout, Menu, Empty} from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined, LineChartOutlined, WechatOutlined} from '@ant-design/icons';
import Router from './Router';
import {
    ThunderboltOutlined,
    BulbOutlined,
    BgColorsOutlined,
    PlusCircleOutlined
} from '@ant-design/icons';
import './App.css';
import OilDrop from './OilDrop';

const { Header, Sider, Content, Footer} = Layout;
const { SubMenu } = Menu;



export default () => {
    //const[collapsed,setCollapsed] = useState(false);
    const[theme,setTheme] = useState("dark");
    const[current,setCurrent] = useState('oildrop');

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
        if(current === 'aboutus'){
            return <AboutUs />
        }else if(current === 'oildrop'){
            return <OilDrop />
        }else{
            return <Empty />
        }
    }

    const renderTitle=() => {
        if(current === 'aboutus'){
            return <div>关于我们</div>
        }else if(current === 'oildrop'){
            return <div>密立根油滴实验</div>
        }else{
            return <div>在做了在做了.jpg</div>
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
            <Menu.Item
                key="1091"
            >
                <PlusCircleOutlined />
                <span>1091迈克尔逊</span>
            </Menu.Item>
            <Menu.Item
                key="oildrop"
            >
                <BgColorsOutlined />
                <span>密立根油滴实验</span>
            </Menu.Item>
            <Menu.Item
                key="aboutus"
            >
                <WechatOutlined />
                <span>关于我们</span>
            </Menu.Item>
            </Menu>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
      <Header className="site-layout-background" style={{ textAlign: "center", fontSize: '16px'}}>
                {renderTitle()}
      </Header>
      <Content style={{ margin: '24px 16px 0', overflow: 'initial'}}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 500}}>
                {renderContent()}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Save Your FundamentalPhysicsExperiment😁 ©2020 Created by thy and JUANR</Footer>
    </Layout>
      </Layout>
    );
};