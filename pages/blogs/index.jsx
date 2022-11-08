export default function Blogs({ data }) {
  return (
    <div>
      <h1>Blog Page</h1>
      {data.map((e) => (
        <div key={e.id}>
          <h3>{e.title}</h3>
          <p>{e.body}</p>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const result = await fetch("http://localhost:3000/api/blogs");
  const data = await result.json();

  return {
    props: {
      data: data.query,
    },
  };
}
