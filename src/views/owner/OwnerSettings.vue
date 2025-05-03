<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="8" lg="6">
        <v-card>
          <v-card-title>
            <h2 class="text-h5">Owner Settings</h2>
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="owner.name"
                label="Name"
                required
              ></v-text-field>

              <v-text-field
                v-model="owner.email"
                label="Email"
                required
              ></v-text-field>

              <v-text-field
                v-model="owner.phone"
                label="Phone"
                type="tel"
              ></v-text-field>

              <v-select
                v-model="owner.language"
                :items="languages"
                label="Preferred Language"
              ></v-select>

              <v-btn color="primary" @click="saveSettings">Save Settings</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

const owner = ref({
  name: '',
  email: '',
  phone: '',
  language: ''
});

const languages = ['English', 'French', 'Spanish', 'German'];

const saveSettings = () => {
  console.log('Settings saved:', owner.value);
  // Add your API call or state update logic here
};
</script>

<style scoped>
.v-btn {
  margin-top: 16px;
}
</style>
