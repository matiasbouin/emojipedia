import React from "react";
import Term from "./components/Term";

function createTerm(emojipedia) {
  return (
    <Term
      key={emojipedia.id}
      emoji={emojipedia.emoji}
      name={emojipedia.name}
      meaning={emojipedia.meaning}
    />
  );
}

export default createTerm;
