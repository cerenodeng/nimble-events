import Strapi from 'strapi-sdk-js';

export default async function Events() {
  const strapi = new Strapi();

  strapi.axios.defaults.headers.common['Authorization'] =
    `Bearer bdb1a781202bbdee4e73e623754f5498c48245f0170166013e35df242a2e8d2f93c071eee2b5ccb341f8efc5f9846b396553b6e91e82f1868792a0e2f846027fb7e14b53ba1121dec2f7bfca6928d24de1974f069549e93a0d58752c7f193b9265f6fb9ca151103ccca1e91c5e5d87256b79cc9f901fdcb4a3368b97c0134ea1`;

  const { data: events } = await strapi.find('events', { populate: ['media'] });
  // console.log(JSON.stringify(events, null, 2));

  return (
    <div className='p-20'>
      <h2 className='text-3xl font-semibold'>Events</h2>
      <div className='grid grid-cols-4 gap-10'>
        {events.map((event) => (
          <div className='card bg-base-100 w-96 shadow-xl' key={event.id}>
            {/* {event.media && (
            <div className='flex gap-x-10'>
              {event.media.map((file) => (
                <img
                  src={`http://localhost:1337${file.formats.medium.url}`}
                  alt={event.title}
                  key={file.documentId}
                />
              ))}
            </div>
          )} */}
            <figure>
              {event.media && (
                <img
                  src={`http://localhost:1337${event.media[0].formats.medium.url}`}
                  alt={event.title}
                />
              )}
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>{event.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
