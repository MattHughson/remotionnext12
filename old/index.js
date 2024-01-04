// import { Player } from "@remotion/player";

// import Head from "next/head";
// import React, { useMemo, useState } from "react";
// import { Main } from "../remotion/MyComp/Main";
// import {
//   CompositionProps,
//   defaultMyCompProps,
//   DURATION_IN_FRAMES,
//   VIDEO_FPS,
//   VIDEO_HEIGHT,
//   VIDEO_WIDTH,
// } from "../types/constants";
// import { z } from "zod";
// import { RenderControls } from "../components/RenderControls";

// import {
//   useStoryblokState,
//   getStoryblokApi,
//   StoryblokComponent,
// } from "@storyblok/react";



// export default function Home({ story }){


//   return (
//     <div>
//       <Head>
//         <title>Remotion and Next.js</title>
//         <meta name="description" content="Remotion and Next.js" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <div >
//         <div className="cinematics">
//         <StoryblokComponent blok={story.content} />
//           <Player
//             component={Main}
//             //inputProps={inputProps}
//             durationInFrames={DURATION_IN_FRAMES}
//             fps={VIDEO_FPS}
//             compositionHeight={VIDEO_HEIGHT}
//             compositionWidth={VIDEO_WIDTH}
           
//             controls
//             autoPlay
//             loop
//           />
//         </div>
//         <RenderControls
//           //text={text}
//          //setText={setText}
//           //inputProps={inputProps}
//         ></RenderControls>
//       </div>
//     </div>
//   );
// };



// export async function getStaticProps() {
//   let slug = "home";

//   let sbParams = {
//     version: "draft", // or 'published'
//   };

//   const storyblokApi = getStoryblokApi();
//   let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

//   return {
//     props: {
//       story: data ? data.story : false,
//       key: data ? data.story.id : false,
//     },
//     revalidate: 3600,
//   };
// }
