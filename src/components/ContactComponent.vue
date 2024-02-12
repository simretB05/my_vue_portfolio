<template>
  <v-container class="main-contact">
    <h1 class="title-container">Contact Me</h1>

    <p class="subtitle">
      Exploring new career opportunities and ready to make a professional
      connection? I'm actively seeking a fulfilling job opportunity, and your
      input could be the missing piece to my next chapter. Feel free to drop me
      a message; I'm eager to discuss potential collaborations, job offers, or
      any valuable insights you may have. Let's connect and explore the
      possibilities together!
    </p>
    <div class="contact-info-cont">
      <div class="picture-container">
        <v-col cols="12" md="6">
          <v-img
            src="/path/to/your/image.jpg"
            alt="Contact Image"
            class="contact-image"
          ></v-img>
        </v-col>
      </div>
      <div class="form-container">
        <div class="form-div">
          <v-form v-model="valid" ref="form" class="v-form">
            <v-row class="cont-row">
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="name"
                  label="Name"
                  required
                  class="name-field"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="email"
                  label="Email"
                  required
                  class="email-field"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col class="message-cont">
                <v-textarea
                  v-model="message"
                  label="Message"
                  required
                  outlined
                ></v-textarea>
              </v-col>
              <v-col cols="12" class="btn-div">
                <v-btn
                  class="btn"
                  @click="submitForm"
                  :disabled="!valid"
                  color="white"
                  outlined
                  >Send</v-btn
                >
              </v-col>
            </v-row>
          </v-form>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
      valid: false,
    };
  },
  methods: {
    submitForm() {
      console.log("Name:", this.name);
      console.log("Email:", this.email);
      console.log("Message:", this.message);
      this.$refs.form.reset();
    },
  },
};
</script>

<style scoped>
.main-contact {
  display: grid;
  place-items: center;
  margin-top: 70px;
  width: 90%;
  color: rgb(154, 152, 152);
  padding-top: 30px;
}

.contact-info-cont {
  display: flex;
  width: 100%;
}

.picture-container {
  display: flex;
  width: 100%;
  max-width: 50%;
  background-color: #1bae9c;
}

.title-container {
  color: #1bae9c;
}
.title-container,
.subtitle {
  text-align: center;
  margin-bottom: 20px;
}
.subtitle {
  font-size: 1.1rem;
}

.form-container {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 50%;
  margin: 0 auto;
}

.form-div {
  width: 90%;
  border: 2px solid #1bae9c;
  border-left: none;
  padding: 20px;
  border-radius: 0 8px 8px 0;
  display: grid;
  place-items: center;
}
.v-form {
  display: grid;
  place-items: center;
}
.name-field,
.email-field,
.message-cont {
  margin-bottom: 20px;
}
.cont-row {
  width: 90%;
}
.btn-div {
  display: grid;
  place-items: end;
}
.btn {
  background-color: #1bae9c;
}
.btn :active {
  background-color: lightgreen;
}
.btn:hover {
  background-color: white;
}
@media only screen and (max-width: 767px) {
  .main {
    margin-top: 20px;
  }
  .contact-info-cont {
    flex-direction: column;
  }

  .picture-container,
  .form-container {
    max-width: 100%;
  }

  .form-div {
    width: 100%;
    border-radius: 8px;
    border-radius: 8px 8px 8px 8px;
    border: 2px solid #1bae9c;
  }
  .contact-info-cont {
    flex-direction: column;
  }

  .picture-container,
  .form-container {
    max-width: 100%;
    margin: 10px 0;
  }

  .picture-container {
    order: 0;
    height: 500px;
  }

  .form-container {
    order: 1;
  }

  .form-div {
    width: 100%;
    border-radius: 8px;
  }
}
</style>
