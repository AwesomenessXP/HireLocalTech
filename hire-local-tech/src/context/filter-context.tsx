// src/context/FilterContext.tsx
'use client';

import { createContext, useContext, useState } from "react";

export interface FilterState {
  datePosted: string;
  salary: string;
  jobType: string;
  experience: string;
  education: string;
  location: string;
}

interface FilterContextValue extends FilterState {
  setDatePosted: (val: string) => void;
  setSalary: (val: string) => void;
  setJobType: (val: string) => void;
  setExperience: (val: string) => void;
  setEducation: (val: string) => void;
  setLocation: (val: string) => void;
  resetFilters: () => void;
}

const FilterContext = createContext<FilterContextValue | undefined>(undefined);

const initialState: FilterState = {
  datePosted: "",
  salary: "",
  jobType: "",
  experience: "",
  education: "",
  location: "",
};

export function FilterProvider({ children }: { children: React.ReactNode }) {
  const [datePosted, setDatePosted] = useState(initialState.datePosted);
  const [salary, setSalary] = useState(initialState.salary);
  const [jobType, setJobType] = useState(initialState.jobType);
  const [experience, setExperience] = useState(initialState.experience);
  const [education, setEducation] = useState(initialState.education);
  const [location, setLocation] = useState(initialState.location);

  const resetFilters = () => {
    setDatePosted("");
    setSalary("");
    setJobType("");
    setExperience("");
    setEducation("");
  };

  return (
    <FilterContext.Provider
      value={{
        datePosted,
        salary,
        jobType,
        experience,
        education,
        location,
        setDatePosted,
        setSalary,
        setJobType,
        setExperience,
        setEducation,
        setLocation,
        resetFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilters() {
  const context = useContext(FilterContext);
  if (!context) throw new Error("useFilters must be used within a FilterProvider");
  return context;
}