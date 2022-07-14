import { Pie } from "@ant-design/plots";

const EventCardPie = () => {
	const data = [
	  {
		type: 'Завершено',
		value: 27,
	  },
	  {
		type: 'В ожидании',
		value: 25,
	  },

	];
	const config = {
		with: 200,
		height: 200,
		appendPadding: 10,
		data,
		angleField: 'value',
		colorField: 'type',
		radius: 1,
		innerRadius: 0.6,
		label: {
			type: 'inner',
			offset: '-50%',
			content: '{value}',
			style: {
			textAlign: 'center',
			fontSize: 14,
			},
		},
		interactions: [
			{
			type: 'element-selected',
			},
			{
			type: 'element-active',
			},
		],
		statistic: {
			title: false,
			content: {
			style: {
				whiteSpace: 'pre-wrap',
				overflow: 'hidden',
				textOverflow: 'ellipsis',
			},
			content: '',
			},
	  },
	};
	return <div style={{width:300}}> <Pie {...config} /> </div>;
  };

export default EventCardPie