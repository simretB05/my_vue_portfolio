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
    let facebookAppId = "1150780559522340"; // Replace with your Facebook App ID

    return {
      title: "About Me - Simret's Portfolio",
      meta: [
        // Facebook Open Graph
        { property: "og:title", content: "About Me - Simret's Portfolio" },
        { property: "og:description", content: "Learn more about Simret and her achievements." },
        { property: "og:type", content: "website" },
        { property: "og:url", content: baseUrl },
        { property: "og:image", content: `${baseUrl}/images/website_image.png` },
        { property: "fb:app_id", content: facebookAppId }, // Facebook App ID

        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "About Me - Simret's Portfolio" },
        { name: "twitter:description", content: "Learn more about Simret and her achievements." },
        { name: "twitter:image", content: `${baseUrl}/images/website_image.png` },

        // WhatsApp
        { property: "whatsapp", content: "Share on WhatsApp message" },

        // Google
        { itemprop: "name", content: "About Me - Simret's Portfolio" },
        { itemprop: "description", content: "Learn more about Simret and her achievements." },
        { itemprop: "image", content: `${baseUrl}/images/website_image.png` },
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
