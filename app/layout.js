import React from 'react';
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "../components/StoryblokProvider";
import { MetadataProvider, useMetadata } from '../Context/MetadataContext';
import './globals.css';

storyblokInit({
  accessToken: 'IR1Lj26hQLt6Dy9NJWKq7gtt',
  use: [apiPlugin],
});



export default async function RootLayout({ children }) {
  const {ContentNode}  = await fetchData();
  console.log('data data',ContentNode.content.body[0].Bynder[0].files.webImage.url)
  return (
    <StoryblokProvider>
      <MetadataProvider>
        <html lang="en">
        <head>
            {/* Set metadata dynamically */}
            <title>{ContentNode.content.body[0].Text}</title>
            <meta name="description" content="Presented by Storyblok" />
            <meta property="og:image" content={ContentNode.content.body[0].Image.filename ? ContentNode.content.body[0].Image.filename : ContentNode.content.body[0].Bynder[0].files.webImage.url} />
            <meta property="og:image:secure_url" content={ContentNode.content.body[0].Image.filename ? ContentNode.content.body[0].Image.filename :ContentNode.content.body[0].Bynder[0].files.webImage.url} /> 
      
          </head>
          <body>{children}</body>
        </html>
      </MetadataProvider>
    </StoryblokProvider>
  );
}

export async function fetchData() {

  const apiUrl = 'https://gapi.storyblok.com/v1/api';
  const token = 'IR1Lj26hQLt6Dy9NJWKq7gtt';

  const query = `
    query {
      ContentNode(id: "423944284") {
        content
      }
    }
  `;

  const variables = {};

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Accept-Encoding': 'gzip, deflate, br',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Token': token,
      },
      body: JSON.stringify({ query, variables }),
    });

    const { data } = await response.json();
    // Handle the returned data as needed
    console.log('GraphQL Response:', data);

    return data;
  } catch (error) {
    console.error('GraphQL Error:', error);
    // Handle the error as needed
    return null;
  }
}
