import { storyblokEditable } from "@storyblok/react";




const Teaser = ({ blok }) => {
  console.log('teaser blok',blok )
  return (
    <div>

      <h2 className="text-2xl mb-10" {...storyblokEditable(blok)}>{blok.headline}</h2>
    
    
    </div>
  );
};

export default Teaser;
