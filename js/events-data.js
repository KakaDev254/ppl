// Events Data - Add, edit, or remove events here
const eventsData = [
  // ============================================
  // FEATURED PAST EVENTS (Shown on Homepage)
  // ============================================

  // Dog Training Academy (Monthly Ongoing - Past but recurring)
  {
    id: 11,
    title: "Dog Training Academy",
    date: "2024-04-01",
    time: "9:00 AM - 1:00 PM (Monthly)",
    location: "ThePetPeople Club, Limuru",
    category: "training",
    type: "past",
    image: "images/events/dog-training-academy.jpg",
    description:
      "Professional training programs for dogs of all ages and breeds. From basic obedience to advanced behavior modification. Monthly sessions available.",
    longDescription: `
      <p>The Dog Training Academy at ThePetPeople Club offers comprehensive training programs for dogs of all ages, breeds, and skill levels.</p>
      
      <h2>Programs Offered:</h2>
      <ul>
        <li><strong>Basic Obedience:</strong> Sit, stay, come, heel, and leash manners</li>
        <li><strong>Advanced Training:</strong> Off-leash control, distance commands, and reliability</li>
        <li><strong>Behavior Modification:</strong> Addressing aggression, anxiety, fear, and reactivity</li>
        <li><strong>Puppy Foundation:</strong> Early socialization, bite inhibition, and house training</li>
        <li><strong>Canine Good Citizen:</strong> Preparation for CGC certification</li>
      </ul>
      
      <h2>Training Methods:</h2>
      <p>We use positive reinforcement techniques that build trust and confidence. Our certified trainers work with you and your dog to achieve lasting results.</p>
      
      <h2>Upcoming Sessions:</h2>
      <p>Monthly sessions run every first Saturday of the month. Contact us to reserve your spot!</p>
    `,
    highlights: [
      "Basic obedience commands",
      "Leash training and walking etiquette",
      "Socialization with other dogs",
      "Behavior modification techniques",
      "Certificate of completion",
      "Take-home training materials",
    ],
    price: "KES 3,500 per session",
    registrationLink:
      "https://wa.me/254798503335?text=I'm%20interested%20in%20the%20Dog%20Training%20Academy",
    featured: true,
    recurring: true,
  },

  // The Margin: Off Leash (Past Event)
  {
    id: 12,
    title: "The Margin: Off Leash - Rethinking Our Relationship with Pets",
    date: "2026-04-11",
    time: "10:00 AM - 1:00 PM",
    location: "ThePetPeople Club, Tigoni, Limuru",
    category: "education",
    type: "past",
    image: "images/events/the-margin-off-leash.jpg",
    description:
      "Once a month in Nairobi, a group of curious people gathers—no agenda, no topic, no preview. On 11th April, their curiosity led them to The Pet People for an unforgettable conversation about how we relate to animals.",
    longDescription: `
      <p>Once a month in Nairobi, something unusual happens.</p>
      
      <p>A group of curious people gathers—no agenda, no topic, no preview. No one quite knows what they've signed up for until the speaker begins. For a few minutes, an idea is introduced. Then the room does what curious rooms do best: it questions, challenges, and pulls it apart.</p>
      
      <p>No slides. No script. Just the raw exchange of thought.</p>
      
      <p><strong>That's The Margin.</strong></p>
      
      <p>On 11 April, curiosity led the group somewhere unexpected—off the usual path and into the world of The Pet People.</p>
      
      <p>This wasn't a typical session. The classroom wasn't a room. It unfolded outdoors, in motion, in conversation—with animals in the background and ideas moving just as freely.</p>
      
      <h2>The Question That Started It All</h2>
      
      <p>The session, led by Dr. Vanessa, opened with a question that seemed almost playful:</p>
      
      <blockquote>"Would you rather be a village 'Bosco'—the Toyota of dogs—or an uptown Bentley?"</blockquote>
      
      <p>The room laughed. Then paused.</p>
      
      <p>Because the question wasn't simple.</p>
      
      <ul>
        <li>Guard dog or companion?</li>
        <li>Outside or indoors?</li>
        <li>Function or comfort?</li>
        <li>Survival or lifestyle?</li>
      </ul>
      
      <p>What started as a comparison quickly unraveled into something deeper. Not just about dogs—but about how we assign value, and what we expect from the animals we live with.</p>
      
      <h2>A Quiet Statement That Carried Weight</h2>
      
      <p>Then the conversation shifted.</p>
      
      <blockquote>"With the utmost respect, what we should aim to give all animals is something close to home—a healthy, natural environment. That's essentially what The Pet People is trying to offer."</blockquote>
      
      <p>It was a quiet statement, but it carried weight.</p>
      
      <p>Because it challenged a growing norm.</p>
      
      <p>In many African communities, relationships with animals were once grounded in connection rather than ownership. They were practical, intuitive, and balanced. Animals existed within daily life—not as extensions of identity, but as part of it.</p>
      
      <p>But ownership changes things.</p>
      
      <p>It introduces status. Expectation. Control.</p>
      
      <p>We begin to shape animals to fit our lifestyles—how they look, where they sleep, how they behave. And somewhere along the way, we complicate something that was once simple.</p>
      
      <p>More than that, we begin to project our own anxieties onto them.</p>
      
      <h2>What If We Stepped Back?</h2>
      
      <p>What if we allowed animals to express natural behaviors—to socialize, to exist among each other, to live in environments that make sense to them?</p>
      
      <p>Because animals don't thrive in curated perfection. They thrive in conditions that respect their nature.</p>
      
      <h2>The Practical Turn</h2>
      
      <p>But this wasn't just philosophy.</p>
      
      <p>The conversation moved, almost seamlessly, into something more grounded.</p>
      
      <p>Because how we think about animals shows up most clearly when things go wrong.</p>
      
      <ul>
        <li>If an animal is in pain, even the calmest pet can react unpredictably. Approach matters.</li>
        <li>If a dog is injured or hit, hesitation can cost time that matters.</li>
        <li>If poisoning is suspected, urgency is everything.</li>
      </ul>
      
      <h2>The Moment That Shifted the Room</h2>
      
      <p>And then came the part that shifted the room entirely:</p>
      
      <p><strong>Bites.</strong></p>
      
      <p>Whether it's a dog biting you, or your dog being bitten, the first step is immediate and simple—<strong>wash the wound under running water with soap for at least ten minutes.</strong></p>
      
      <p>It sounds small. But it can save a life.</p>
      
      <p>Because rabies doesn't leave room for delay.</p>
      
      <p>Once the virus enters the body, it travels through the nerves to the brain. The closer the entry point, the faster it progresses. And once symptoms appear, the outcome is almost always fatal.</p>
      
      <p>The difference is in <strong>what happens next.</strong></p>
      
      <h2>What Began as Light Became Profound</h2>
      
      <p>What began as a light question—Bosco or Bentley—had quietly transformed into something far more serious.</p>
      
      <ul>
        <li>A reflection on how we live with animals.</li>
        <li>A recognition of the risks we often overlook.</li>
        <li>And a reminder that care is not just about comfort—but about understanding.</li>
      </ul>
      
      <p>This was <strong>The Margin: Off Leash.</strong></p>
      
      <p>Where the classroom is wherever curiosity takes it.<br>
      Where ideas are tested, not protected.<br>
      Where a walk becomes a conversation—and a conversation becomes something that stays with you.</p>
      
      <p><em>Conversation #10.<br>
      A vet.<br>
      A walk through Tigoni.<br>
      A room full of opinions.<br>
      And a cat that had absolutely no interest in any of it.</em></p>
    `,
    highlights: [
      "Philosophical discussion on human-animal relationships",
      "Led by Dr. Vanessa in an outdoor setting",
      "Practical guidance on bite response and rabies prevention",
      "Exploration of natural pet environments vs curated lifestyles",
      "Safe, judgment-free space for curious minds",
    ],
    price: "Free (The Margin Event)",
    registrationLink: "#",
    featured: true,
    galleryLink: "gallery.html?event=the-margin",
    blogLink: "blogs.html#blog-8",
  },

  // ============================================
  // UPCOMING EVENTS (Shown on Events Page)
  // ============================================

  {
    id: 13,
    title: "Summer Pet Wellness Fair 2026",
    date: "2026-06-20",
    time: "10:00 AM - 4:00 PM",
    location: "ThePetPeople Club, Limuru",
    category: "social",
    type: "upcoming",
    image: "images/events/summer-wellness-fair.jpg",
    description:
      "A day dedicated to pet wellness! Free health checks, nutrition workshops, and fun activities for the whole family.",
    longDescription: `
      <p>Join us for the annual Summer Pet Wellness Fair! This family-friendly event brings together pet experts, vendors, and the community for a day of learning and fun.</p>
      
      <h2>Activities Include:</h2>
      <ul>
        <li>Free basic health checks by our veterinary team</li>
        <li>Nutrition workshops with expert speakers</li>
        <li>Pet product vendors and demonstrations</li>
        <li>Agility course demonstrations</li>
        <li>Kids' activities and face painting</li>
        <li>Raffle prizes and giveaways</li>
      </ul>
      
      <h2>Special Guests:</h2>
      <ul>
        <li>Dr. Vanessa - Veterinary expert</li>
        <li>Local pet product vendors</li>
        <li>Pet rescue organizations</li>
      </ul>
      
      <p>Bring your furry friends for a day of wellness and celebration!</p>
    `,
    highlights: [
      "Free veterinary health checks",
      "Nutrition and wellness workshops",
      "Pet product vendors",
      "Agility course demonstrations",
      "Kids activities and face painting",
      "Raffle prizes",
    ],
    price: "KES 200 entry (Free for members)",
    registrationLink:
      "https://wa.me/254798503335?text=I'm%20interested%20in%20the%20Summer%20Pet%20Wellness%20Fair",
    featured: true,
  },

  {
    id: 14,
    title: "Canine First Aid Certification Course",
    date: "2026-07-12",
    time: "9:00 AM - 5:00 PM",
    location: "ThePetPeople Club, Limuru",
    category: "education",
    type: "upcoming",
    image: "images/events/canine-first-aid.jpg",
    description:
      "A comprehensive one-day certification course covering emergency response, CPR, wound care, and more for dogs.",
    longDescription: `
      <p>Learn life-saving skills for your dog in this comprehensive certification course taught by veterinary professionals.</p>
      
      <h2>Course Covers:</h2>
      <ul>
        <li>Emergency scene assessment</li>
        <li>Canine CPR techniques</li>
        <li>Choking relief for dogs</li>
        <li>Wound care and bandaging</li>
        <li>Heatstroke and poisoning emergencies</li>
        <li>Bleeding control</li>
        <li>Injury assessment and transport</li>
      </ul>
      
      <h2>What You'll Receive:</h2>
      <ul>
        <li>Official Canine First Aid Certificate</li>
        <li>Comprehensive course manual</li>
        <li>Compact first aid kit for your dog</li>
        <li>Lunch and refreshments</li>
      </ul>
      
      <p>This course is ideal for pet owners, dog walkers, groomers, and anyone who works with dogs.</p>
    `,
    highlights: [
      "Certified canine first aid training",
      "Hands-on CPR practice",
      "Emergency response protocols",
      "Official certification upon completion",
      "Take-home first aid kit",
      "Comprehensive course manual",
    ],
    price: "KES 4,500 per person",
    registrationLink:
      "https://wa.me/254798503335?text=I'm%20interested%20in%20the%20Canine%20First%20Aid%20Course",
    featured: true,
  },

  // ============================================
  // ADDITIONAL UPCOMING EVENTS
  // ============================================

  {
    id: 15,
    title: "Puppy Socialization Playdate",
    date: "2026-07-25",
    time: "2:00 PM - 4:00 PM",
    location: "ThePetPeople Club, Limuru",
    category: "social",
    type: "upcoming",
    image: "images/events/puppy-playdate-social.jpg",
    description:
      "A supervised playdate for puppies under 6 months. Essential socialization in a safe, controlled environment.",
    highlights: [
      "Supervised play sessions",
      "Socialization tips for owners",
      "Vaccine verification required",
      "Small group sizes",
      "Take-home socialization guide",
    ],
    price: "KES 500 per puppy",
    registrationLink:
      "https://wa.me/254798503335?text=I'm%20interested%20in%20the%20Puppy%20Playdate",
    featured: false,
  },

  {
    id: 16,
    title: "Pet Nutrition Workshop",
    date: "2026-08-08",
    time: "11:00 AM - 2:00 PM",
    location: "ThePetPeople Club, Limuru",
    category: "education",
    type: "upcoming",
    image: "images/events/nutrition-workshop.jpg",
    description:
      "Learn how to choose the best diet for your pet. Covers raw feeding, commercial foods, and homemade options.",
    highlights: [
      "Understanding pet food labels",
      "Raw vs cooked vs commercial diets",
      "Portion control and weight management",
      "Q&A with our veterinary nutritionist",
      "Take-home feeding guide",
    ],
    price: "KES 1,000 per person",
    registrationLink:
      "https://wa.me/254798503335?text=I'm%20interested%20in%20the%20Nutrition%20Workshop",
    featured: false,
  },
];

// Event Categories for filtering
const eventCategories = [
  { id: "all", label: "All Events", icon: "bx-calendar-event" },
  { id: "upcoming", label: "Upcoming", icon: "bx-calendar-check" },
  { id: "past", label: "Past Events", icon: "bx-calendar-x" },
  { id: "social", label: "Social", icon: "bx-party" },
  { id: "education", label: "Educational", icon: "bx-book-open" },
  { id: "training", label: "Training", icon: "bx-dumbbell" },
];

// Function to format date
function formatEventDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("en-US", options);
}

// Function to check if date is past
function isPastEvent(dateString) {
  return new Date(dateString) < new Date();
}

// Auto-update event types based on date
function updateEventTypes() {
  eventsData.forEach((event) => {
    if (isPastEvent(event.date) && event.type === "upcoming") {
      event.type = "past";
    }
  });
}

// Call this on load
updateEventTypes();
