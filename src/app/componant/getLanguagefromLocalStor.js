"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLanguage, setTranslations } from "@/lib/slices/languageSlice";
import { loadTranslations } from "@/utils/loadTranslations";

export default function GetLanguageFromLocalStor() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTranslations = async () => {
      const getLanguageFromLocal = localStorage.getItem("language") || "en";
      const newLanguage = getLanguageFromLocal === "en" ? "en" : "ar";
      const translations = await loadTranslations(newLanguage);
      dispatch(setLanguage(newLanguage));
      dispatch(setTranslations(translations));
    };

    fetchTranslations();
  }, [dispatch]);

  return null;
}
