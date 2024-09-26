import { redirect } from 'next/navigation';
import Strapi from 'strapi-sdk-js';

export default async function Page({ params }) {
  const eventId = params.id;
  const strapi = new Strapi();
  strapi.axios.defaults.headers.common['Authorization'] =
    `Bearer ${process.env.STRAPI_API_TOKEN}`;
  const { data: event } = await strapi.findOne('events', eventId, {
    populate: ['media'],
  });
  console.log(event);
  if (!event) {
    redirect('/404');
  }

  return (
    <div className='p-20'>
      <h2 className='text-4xl font-bold'>{event.title}</h2>
    </div>
  );
}
