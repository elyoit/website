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
    slug: "urban-geometry",
    title: "Urban Geometry",
    cover: "/photography/urban-geometry/image1.jpg",
    photos: [
      { src: "/photography/urban-geometry/image1.jpg", width: 3840, height: 2560, alt: "Urban Geometry 1" },
      { src: "/photography/urban-geometry/image2.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      // add the rest, real width/height matters for the grid
    ],
  },
  {
    slug: "another-series",
    title: "Another Series",
    cover: "/photography/another-series/image1.jpg",
    photos: [],
  },
];
