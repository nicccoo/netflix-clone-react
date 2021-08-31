import React from "react";
import  useContent  from "../hooks/use-content";
import { BrowseContainer } from "../containers/browse";
import selectionFilter from "../utils/selection-filter";

export default function Browse() {
  const { series } = useContent("series");
  const { films } = useContent("films");

  const slides = selectionFilter({ series, films });


  return <BrowseContainer slides={slides} />;
}
