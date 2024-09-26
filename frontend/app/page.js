import Strapi from 'strapi-sdk-js';

export default async function Home() {
  const strapi = new Strapi();
  strapi.axios.defaults.headers.common['Authorization'] =
    `Bearer ${process.env.STRAPI_API_TOKEN}`;
  const { data: events } = await strapi.find('events', { populate: ['media'] });

  return (
    <div className='p-20'>
      <h2 className='text-4xl font-bold'>Nimble Events</h2>
      <div className='grid grid-cols-4 gap-10'>
        {events.map((event) => (
          <div className='card w-96 bg-base-100 shadow-xl' key={event.id}>
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
                <a href={`/events/${event.id}`}>
                  <img
                    src={`http://localhost:1337${event.media[0].formats.medium.url}`}
                    alt={event.title}
                  />
                </a>
              )}
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>
                <a href={`/events/${event.id}`}>{event.title}</a>
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
