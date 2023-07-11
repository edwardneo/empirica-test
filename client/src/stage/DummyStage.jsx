import React from "react";
import {
  usePlayer,
} from "@empirica/core/player/classic/react";
import { Button } from "../components/Button";

export function DummyStage() {
  const player = usePlayer();
  
  return (
    <Button handleClick={() => player.stage.set("submit", true)}>
      Next Stage
    </Button>
  );
}