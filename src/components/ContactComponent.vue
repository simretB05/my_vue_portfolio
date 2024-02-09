<template>
  <v-container fluid fill-height>
    <v-row align="center" justify="center">
      <v-col xs="12" sm="8" md="6">
        <v-card class="elevation-12">
          <v-card-title class="headline text-center">Contact Me</v-card-title>
          <v-card-text>
            <v-text-field v-model="name" label="Name" outlined></v-text-field>
            <v-text-field
              v-model="email"
              label="Email Address"
              outlined
            ></v-text-field>
            <v-textarea v-model="message" label="Message" outlined></v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="sendMessage" color="primary">Send</v-btn>
          </v-card-actions>
        </v-card>
        <div class="mt-4 text-center">
          <p>Phone Number: {{ phoneNumber }}</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
      phoneNumber: "Your Phone Number",
    };
  },
  methods: {
    sendMessage() {
      console.log(
        `Name: ${this.name}, Email: ${this.email}, Message: ${this.message}`
      );
    },
  },
};
</script>

<style scoped>
.elevation-12 {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
</style>
