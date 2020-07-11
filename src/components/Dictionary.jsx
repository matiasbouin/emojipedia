import React from "react";
import emojipedia from "../emojipedia";
import createTerm from "../createTerm";

function Dictionary() {
  return <dl className="dictionary">{emojipedia.map(createTerm)}</dl>;
}

export default Dictionary;
