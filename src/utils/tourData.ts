export interface Day {
  title: string;
  activities: string[];
  meals: string[];
  accommodation: string;
}

interface Tour {
  title: string;
  duration: string;
  price: string;
  image: string;
  description: string;
  slug: string;
  highlights: string[];
  inclusions: string[];
  gallery: { src: string; alt: string; }[];
  dates: {
    startDate: string;
    endDate: string;
    price: string;
    availability: "available" | "limited" | "full";
  }[];
  reviews: {
    name: string;
    country: string;
    rating: number;
    comment: string;
    date: string;
  }[];
  itinerary: Day[];
}

const tours: Record<string, Tour> = {
  'cultural-heritage-tour': {
    title: "Cultural Heritage Tour",
    slug: "cultural-heritage-tour",
    duration: "7 Days",
    price: "From $1,999",
    image: "/images/cultural-tour.jpg",
    description: "Immerse yourself in Bhutan's rich cultural heritage on this comprehensive tour. Visit ancient monasteries, witness traditional ceremonies, and experience the authentic Bhutanese way of life.",
    highlights: [
      "Visit the iconic Tiger's Nest Monastery",
      "Experience traditional Bhutanese festivals",
      "Learn traditional arts and crafts",
      "Stay in authentic heritage hotels"
    ],
    inclusions: [
      "All accommodations in 3-4 star hotels",
      "All meals (breakfast, lunch, and dinner)",
      "Licensed Bhutanese tour guide",
      "Transportation in private vehicle",
      "All entry fees and permits",
      "Visa processing fees",
      "Government royalty and taxes"
    ],
    gallery: [
      { src: "/images/cultural-tour.jpg", alt: "Traditional Festival" },
      { src: "/images/tiger-nest.jpg", alt: "Monastery Visit" },
      { src: "/images/eastern-bhutan.png", alt: "Local Crafts" }
    ],
    dates: [
      {
        startDate: "2024-06-15",
        endDate: "2024-06-21",
        price: "$1,999",
        availability: "available"
      },
      {
        startDate: "2024-07-10",
        endDate: "2024-07-16",
        price: "$2,199",
        availability: "limited"
      }
    ],
    reviews: [
      {
        name: "Sarah Johnson",
        country: "United States",
        rating: 5,
        comment: "An incredible journey through Bhutan's rich culture. Our guide was exceptional!",
        date: "March 2024"
      }
    ],
    itinerary: [
      {
        title: "Arrival in Paro & Transfer to Thimphu",
        activities: [
          "Welcome ceremony at Paro International Airport",
          "Scenic drive to Thimphu",
          "Evening visit to Buddha Point",
          "Traditional welcome dinner"
        ],
        meals: [
          "Lunch at local restaurant",
          "Welcome dinner with cultural performance"
        ],
        accommodation: "Namgay Heritage Hotel, Thimphu"
      },
      {
        title: "Thimphu Sightseeing",
        activities: [
          "Visit National Memorial Chorten",
          "Tour the National Textile Museum",
          "Explore the Folk Heritage Museum",
          "Visit Tashichho Dzong"
        ],
        meals: [
          "Breakfast at hotel",
          "Lunch at traditional restaurant",
          "Dinner at hotel"
        ],
        accommodation: "Namgay Heritage Hotel, Thimphu"
      },
      {
        title: "Thimphu to Punakha",
        activities: [
          "Cross Dochula Pass (3,100m)",
          "Visit Druk Wangyal Chortens",
          "Hike to Chimi Lhakhang",
          "Evening visit to Punakha Dzong"
        ],
        meals: [
          "Breakfast at hotel",
          "Packed lunch",
          "Dinner at resort"
        ],
        accommodation: "Dhensa Boutique Resort, Punakha"
      }
    ]
  },
  // ... rest of the tours remain the same
};

export function getTourData(slug: string): Tour {
  return tours[slug] || null;
}

export function getRelatedTours(currentSlug: string): Tour[] {
  return Object.entries(tours)
    .filter(([slug]) => slug !== currentSlug)
    .map(([_, tour]) => tour)
    .slice(0, 3);
}

export function getAllTours(): Tour[] {
  return Object.values(tours);
}