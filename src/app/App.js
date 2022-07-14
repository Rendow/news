import { Col, Row } from 'antd';
import './App.css';
import EventCard from './features/EventCard/EventCard';


function App() {
  return (
    <div className="appWrap">
		<Row className="app" gutter={[16,16]}>	
			<Col>
				<EventCard>
					<EventCard.Header title={'Card'} onShare={()=> {}} badge/>
					<EventCard.Description
						text={'Description'} 
						title={'Description'} 
					/>
					<EventCard.Footer 
						onLike={()=> {}}
						onMore={()=> {}}
						onRemove={()=> {}}
					/>
				</EventCard>
			</Col>
			<Col>
				<EventCard>
					<EventCard.Header title={'Card'} onShare={()=> {}} />
					<EventCard.Description
						text={'Description'} 
						title={'Description'} 
					/>
			
				</EventCard>
			</Col>
			<Col>
				<EventCard>
					<EventCard.Header title={'Card'} onShare={()=> {}} badge/>
					<EventCard.EventCardPie/>
				</EventCard>

			</Col>
			
		  </Row>
    </div>
  );
}

export default App;

