import { StatusBar } from "expo-status-bar";
import React from "react";

import PhilzCoffee from "./src/PhilzCoffee";

export default function App() {
  return (
    <>
      <PhilzCoffee />
      <StatusBar style="auto" />
    </>
  );
}
