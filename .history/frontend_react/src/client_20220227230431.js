import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '',
  dataset: 'production',
  apiVersion: '2022-02-27',
  useCdn: true,
  token: 'skvbdgXD7FtrAobth1Y058iXse3xQ5vPOHBQlilCG3khyTF7tmvwXGU9tMtlYdCZcZXSISlsnTPFlnM9GO8jNTGzhmmK8TuuJQsMOvWS9ufTy7iLGvXEr6JotdlGARNh5Ks0QGi64dnVVBNU9lQxxCqtdc5O1Hy0l8lRq1OzLSQ8Lymuu1Qy',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
