<template>
    <v-app>
        <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="name" :rules="nameRules" :counter="10" label="Name" required></v-text-field>
            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
            <v-select v-model="select" :items="items" :rules="[v => !!v || 'Item is required']" label="Item" required></v-select>
            <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree?" required></v-checkbox>

            <v-btn :disabled="!valid" @click="submit">
                submit
            </v-btn>
            <v-btn @click="clear">clear</v-btn>
        </v-form>
    </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
    data: () => ({
        valid: true,
        name: "",
        nameRules: [(v: string) => !!v || "Name is required", (v: string) => (v && v.length <= 10) || "Name must be less than 10 characters"],
        email: "",
        emailRules: [(v: string) => !!v || "E-mail is required", (v: string) => /.+@.+/.test(v) || "E-mail must be valid"],
        select: null,
        items: ["Item 1", "Item 2", "Item 3", "Item 4"],
        checkbox: false
    }),

    methods: {
        submit() {
            const form: any = this.$refs.form;
            if (form.validate()) {
                // Native form submission is not yet supported
                axios.post("/api/submit", {
                    name: this.name,
                    email: this.email,
                    select: this.select,
                    checkbox: this.checkbox
                });
            }
        },
        clear() {
            const form: any = this.$refs.form;
            form.reset();
        }
    }
});
</script>

<style>
</style>