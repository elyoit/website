export interface PhotoItem {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface PhotoCategory {
  slug: string;
  title: string;
  cover: string;
  photos: PhotoItem[];
}

export const photographyData = {
  title: "Photography",
  description:
    "A collection of architectural and experimental photography exploring light, space, and material.",
};

export const photoCategories: PhotoCategory[] = [
  {
    slug: "losangeles",
    title: "Urban Geometry",
    cover: "/photography/losangeles/image1.jpg",
    photos: [
      { src: "/photography/losangeles/image1.jpg", width: 3840, height: 2560, alt: "Urban Geometry 1" },
      { src: "/photography/losangeles/image2.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      // add the rest with real width/height
    ],
  },
];
