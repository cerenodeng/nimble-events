import Strapi from 'strapi-sdk-js';

export default async function Page({ params }) {
  const eventId = params.id;
  const strapi = new Strapi();
  strapi.axios.defaults.headers.common['Authorization'] =
    `Bearer ${process.env.STRAPI_API_TOKEN}`;
  const data = await strapi.find('events', eventId, {
    populate: ['media'],
  });
  console.log(data);

  return (
    <div className='p-20'>
      <h2 className='text-4xl font-bold'>Nimble Events</h2>
    </div>
  );
}
