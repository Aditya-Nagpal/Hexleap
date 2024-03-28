"use client"

import ThemeToggleButton from "./components/ThemeToggleButton";
import Sports from "./components/Sports";
import CollectionSpotlight from "./components/CollectionSpotlight";
import './css/dark.css';
import './css/light.css';

export default function Home() {
  return (
    <>
      <ThemeToggleButton/>
      <Sports />
      <CollectionSpotlight />
    </>
  );
}
