import React from 'react'
import { Main } from "../remotion/MyComp/Main";
import {
  CompositionProps,
  defaultMyCompProps,
  DURATION_IN_FRAMES,
  VIDEO_FPS,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
} from "../types/constants";
import { z } from "zod";
import { RenderControls } from "../components/RenderControls";
import { Player } from "@remotion/player";

const Video = ({blok}) => {
    console.log('video', blok)
    const {Bynder, Image, Color, Text} = blok

    const container = {
      margin: "auto",
      marginBottom: 20,
      height: "100vh", /* 100% of the viewport height */
      width: "100%",   /* 100% of the viewport width */
  };
      
      
      const outer = {
        borderRadius: "var(--geist-border-radius)",
        overflow: "hidden",
        boxShadow: "0 0 200px rgba(0, 0, 0, 0.15)",
        marginBottom: 40,
        marginTop: 60,
      };
      
      const player = {
        width: "100%",
      };

  return (
    <div style={container}>

        <Player
                component={Main}
                inputProps={{
                  title: Text,
                  image:Image.filename || Bynder,
                  ringsColour: Color.color
                }}
                durationInFrames={DURATION_IN_FRAMES}
                fps={VIDEO_FPS}
                compositionHeight={VIDEO_HEIGHT}
                compositionWidth={VIDEO_WIDTH}
               style={player}
                controls
                autoPlay
                loop
              />
    </div>
  )
}

export default Video