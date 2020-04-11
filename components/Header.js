import React from 'react'
import '../pages/style/components/header.css'
import { Row, Col, Menu } from 'antd'
import {
	HomeOutlined,
	SmileOutlined,
	ProfileOutlined,
} from "@ant-design/icons";

const Header = () => (
	<div className="header">
		<Row type="flex" justify="center">
			<Col xs={24} sm={24} md={10} lg={15} xl={11}>
				<span className="header-logo">zxiaoqi</span>
				<span className="header-txt">博客</span>
			</Col>
			<Col xs={0} sm={0} md={14} lg={8} xl={6}>
				<Menu mode="horizontal">
					<Menu.Item key="home">
						<HomeOutlined />
						首页
					</Menu.Item>
					<Menu.Item key="article">
						<ProfileOutlined />
						文章
					</Menu.Item>
					<Menu.Item key="life">
						<SmileOutlined />
						生活
					</Menu.Item>
				</Menu>
			</Col>
		</Row>
	</div>
);

export default Header