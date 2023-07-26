import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const resp = await axios.get('/contacts');
            return resp.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        };
    },
);


export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, thunkAPI) => {
        try {
            const resp = await axios.post('/contacts', { ...contact });
            return resp.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        };
    },
);

export const DeleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
        try {
            const resp = await axios.delete(`/contacts/${contactId}`);
            return resp.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        };
    },

);
