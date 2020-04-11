import { Avatar, Divider } from 'antd'
import { GithubOutlined, QqOutlined, WechatOutlined } from "@ant-design/icons";
import '../pages/style/components/author.css'
const Author = () => {
    return (
			<div className="author-div comm-box">
				<div>
                <Avatar size={100} src="" />
				</div>
				<div className="author-introduction">
					前端程序员：热爱web技术
					<Divider>社交帐号</Divider>
					<Avatar size={28} icon={<GithubOutlined />} className="account" />
					<Avatar size={28} icon={<QqOutlined />} className="account" />
					<Avatar size={28} icon={<WechatOutlined />} className="account" />
				</div>
			</div>
		);
}

export default Author; 