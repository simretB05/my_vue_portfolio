<template>
  <v-container class="main-contact">
    <h1 class="title-container" v-scrollanimation="'enter'">Contact Me</h1>
    <p class="subtitle" v-scrollanimation="'fade'">
      Let's collaborate and work together on your project. Please feel free to
      get in touch by using the form below. I'm eager to discuss potential
      opportunities and explore how we can achieve success together.
    </p>
    <div class="contact-info-cont" v-scrollanimation="'stagger'">
      <div class="picture-container">
        <v-col cols="12" md="6">
          <v-img
            lazy-src="/images/my.jpg"
            max-height="400px"
            max-width="300"
            src="/images/my.jpg"
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
                  ref="user_name"
                  class="text-custom-class"
                  v-model="user_name"
                  :rules="[() => !!user_name || 'This field is required']"
                  :error-messages="errorMessages"
                  label="Name"
                  placeholder="name"
                  required
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="user_email_address"
                  ref="user_email_address"
                  :rules="emailRules"
                  label="E-mail"
                  required
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="12">
                <v-text-field
                  class="text-custom-class"
                  v-model="user_phone_number"
                  ref="user_phone_number"
                  :rules="phoneNumberRules"
                  label="Phone Number"
                  required
                  outlined
                ></v-text-field>
              </v-col>
              <v-col class="message-cont" cols="12" md="12">
                <v-textarea
                  ref="user_message"
                  v-model="user_message"
                  :rules="[() => !!user_message || 'This field is required']"
                  :error-messages="errorMessages"
                  label="Feedback Message"
                  outlined
                  dense
                  style="color: #f35929"
                ></v-textarea>
              </v-col>
              <v-divider class="mt-12"></v-divider>
              <v-card-actions cols="12">
                <v-btn text @click="resetForm"> Clear </v-btn>
                <v-spacer></v-spacer>
                <v-slide-x-reverse-transition>
                  <v-tooltip v-if="formHasErrors" left>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        icon
                        class="my-0"
                        v-bind="attrs"
                        @click="resetForm"
                        v-on="on"
                      >
                        <v-icon>mdi-refresh</v-icon>
                      </v-btn>
                    </template>
                    <span>Refresh form</span>
                  </v-tooltip>
                </v-slide-x-reverse-transition>
                <v-btn
                  color="primary"
                  text
                  :disabled="!valid"
                  outlined
                  @click="submitForm"
                >
                  Send
                </v-btn>
              </v-card-actions>
            </v-row>
          </v-form>
        </div>
      </div>
    </div>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      user_name: null,
      user_email_address: "",
      user_phone_number: "",
      user_message: "",
      formHasErrors: false,
      errorMessages: "",
      rules: {
        required: (file) => {
          if (!file) {
            return "'This field is required'";
          }
          return true;
        },
      },
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      phoneNumberRules: [
        (v) => !!v || "Phone number is required",
        (v) => /^\d{10}$/.test(v) || "Invalid phone number format",
      ],
    };
  },
  watch: {
    form() {
      this.errorMessages = "";
    },
  },
  computed: {
    form() {
      return {
        user_name: this.user_name,
        user_email_address: this.user_email_address,
        user_phone_number: this.user_phone_number,
        user_message: this.user_message,
      };
    },
  },
  methods: {
    resetForm() {
      this.errorMessages = [];
      this.formHasErrors = false;
      Object.keys(this.form).forEach((f) => {
        this.$refs[f].reset();
      });
    },
    async submitForm() {
      this.formHasErrors = false;
      Object.keys(this.form).forEach((f) => {
        if (!this.form[f]) this.formHasErrors = true;
        this.$refs[f].validate(true);
      });
      if (this.formHasErrors === false) {
        axios
          .request({
            url: `${process.env["VUE_APP_BASE_URL"]}/api/user_contact`,
            method: "POST",
            headers: {
              "Content-Type": "multipart/form-data",
            },
            // The data is simply the form we created above
            data: this.form,
          })
          .then( ( res ) =>
          {
            res
            this.resetForm();
            this.$toast.success(
              "Thanks for getting in touch! I'll get back to you soon."
            );
          })
          .catch( ( error ) =>
          {
            error
            this.$toast.error(
              "Sorry, an error occurred while attempting to send your message. Please try again. If the issue persists, feel free to contact me for assistance.",
              "Error"
            );
          });
      }
    },
  },
};
</script>
<style scoped>
.main-contact {
  display: grid;
  place-items: center;
  width: 90%;
  color: rgb(154, 152, 152);
  margin-top: 70px;
}
.contact-info-cont {
  display: flex;
  width: 100%;
}
.picture-container {
  display: flex;
  justify-content: center;
  align-content: center;
  padding-top: 60px;
  width: 100%;
  max-width: 50%;
  background-color: #1bae9c;
}
.title-container {
  color: #1bae9c;
  opacity: 0;
}
.before-enter {
  opacity: 0;
  transform: translateY(10px);
  transition: all 1s ease-out;
}
.enter {
  opacity: 1;
  transform: translateY(0px);
  transition: all 1s ease-in;
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
  width: 100%;
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
.before-fade {
  opacity: 0;
  transform: translateY(10px);
  transition: all 1s ease-out;
}
.fade {
  opacity: 1;
  transform: translateY(0px);
  transition: all 1s ease-in;
}
.before-stagger {
  opacity: 0;
  transform: translateY(100px);
  transition: all 1s ease-out;
}
.stagger {
  opacity: 1;
  transform: translateY(0px);
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
    display:grid;
    place-items: center;
  }
  .form-container {
    order: 1;
  }
  .form-div {
    width: 100%;
    border-radius: 8px;
  }
  .col-md-6 .col-12{
    padding: 0;
  }
}
</style>