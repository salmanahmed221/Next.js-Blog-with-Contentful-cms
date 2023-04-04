import Image from 'next/image';

async function getBlogs() {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=blogs`,
    { cache: 'no-store' }
  );
  if (!res.ok) {
    throw new Error('Failed to Fetch');
  }
  return res.json();
}

export default async function Page() {
  const blogs = await getBlogs();
  console.log(blogs);

  return (
    <div className="bg-gray-600 grid md:grid-cols-4 py-4 gap-y-4">
      {blogs.items.map((elem1: any) => (
        <div
          className="bg-white p-5 mx-5"
          key={elem1.sys.id}>
          <h1 className="text-2xl font-bold">{elem1.fields.blogTitle}</h1>
          <p className=" text-justify pt-1">{elem1.fields.description}</p>

          {blogs.includes.Asset.map((elem2: any) => (
            <div key={elem2.sys.id}>
              {elem1.fields.image.sys.id == elem2.sys.id ?
                <Image
                  src={'https:' + elem2.fields.file.url}
                  alt=""
                  width={400}
                  height={400}
                  className="mt-2"
                /> : <div></div>}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
