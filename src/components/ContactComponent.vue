<template>
  <div class="main-contact">
    <div class="title-container" v-scrollanimation="'enter'">
      <h1>Contact Me</h1>
    </div>

    <p class="subtitle" v-scrollanimation="'fade'">
      Let's collaborate and work together on your project. Please feel free to
      get in touch by using the form below. I'm eager to discuss potential
      opportunities and explore how we can achieve success together.
    </p>

    <div class="contact-info-cont" v-scrollanimation="'stagger'">
      <div class="picture-container">
        <div class="contact-image">
          <img src="/images/my.jpg" alt="Contact Image">
        </div>
      </div>
      <div class="form-container">
        <div class="form-div">
          <form class="v-form" @submit.prevent="submitForm">
            <div class="form-group">
              <label for="user_name">Name</label>
              <input
                id="user_name"
                v-model="formData.user_name"
                type="text"
                placeholder="Enter your name"
                required
              >
            </div>
            <div class="form-group">
              <label for="user_email_address">Email</label>
              <input
                id="user_email_address"
                v-model="formData.user_email_address"
                type="email"
                placeholder="Enter your email"
                required
              >
            </div>
            <div class="form-group">
              <label for="user_phone_number">Phone Number</label>
              <input
                id="user_phone_number"
                v-model="formData.user_phone_number"
                type="tel"
                placeholder="Enter your phone number"
                required
              >
            </div>
            <div class="form-group">
              <label for="user_message">Message</label>
              <textarea
                id="user_message"
                v-model="formData.user_message"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            <div class="btn-container">
              <button type="button" @click="resetForm">Clear</button>
              <button type="submit" :disabled="!valid">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      formData: {
        user_name: "",
        user_email_address: "",
        user_phone_number: "",
        user_message: "",
      },
    };
  },
  computed: {
    valid() {
      return Object.values(this.formData).every(value => value.trim() !== '');
    }
  },
  methods: {
    resetForm() {
      this.formData = {
        user_name: "",
        user_email_address: "",
        user_phone_number: "",
        user_message: "",
      };
    },
    async submitForm() {
      try {
        await axios.post(`${process.env["VUE_APP_BASE_URL"]}/api/user_contact`, this.formData);
        this.resetForm();
        this.$toast.success("Thanks for getting in touch! I'll get back to you soon.", {
          position: "top-right",
          timeout: 4000,
        });
      } catch (error) {
        this.$toast.error("Sorry, an error occurred while attempting to send your message. Please try again.", {
          position: "top-right",
          timeout: 4000,
        });
      }
    }
  }
};
</script>

<style scoped>
.main-contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.title-container h1 {
  color: #1bae9c;
  font-size: 2rem;
}

.subtitle {
  text-align: center;
  font-size: 1rem;
  margin-top: 20px;
  max-width: 80%;
  color:#a2a0a0 ;
}

.contact-info-cont {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  margin-top: 20px;
}

.picture-container {
  width: 100%;
  max-width: 300px;
  background-color: #3ebaab;
  display: flex;
  justify-content: center;
  margin: 10px;
}

.contact-image {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: auto;
}

.contact-image img {
  max-width: 100%;
  height: auto;
}

.form-container {
  width: 100%;
  max-width: 500px;
  padding: 20px;
  border: 2px solid #1bae9c;
  border-radius: 8px;
  margin: 10px;
}

.form-div {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 20px;
}

label {
  margin-bottom: 5px;
  color:#1bae9c;
  font-weight:400;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: .81rem;
  color:#a2a0a0 ;
  font-weight: 400;
}

.btn-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  margin-left: 10px;
  background-color: #1bae9c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .main-contact {
    width: 70%;
  }
  
  .subtitle {
    max-width: 70%;
  }
  
  .picture-container {
    max-width: 250px;
  }
}
</style>
