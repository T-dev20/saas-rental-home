<template>
  <v-container>
    <v-card>
      <v-card-title>
        Branding Settings
      </v-card-title>
      <v-card-text>
        <v-form v-on:submit.prevent="submitForm">
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                label="Brand Name"
                v-model="brandingForm.brandName"
                outlined
                required
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-file-input
                label="Upload Logo"
                v-model="brandingForm.logo"
                outlined
              />
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="6">
              <v-color-picker
                label="Primary Color"
                v-model="brandingForm.primaryColor"
                outlined
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-color-picker
                label="Secondary Color"
                v-model="brandingForm.secondaryColor"
                outlined
              />
            </v-col>
          </v-row>

          <v-btn type="submit" color="primary">Save Branding</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

const brandingForm = ref({
  brandName: '',
  logo: null,
  primaryColor: '#000000',
  secondaryColor: '#FFFFFF',
});

const submitForm = () => {
  console.log('Branding settings saved:', brandingForm.value);
};
</script>
