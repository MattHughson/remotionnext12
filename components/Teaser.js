import { storyblokEditable } from "@storyblok/react";
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


const Teaser = ({ blok }) => {
  console.log('teaser blok',blok )
  return (
    <div>

      <h2 className="text-2xl mb-10" {...storyblokEditable(blok)}>{blok.headline}</h2>
      <Player
            component={Main}
            inputProps={{
              title: blok.headline,
            }}
            durationInFrames={DURATION_IN_FRAMES}
            fps={VIDEO_FPS}
            compositionHeight={VIDEO_HEIGHT}
            compositionWidth={VIDEO_WIDTH}
           
            controls
            autoPlay
            loop
          />
    
    </div>
  );
};

export default Teaser;
