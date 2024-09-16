import Strapi from 'strapi-sdk-js';

export default async function Events() {
	const strapi = new Strapi();

	strapi.axios.defaults.headers.common['Authorization'] =
		`Bearer bdb1a781202bbdee4e73e623754f5498c48245f0170166013e35df242a2e8d2f93c071eee2b5ccb341f8efc5f9846b396553b6e91e82f1868792a0e2f846027fb7e14b53ba1121dec2f7bfca6928d24de1974f069549e93a0d58752c7f193b9265f6fb9ca151103ccca1e91c5e5d87256b79cc9f901fdcb4a3368b97c0134ea1`;

	const { data: events } = await strapi.find('events');
	console.log(events);

	return (
		<div>
			<h2 className='text-3xl font-semibold'>Events</h2>
			{events.map((event) => (
				<div key={event.id}>{event.title}</div>
			))}
		</div>
	);
}
