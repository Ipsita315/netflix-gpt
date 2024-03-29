import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name: "Gpt",
    initialState: {
        gptSearchActive: false
    },
    reducers: {
        toggleGptSearch: (state, action) => {
            state.gptSearchActive = !state.gptSearchActive;
        }
    }
});

export const { toggleGptSearch } = GptSlice.actions;

export default GptSlice.reducer;