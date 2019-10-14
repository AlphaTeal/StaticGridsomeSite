<template>
  <Layout>
    <h1>Blog</h1>
    <section class="posts">
        <PostList v-for="edge in $page.allPost.edges" :key="edge.node.id" :post="edge.node"></PostList>
    </section>
  </Layout>
</template>

<script>
import PostList from '~/components/PostList';

export default {
    components: {
        PostList
    },
  metaInfo: {
    title: 'Blog',
  },
};
</script>

<page-query>
query {
    allPost {
        totalCount
        edges {
            node {
                id
                title
                timeToRead
                description
                date (format: "MMMM D, YYYY")
                path
            }
        }
    }
}
</page-query>