import Head from "next/head";
import { Row, Col, Breadcrumb, Affix } from "antd";
import '../pages/style/pages/detail.css'
import Header from "../components/Header";
import Author from "../components/Author";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import {
	CalendarOutlined,
	FireOutlined,
	ProfileOutlined,
} from "@ant-design/icons";
import ReactMarkdown from "react-markdown";
import MarkdownNavbar from "markdown-navbar";
import "markdown-navbar/dist/navbar.css";

const detail = () => { 

	let markdown =
	"# p01:课程介绍和环境搭建\n" +
	"[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n" +
	"> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n" +
	"**\*\*\*\*\这是加粗的文字**\n\n" +
	"*这是倾斜的文字*`\n\n" +
	"***这是斜体加粗的文字***\n\n" +
	"~~这是加删除线的文字~~ \n\n" +
	"`console.log(111)` \n\n" +
	"# p02:来个Hello World 初始Vue3.0\n" +
	">>> cccccccccc\n" +
	"***\n\n\n" +
	"# p03:Vue3.0基础知识讲解\n" +
	"> aaaaaaaaa\n" +
	"# p04:Vue3.0基础知识讲解\n" +
	">>> cccccccccc\n\n" +
	"# p05:Vue3.0基础知识讲解\n" +
	">>> cccccccccc\n\n" +
	"# p06:Vue3.0基础知识讲解\n" +
	">>> cccccccccc\n\n" +
	"# p07:Vue3.0基础知识讲解\n" +
	">>> cccccccccc\n\n" +
	"``` var a=11; ```" +
	"&copy";
	return (
		<div className="container">
			<Head>
				<title>detail</title>
			</Head>
			<Header />
			<Row className="comm-main" type="flex" justify="center">
				<Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
					<div className="bread-div">
						<Breadcrumb>
							<Breadcrumb.Item>
								<a href="/">首页</a>
							</Breadcrumb.Item>
							<Breadcrumb.Item>文章详情</Breadcrumb.Item>
						</Breadcrumb>
					</div>
					<div>
						<div className="detailed-title">第一篇文章</div>
						<div className="list-icon center">
							<span>
								<CalendarOutlined />
								2020-04-11
							</span>
							<span>
								<ProfileOutlined />
								文章
							</span>
							<span>
								<FireOutlined />
								2313人
							</span>
						</div>
						<div className="detailed-content">
							<ReactMarkdown source={markdown} escapeHtml={false} />
						</div>
					</div>
				</Col>
				<Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
					<Author />
					<Advert />
					<Affix offsetTop={5}>
						<div className="detailed-nav comm-box">
							<div className="nav-title">文章目录</div>
							{/*有坑，无法显示第一个标题*/}
							<MarkdownNavbar
								className="article-menu"
								source={markdown}
								ordered={false}
							/>
						</div>
					</Affix>
				</Col>
			</Row>
			<Footer />
		</div>
	);
}

export default detail;
