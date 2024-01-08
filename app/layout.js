import { storyblokInit, apiPlugin} from "@storyblok/react/rsc"
import StoryblokProvider from "../components/StoryblokProvider"

import './globals.css';



storyblokInit({
  accessToken: 'IR1Lj26hQLt6Dy9NJWKq7gtt',
  use: [apiPlugin]
})

export default function RootLayout({ children }) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </StoryblokProvider>
  )
}
