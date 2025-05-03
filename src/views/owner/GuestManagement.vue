<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-toolbar flat>
          <v-toolbar-title>Guest Management</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="openDialog">
            Add Guest
          </v-btn>
        </v-toolbar>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-data-table
          :headers="headers"
          :items="guests"
          item-value="id"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-text-field
              v-model="search"
              label="Search guests"
              class="mx-4"
              clearable
            ></v-text-field>
          </template>

          <template v-slot:[`item.actions`]="{ item }">
            <v-btn icon @click="editGuest(item)">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon @click="deleteGuest(item.id)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="text-h5">{{ editingGuest ? 'Edit Guest' : 'Add Guest' }}</span>
        </v-card-title>
        <v-card-text>
          <v-form ref="form">
            <v-text-field
              v-model="guest.name"
              label="Name"
              :rules="[v => !!v || 'Name is required']"
            ></v-text-field>
            <v-text-field
              v-model="guest.email"
              label="Email"
              :rules="[v => !!v || 'Email is required']"
            ></v-text-field>
            <v-text-field
              v-model="guest.phone"
              label="Phone"
              :rules="[v => !!v || 'Phone is required']"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="closeDialog">Cancel</v-btn>
          <v-btn color="primary" @click="saveGuest">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

const headers = [
  { text: 'Name', value: 'name' },
  { text: 'Email', value: 'email' },
  { text: 'Phone', value: 'phone' },
  { text: 'Actions', value: 'actions', sortable: false },
];

const guests = ref([
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '987-654-3210' },
]);

const dialog = ref(false);
const editingGuest = ref(false);
const guest = ref({ id: null, name: '', email: '', phone: '' });
const search = ref('');
const form = ref(null);

function openDialog() {
  guest.value = { id: null, name: '', email: '', phone: '' };
  editingGuest.value = false;
  dialog.value = true;
}

function closeDialog() {
  dialog.value = false;
}

function saveGuest() {
  if (!form.value.validate()) return;

  if (editingGuest.value) {
    const index = guests.value.findIndex(g => g.id === guest.value.id);
    guests.value[index] = { ...guest.value };
  } else {
    guest.value.id = Date.now();
    guests.value.push({ ...guest.value });
  }
  closeDialog();
}

function editGuest(item) {
  guest.value = { ...item };
  editingGuest.value = true;
  dialog.value = true;
}

function deleteGuest(id) {
  guests.value = guests.value.filter(g => g.id !== id);
}
</script>

<style scoped>
.mx-4 {
  margin-left: 1rem;
  margin-right: 1rem;
}
</style>
