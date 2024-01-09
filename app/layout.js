// RootLayout.js

import React from 'react';
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "../components/StoryblokProvider";
import { MetadataProvider, useMetadata } from '../Context/MetadataContext';
import './globals.css';

storyblokInit({
  accessToken: 'IR1Lj26hQLt6Dy9NJWKq7gtt',
  use: [apiPlugin],
});

export default function RootLayout({ children }) {


  return (
    <StoryblokProvider>
      <MetadataProvider>
        <html lang="en">
          
          <body>{children}</body>
        </html>
      </MetadataProvider>
    </StoryblokProvider>
  );
}
