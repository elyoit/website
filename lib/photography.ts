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
    title: "Los Angeles",
    cover: "/photography/losangeles/image1.jpg",
    photos: [
      { src: "/photography/losangeles/image1.jpg", width: 3840, height: 2560, alt: "Urban Geometry 1" },
      { src: "/photography/losangeles/image2.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/losangeles/image3.jpg", width: 3840, height: 2560, alt: "Urban Geometry 1" },
      { src: "/photography/losangeles/image4.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/losangeles/image5.jpg", width: 3840, height: 2560, alt: "Urban Geometry 1" },
      { src: "/photography/losangeles/image6.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/losangeles/image7.jpg", width: 3840, height: 2560, alt: "Urban Geometry 1" },
      { src: "/photography/losangeles/image8.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/losangeles/image9.jpg", width: 3840, height: 2560, alt: "Urban Geometry 1" },
      { src: "/photography/losangeles/image10.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
    ],
  },

  {
    slug: "pittsburgh",
    title: "Pittsburgh",
    cover: "/photography/pittsburgh/image1.jpg",
    photos: [
      { src: "/photography/pittsburgh/image1.jpg", width: 3840, height: 2560, alt: "Urban Geometry 1" },
      { src: "/photography/pittsburgh/image2.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/pittsburgh/image3.jpg", width: 3840, height: 2560, alt: "Urban Geometry 1" },
      { src: "/photography/pittsburgh/image4.jpg", width: 2560, height: 3840, alt: "Urban Geometry 2" },
      { src: "/photography/pittsburgh/image5.jpg", width: 3840, height: 2560, alt: "Urban Geometry 1" },
    ],
  },
];
