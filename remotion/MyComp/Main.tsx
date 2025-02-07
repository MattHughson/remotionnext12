import { z } from "zod";
import {
  AbsoluteFill,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { CompositionProps } from "../../types/constants";
import { NextLogo } from "./NextLogo";
import { loadFont, fontFamily } from "@remotion/google-fonts/Inter";
import React, { useMemo } from "react";
import { MultiRadialGradient } from "./RadialGradient";
import { TextFade } from "./TextFade";

loadFont();


const logo: React.CSSProperties = {
  justifyContent: "center",
  alignItems: "center",
};

export const Main = ({ title, image, ringsColour }: z.infer<typeof CompositionProps>) => {

  const container: React.CSSProperties = {
    backgroundColor: ringsColour,
  };
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const transitionStart = 2 * fps;
  const transitionDuration = 1 * fps;

  const logoOut = spring({
    fps,
    frame,
    config: {
      damping: 200,
    },
    durationInFrames: transitionDuration,
    delay: transitionStart,
  });

  const titleStyle: React.CSSProperties = useMemo(() => {
    return { fontFamily, fontSize: 70 };
  }, []);

  return (
    <AbsoluteFill style={container}>
      <Sequence from={transitionStart + transitionDuration / 2}>
        <TextFade>
          <h1 style={titleStyle}>{title}</h1>
        </TextFade>
      </Sequence>
      <AbsoluteFill style={logo}>
      <img
            src={image}
            alt="Your Image Alt Text"
            style={{
              height: 140,
              borderRadius: 70,
              transform: `scale(${1 - logoOut})`,
            }}
          />
      </AbsoluteFill>
      <MultiRadialGradient outProgress={logoOut}></MultiRadialGradient>
    </AbsoluteFill>
  );
};
