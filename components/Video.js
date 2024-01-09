import React, { useEffect } from 'react';
import { Main } from "../remotion/MyComp/Main";
import { CompositionProps, defaultMyCompProps, DURATION_IN_FRAMES, VIDEO_FPS, VIDEO_HEIGHT, VIDEO_WIDTH } from "../types/constants";
import { Player } from "@remotion/player";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Video = ({ blok }) => {
  const { Bynder, Image, Color, Text } = blok;

  useEffect(() => {
    console.log('Text prop changed:', Text);
    // Update the document head using react-helmet-async
    document.title = Text || 'Default Title';
    // Add other logic for updating meta tags if needed

  }, [Text]);

  const container = {
    margin: "auto",
    marginBottom: 20,
    height: "100%", /* 100% of the viewport height */
  };

  const outer = {
    borderRadius: "var(--geist-border-radius)",
    overflow: "hidden",
    boxShadow: "0 0 200px rgba(0, 0, 0, 0.15)",
    marginBottom: 40,
    marginTop: 60,
  };

  const player = {
    height: "100%",
  };

  return (
    <HelmetProvider>
      <div style={container}>
        <Helmet>
          <title>{Text || 'Default Title'}</title>
          <meta property="og:image" content={Image.filename || Bynder} />
          {/* Add other meta tags as needed */}
        </Helmet>
        <Player
          component={Main}
          inputProps={{
            title: Text || 'Default Title',
            image: Image.filename || Bynder,
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
    </HelmetProvider>
  );
}

export default Video;
