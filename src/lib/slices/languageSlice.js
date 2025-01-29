import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentLanguage: '', // اللغة الافتراضية
  translations: {}, // النصوص المحملة
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.currentLanguage = action.payload;
    },
    setTranslations: (state, action) => {
      state.translations = action.payload;
    },
  },
});

export const { setLanguage, setTranslations } = languageSlice.actions;
export default languageSlice.reducer;
