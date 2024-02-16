<template>
  <div>
    <a
      @click="downLoad_pdf"
      download="your_resume.pdf"
      class="download-link btn"
    >
      Download my resume
    </a>
  </div>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    downLoad_pdf() {
      // Make a request to the server to download the resume
      axios
        .request({
          url: `${process.env["VUE_APP_BASE_URL"]}/api/download_resume`,
          responseType: "arraybuffer", // Specify arraybuffer for binary data
        })
        .then((response) => {
          // Use FileSaver.js  to trigger the download
          let blob = new Blob([response.data], { type: "application/pdf" });

          // Create a link element to simulate the click for downloading
          let link = document.createElement("a");
          link.href = window.URL.createObjectURL(blob); // Set the blob as the href
          link.download = "SimretPaulosResume.pdf"; // Set the desired file name
          link.click(); // Simulate a click to trigger the download
          this.$toast.success("Successfully  Downloaded My Resume PDF", {
            position: "top-right",
            timeout: 2000,
          });
        })
        .catch((err) => {
          // Handle errors if the download fails
          err;
          this.$toast.error(
            "Sorry, an error occurred while attempting to download the resume. Please try again. If the issue persists, feel free to contact me for assistance.",
            {
              position: "top-right",
              timeout: 4000,
            }
          );
        });
    },
  },
};
</script>


<style scoped>
.download-link.btn {
  width: 192px;
  background-color: #1bae9c;
  border: none;
  text-align: center;
  color: white;
  font-weight: 700;
  display: grid;
  place-items: center;
  grid-template-columns: 1fr;
  padding: 7px;
  transition: background-color 0.5s ease;
  box-shadow: 0 3px #1bae9c;
  border: 2px solid #1bae9c;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
  margin-top: 34px;
  cursor: pointer;
}
.download-link.btn:hover {
  box-shadow: 0 3px 3px rgba(21, 181, 167, 0.4);
}
.download-link.btn:active {
  transform: translateY(3px);
  box-shadow: none;
}

.download-link.btn:hover {
  background-color: #ffffff;
  color: #1bae9c;
}
</style>
