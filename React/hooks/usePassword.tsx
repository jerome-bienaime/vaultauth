import React from "react";
import { Case } from "../../lib";

export default function usePassword() {
  const state = React.useState<
    Case[]
  >([])

  return state
}