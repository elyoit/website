export interface PhotoItem {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface PhotoCategory {
  slug: string;
  title: string;
  description: string;
  cover: string;
  photos: PhotoItem[];
}

export const photographyData = {
  title: "Photography",
  description: 
    "Most pictures shot on Canon EOS Rebel T4i and edited in Adobe Lightroom.",
};

export const photoCategories: PhotoCategory[] = [
  {
    slug: "fallingwater",
    title: "Fallingwater",
    description: "Frank Lloyd Wright's most famous masterpiece over the waterfall.",
    cover: "/photography/fallingwater/hero.jpg",
    photos: [
      { src: "/photography/fallingwater/image1.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/fallingwater/image2.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/fallingwater/image3.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/fallingwater/image4.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/fallingwater/image5.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/fallingwater/image6.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/fallingwater/image7.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/fallingwater/image8.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/fallingwater/image9.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/fallingwater/image10.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
    ],
  },
  {
    slug: "gettyvilla",
    title: "Getty Villa",
    description: "Recreated Roman villa on the coast of Malibu.",
    cover: "/photography/gettyvilla/hero.jpg",
    photos: [
      { src: "/photography/gettyvilla/image1.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/gettyvilla/image2.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/gettyvilla/image3.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/gettyvilla/image4.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/gettyvilla/image5.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/gettyvilla/image6.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/gettyvilla/image7.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/gettyvilla/image8.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/gettyvilla/image9.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/gettyvilla/image10.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/gettyvilla/image11.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
    ],
  },
  {
    slug: "santamonica",
    title: "Santa Monica",
    description: "World-famous pier, Pacific coast, and beach city.",
    cover: "/photography/santamonica/hero.jpg",
    photos: [
      { src: "/photography/santamonica/image1.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/santamonica/image2.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/santamonica/image3.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/santamonica/image4.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/santamonica/image5.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/santamonica/image6.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/santamonica/image7.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/santamonica/image8.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/santamonica/image9.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/santamonica/image10.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/santamonica/image11.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/santamonica/image12.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
    ],
  },
  {
    slug: "griffith",
    title: "Griffith Observatory",
    description: "Observatory overlooking the Los Angeles skyline.",
    cover: "/photography/griffith/hero.jpg",
    photos: [
      { src: "/photography/griffith/image1.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/griffith/image2.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/griffith/image3.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/griffith/image4.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/griffith/image5.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/griffith/image6.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/griffith/image7.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/griffith/image8.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/griffith/image9.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/griffith/image10.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/griffith/image11.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/griffith/image12.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
    ],
  },
  {
    slug: "thebroad",
    title: "The Broad",
    description: "Contemporary art museum located in downtown Los Angeles.",
    cover: "/photography/thebroad/hero.jpg",
    photos: [
      { src: "/photography/thebroad/image1.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/thebroad/image2.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/thebroad/image3.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/thebroad/image4.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/thebroad/image5.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/thebroad/image6.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/thebroad/image7.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
    ],
  },
  {
    slug: "upitt",
    title: "University of Pittsburgh",
    description: "Campus and cathedral in gothic architecture.",
    cover: "/photography/upitt/hero.jpg",
    photos: [
      { src: "/photography/upitt/image1.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/upitt/image2.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/upitt/image3.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/upitt/image4.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/upitt/image5.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/upitt/image6.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/upitt/image7.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/upitt/image8.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/upitt/image9.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/upitt/image10.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
    ],
  },
  /*{
    slug: "yosemite",
    title: "Yosemite",
    description: "hehe",
    cover: "/photography/upitt/hero.jpg",
    photos: [
      { src: "/photography/yosemite/image1.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/yosemite/image2.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/yosemite/image3.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/yosemite/image4.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/yosemite/image5.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/yosemite/image6.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/yosemite/image7.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/yosemite/image8.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/yosemite/image9.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/yosemite/image10.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
    ],
  },*/
];
