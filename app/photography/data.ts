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

export const photoCategories: PhotoCategory[] = [
  {
    slug: "losangeles",
    title: "Los Angeles",
    cover: "/photography/losangeles/image1.jpg",
    photos: [
      { src: "/photography/losangeles/image1.jpg", width: 3840, height: 2560, alt: "Urban Geometry 1" },
      { src: "/photography/losangeles/image2.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
    ],
  },
  {
    slug: "pittsburgh",
    title: "Pittsburgh",
    cover: "/photography/pittsburgh/image1.jpg",
    photos: [
      { src: "/photography/pittsburgh/image1.jpg", width: 3840, height: 2560, alt: "Urban Geometry 1" },
      { src: "/photography/pittsburgh/image2.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
    ],
  },
];
