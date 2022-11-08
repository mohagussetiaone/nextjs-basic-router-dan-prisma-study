import styles from "../../../../styles/page.module.css";

export default function Details({ slug, id }) {
  return (
    <div className={styles.container_center}>
      <h1>Detail Blog</h1>
      <p>
        Slug : {slug} <br />
        Id : {id}
      </p>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const { slug, id } = ctx.params;
  return {
    props: {
      slug: slug,
      id: id,
    },
  };
}
