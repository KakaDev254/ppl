// Gallery Data - Add your images and videos here
const galleryItems = [
  // IMAGES
  {
    type: "image",
    src: "images/gallery1.jpg",
    title: "Happy Dog Playing",
    category: "dogs",
    description: "Max enjoying playtime at our dog park",
  },
  {
    type: "image",
    src: "images/gallery2.jpg",
    title: "Cozy Cat Corner",
    category: "cats",
    description: "Luna relaxing in our cat boarding area",
  },
  {
    type: "image",
    src: "images/gallery3.jpg",
    title: "Professional Grooming",
    category: "grooming",
    description: "Pampering session at our grooming salon",
  },
  {
    type: "image",
    src: "images/gallery4.jpg",
    title: "Community Event",
    category: "events",
    description: "Summer pet picnic with our members",
  },
  {
    type: "image",
    src: "images/gallery5.jpg",
    title: "Dog Training Session",
    category: "training",
    description: "Obedience training in progress",
  },
  {
    type: "image",
    src: "images/gallery6.jpg",
    title: "Comfortable Boarding",
    category: "boarding",
    description: "Our cozy pet boarding facilities",
  },
  {
    type: "image",
    src: "images/gallery7.jpg",
    title: "Pet Social Hour",
    category: "events",
    description: "Pets making new friends",
  },
  {
    type: "image",
    src: "images/gallery8.jpg",
    title: "Birthday Celebration",
    category: "events",
    description: "Celebrating a special pet birthday",
  },
  {
    type: "image",
    src: "images/about1.jpg",
    title: "Caring Staff",
    category: "staff",
    description: "Our dedicated team at work",
  },

  // VIDEOS
  {
    type: "video",
    src: "videos/gallery1.mp4",
    poster: "images/gallery1-poster.jpg",
    title: "Pets at Play",
    category: "dogs",
    description: "Watch our furry friends having fun",
  },
  {
    type: "video",
    src: "videos/gallery2.mp4",
    poster: "images/gallery2-poster.jpg",
    title: "Grooming Process",
    category: "grooming",
    description: "See how we pamper your pets",
  },
  {
    type: "video",
    src: "videos/hero2.mp4",
    poster: "images/gallery3-poster.jpg",
    title: "Training Success",
    category: "training",
    description: "Happy pets learning new skills",
  },
  {
    type: "video",
    src: "videos/gallery4.mp4",
    poster: "images/gallery4-poster.jpg",
    title: "Community Moments",
    category: "events",
    description: "Highlights from our recent events",
  },
];

// Category filter buttons configuration
const categories = [
  { id: "all", label: "All", icon: "bx-grid-alt" },
  { id: "images", label: "Images", icon: "bx-image" },
  { id: "videos", label: "Videos", icon: "bx-video" },
  { id: "dogs", label: "Dogs", icon: "bx-dog" },
  { id: "cats", label: "Cats", icon: "bx-cat" },
  { id: "grooming", label: "Grooming", icon: "bx-cut" },
  { id: "training", label: "Training", icon: "bx-brain" },
  { id: "events", label: "Events", icon: "bx-calendar-event" },
  { id: "boarding", label: "Boarding", icon: "bx-home" },
  { id: "staff", label: "Staff", icon: "bx-group" },
];
