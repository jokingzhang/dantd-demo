import React, { useState } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Switch, Route, withRouter, NavLink } from 'react-router-dom';
import NotFound from 'pages/NotFound';
import { routeCfg } from './config';
import './App.less';

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  function toggle() {
    setCollapsed(!collapsed);
  }

  return (
    <div className="App">
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="/">
              <NavLink to="/">
                <Icon type="user" />
                <span>Home</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="/comp">
              <NavLink to="/comp">
                <Icon type="video-camera" />
                <span>组件库</span>
              </NavLink>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={toggle}
            />
          </Header>
          <Content className="App-content">
            <Switch>
              {routeCfg.map(route => {
                return (
                  <Route exact={!!route.exact} component={route.component} path={route.path} />
                );
              })}
              <Route component={NotFound} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default withRouter(App);
