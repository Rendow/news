import { HeartTwoTone, ShareAltOutlined } from "@ant-design/icons";
import { Badge, Button, Card, Col, Descriptions, Row, Space, Typography } from "antd";
import { memo } from "react";
import EventCardPie from "./EventCardPie";

const iconStyle = { fontSize: 20 }
const btnStyle = { borderRadius: 5 }
const { Text } = Typography;

const Header = memo(({title, onShare, badge}) => {
	return (
		<Row align="middle" justify="space-between">
			<Col span={21}>
				<Row align="middle" justify="start">
					<h3 style={{wordBreak: 'break-word'}}>{title}</h3>
					{badge && <Badge status="processing" style={{margin: '0 0 6px 10px'}}/>}
				</Row>
			</Col>
			<Col span={3}>
				<Row align="top" style={{ marginTop: '-6px'}}>
					<Button 	
						icon={
							<ShareAltOutlined style={iconStyle} />
						}
						shape="circle"				
						onClick={onShare}  
						style={{border:'none'}}
					/>		
				</Row>
			</Col>			 
		</Row>
	)
});

const Description = memo(({text, title}) => {
	return (
		<div style={{display:'flex', flexDirection:'column'}}>
			<Text type="secondary" style={{textAlign: 'start'}}>{title}</Text>
			<Text type="success" style={{textAlign: 'start'}}>{text}</Text>
		</div>
	)
});

const Footer = memo((
	onMore,
	onRemove,
	onLike,
) => {
	return (
		<Row  justify="space-between"  style={{ marginTop: '14px'}}>
			<Row gutter={16}>
				<Col>
					<Button onClick={onMore} type='primary' style={btnStyle}> More info </Button>
				</Col>
				<Col>
					<Button onClick={onRemove} danger style={btnStyle}>  Remove </Button>
				</Col>
			</Row>
			<Row>
				<Button 	
					icon={
						<HeartTwoTone 
							twoToneColor="#eb2f96"  
							style={iconStyle}
						/> 
					}
					shape="circle"				
					onClick={onLike} 
					style={{border:'none'}}
				/>
			</Row>
		</Row>
	)
});


const EventCard = ({children}) => {
	const styles = { borderRadius:20, maxWidth:340 , minWidth:240}
	return (
		<Card className="eventCard" style={styles}  hoverable>
			{children}
		</Card>
	);	
};

EventCard.Header = Header
EventCard.Description = Description
EventCard.Footer = Footer
EventCard.EventCardPie = EventCardPie

export default EventCard