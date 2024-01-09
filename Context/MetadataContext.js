'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';

const MetadataContext = createContext();

export const MetadataProvider = ({ children }) => {
  const defaultMetadata = {
    title: 'Storyblok digital sign',
    description: 'Default Description',
    // Add other default metadata properties
  };

  const [metadata, setMetadata] = useState(defaultMetadata);

  useEffect(() => {
    // Log metadata changes
    //console.log('Metadata updated:', metadata);
  }, [metadata]);

  return (
    <MetadataContext.Provider value={{ metadata, setMetadata }}>
      {children}
    </MetadataContext.Provider>
  );
};

export const useMetadata = () => {
  const context = useContext(MetadataContext);
  if (!context) {
    throw new Error('useMetadata must be used within a MetadataProvider');
  }
  return context;
};;
