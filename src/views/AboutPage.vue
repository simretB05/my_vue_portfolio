<template>
  <main>
    <about-component></about-component>
  </main>
</template>

<script>
import AboutComponent from "@/components/AboutComponent.vue";

export default {
  name: "AboutPage",
  components: {
    AboutComponent,
  },
  metaInfo() {
    let baseUrl = "https://portfolio.simret.codes"; 

    return {
      title: "About Me - Simret's Portfolio",
      meta: [
        { property: "og:title", content: "About Me - Simret's Portfolio" },
        { name: "description", content: "Learn more about Simret and her achievements." },
        { property: "og:description", content: "Learn more about Simret and her achievements." },
        { property: "og:type", content: "website" },
        { property: "og:url", content: baseUrl }, // Website URL
        { property: "og:image", content: `${baseUrl}/public/images/website_image.png` }, 
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "About Me - Simret's Portfolio" },
        { name: "twitter:description", content: "Learn more about Simret and her achievements." },
        { name: "twitter:image", content: `${ baseUrl }/public/images/website_image.png` },
        { name: "whatsapp", content: "Share on WhatsApp message" },
        { itemprop: "name", content: "About Me - Simret's Portfolio" },
        { itemprop: "description", content: "Learn more about Simret and her achievements." },
      ],
    };
  },
};
</script>

<style scoped>
main {
  width: 100%;
  display: grid;
  place-items: center;
}
</style>
