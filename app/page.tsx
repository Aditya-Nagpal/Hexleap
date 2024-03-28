"use client"

import ThemeToggleButton from "./components/ThemeToggleButton";
import Sports from "./components/Sports";
import CollectionSpotlight from "./components/CollectionSpotlight";

export default function Home() {
  return (
    <>
      <ThemeToggleButton/>
      <Sports />
      <CollectionSpotlight />
    </>
  );
}
