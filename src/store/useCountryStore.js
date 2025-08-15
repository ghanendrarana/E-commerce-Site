import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCountryStore = create(
  persist(
    (set) => ({
      countries: [],

      fetchCountries: async () => {
        try {
          const res = await fetch("https://countriesnow.space/api/v0.1/countries");
          const data = await res.json();
          set({ countries: data.data});
        } catch (error) {
          console.error(" Error fetching countries: ", error);
        }
      },
    }),
    {
      name: "country-storage",
    }
  )
);

export default useCountryStore;
