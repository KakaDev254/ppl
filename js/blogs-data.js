// Blog Posts Data - Add, edit, or remove blog posts here
const blogsData = [
  {
    id: 1,
    title: "10 Tips for Keeping Your Pet Healthy During Winter",
    slug: "pet-health-tips-winter",
    excerpt:
      "As temperatures drop, your pets need extra care. Learn essential tips to keep them warm, healthy, and happy throughout the cold season.",
    content: `
            <p>Winter brings unique challenges for pet owners. The cold weather can affect your pet's health, comfort, and safety. Here are 10 essential tips to ensure your furry friend stays healthy during the winter months.</p>
            
            <h2>1. Keep Them Warm Indoors</h2>
            <p>Provide a warm, draft-free sleeping area. Consider heated pet beds for older pets or those with arthritis. Maintain indoor temperature between 68-72°F (20-22°C).</p>
            
            <h2>2. Protect Their Paws</h2>
            <p>Ice, snow, and salt can damage paw pads. Use pet-safe ice melt, wipe paws after walks, and consider booties for sensitive dogs. Check between toes for ice balls.</p>
            
            <h2>3. Adjust Their Diet</h2>
            <p>Pets may need more calories in winter to maintain body heat, especially if they spend time outdoors. Consult your vet about adjusting food portions.</p>
            
            <h2>4. Maintain Exercise Routine</h2>
            <p>Indoor play sessions, puzzle toys, and short, frequent walks help maintain physical and mental health. Avoid exercising in extreme cold.</p>
            
            <h2>5. Watch for Hypothermia</h2>
            <p>Symptoms include shivering, lethargy, weakness, and shallow breathing. Bring pets inside immediately if you notice these signs.</p>
            
            <h2>6. Keep Them Hydrated</h2>
            <p>Ensure fresh, unfrozen water is always available. Heated water bowls prevent freezing and encourage drinking.</p>
            
            <h2>7. Groom Regularly</h2>
            <p>Dry winter air can cause dry skin. Regular brushing distributes natural oils, and avoid over-bathing which strips essential oils.</p>
            
            <h2>8. Check for Antifreeze</h2>
            <p>Antifreeze is toxic and sweet-tasting. Clean up spills immediately and store securely. Consider pet-safe antifreeze products.</p>
            
            <h2>9. Update ID Tags</h2>
            <p>Pets can get lost more easily in snow and fog. Ensure ID tags are current and consider microchipping.</p>
            
            <h2>10. Puppy and Senior Care</h2>
            <p>Young and old pets are more sensitive to cold. Limit their outdoor time and provide extra warmth indoors.</p>
            
            <p>Remember, if it's too cold for you, it's likely too cold for your pet! Always err on the side of caution during extreme weather.</p>
        `,
    author: "Dr. Sarah Wilson",
    authorImage: "images/authors/dr-sarah.jpg",
    date: "2024-11-20",
    category: "health",
    tags: ["winter care", "pet health", "safety tips"],
    image: "images/blogs/winter-pet-care.jpg",
    readTime: 5,
    views: 1247,
    featured: false,
    comments: [],
  },
  {
    id: 2,
    title: "The Benefits of Regular Pet Grooming",
    slug: "benefits-regular-pet-grooming",
    excerpt:
      "Regular grooming isn't just about looks - it's essential for your pet's health. Discover the numerous benefits of professional grooming.",
    content: `
            <p>Many pet owners view grooming as just a beauty treatment, but professional grooming offers numerous health benefits for your furry friend.</p>
            
            <h2>Health Benefits of Regular Grooming</h2>
            
            <h3>1. Early Problem Detection</h3>
            <p>Professional groomers spot potential health issues early - lumps, skin problems, ear infections, dental issues, and parasites.</p>
            
            <h3>2. Skin and Coat Health</h3>
            <p>Regular brushing distributes natural oils, removes dead hair, prevents matting, and promotes healthy skin and a shiny coat.</p>
            
            <h3>3. Prevents Painful Matting</h3>
            <p>Matted fur pulls on skin causing pain and can lead to skin infections. Regular grooming prevents this painful condition.</p>
            
            <h3>4. Nail Care</h3>
            <p>Overgrown nails cause pain, affect posture, and can lead to joint issues. Regular trimming keeps paws healthy.</p>
            
            <h3>5. Ear Health</h3>
            <p>Regular ear cleaning prevents infections, removes wax buildup, and allows early detection of ear mites or other issues.</p>
            
            <h3>6. Dental Hygiene</h3>
            <p>Professional groomers can check teeth and gums, recommend dental care products, and help prevent periodontal disease.</p>
            
            <h2>How Often Should You Groom?</h2>
            <ul>
                <li><strong>Short-haired breeds:</strong> Every 4-8 weeks</li>
                <li><strong>Long-haired breeds:</strong> Every 4-6 weeks</li>
                <li><strong>Double-coated breeds:</strong> Every 4-8 weeks</li>
                <li><strong>Nail trimming:</strong> Every 2-4 weeks</li>
                <li><strong>Brushing:</strong> Daily to weekly depending on breed</li>
            </ul>
            
            <p>Regular professional grooming combined with at-home maintenance keeps your pet healthy, comfortable, and looking their best!</p>
        `,
    author: "Emma Thompson",
    authorImage: "images/authors/emma.jpg",
    date: "2024-11-15",
    category: "grooming",
    tags: ["grooming", "pet care", "health tips"],
    image: "images/blogs/pet-grooming.jpg",
    readTime: 4,
    views: 856,
    featured: false,
    comments: [],
  },

  {
    id: 4,
    title: "Essential Puppy Training Guide",
    slug: "essential-puppy-training-guide",
    excerpt:
      "Start your puppy off on the right paw with these essential training tips. From potty training to basic commands.",
    content: `
            <p>Bringing home a new puppy is exciting! Start training early for a well-behaved adult dog.</p>
            
            <h2>Basic Commands Every Puppy Should Learn</h2>
            
            <h3>Sit</h3>
            <p>Hold a treat above their nose, slowly move it back over their head. As their nose follows, their bottom will lower. Say "sit" as they sit.</p>
            
            <h3>Stay</h3>
            <p>Start with short durations, gradually increase. Use hand signal (palm facing dog) and step back slowly.</p>
            
            <h3>Come</h3>
            <p>Use excited voice, crouch down, and reward generously when they come. Practice with long leash in safe area.</p>
            
            <h3>Down</h3>
            <p>From sitting position, lure nose to ground with treat. Slide treat forward until they lie down.</p>
            
            <h2>Potty Training Tips</h2>
            <ul>
                <li>Take puppy out frequently (every 1-2 hours)</li>
                <li>After waking, eating, playing, and before bed</li>
                <li>Choose a designated potty spot</li>
                <li>Use consistent command like "go potty"</li>
                <li>Reward immediately after they eliminate outside</li>
                <li>Clean accidents with enzymatic cleaner</li>
                <li>Never punish accidents - they don't understand</li>
            </ul>
            
            <h2>Socialization Checklist</h2>
            <ul>
                <li>Different people (men, women, children, seniors)</li>
                <li>Other friendly, vaccinated dogs</li>
                <li>Different environments (parks, stores, busy streets)</li>
                <li>Various surfaces (grass, concrete, wood, carpet)</li>
                <li>Different sounds (vacuum, traffic, doorbell)</li>
                <li>Handling (paws, ears, mouth, brushing teeth)</li>
            </ul>
            
            <h2>Common Mistakes to Avoid</h2>
            <ul>
                <li>Training sessions too long (keep 5-10 minutes)</li>
                <li>Using negative reinforcement</li>
                <li>Inconsistent commands or rules</li>
                <li>Skipping socialization window (8-16 weeks)</li>
                <li>Expecting too much too soon</li>
            </ul>
            
            <p>Remember: patience, consistency, and positive reinforcement are key to successful puppy training!</p>
        `,
    author: "Mark Roberts",
    authorImage: "images/authors/mark.jpg",
    date: "2024-11-05",
    category: "training",
    tags: ["puppy", "training", "obedience"],
    image: "images/blogs/puppy-training.jpg",
    readTime: 8,
    views: 2341,
    featured: false,
    comments: [],
  },

  {
    id: 6,
    title: "Top 10 Interactive Toys for Dogs",
    slug: "top-interactive-toys-dogs",
    excerpt:
      "Keep your dog mentally stimulated and entertained with these engaging interactive toys that challenge their mind.",
    content: `
            <p>Mental stimulation is just as important as physical exercise for dogs. Interactive toys prevent boredom and destructive behaviors.</p>
            
            <h2>1. Puzzle Toys</h2>
            <p>Hide treats under sliding compartments. Dogs must figure out how to access rewards. Great for problem-solving skills.</p>
            
            <h2>2. Snuffle Mats</h2>
            <p>Fabric mats with hidden pockets for treats. Encourages natural foraging behavior. Excellent for anxious or high-energy dogs.</p>
            
            <h2>3. Treat-Dispensing Balls</h2>
            <p>Dogs roll the ball to release treats. Adjustable difficulty levels. Keeps them engaged for hours.</p>
            
            <h2>4. Interactive Feeders</h2>
            <p>Slow feeders with maze patterns. Reduces eating speed and provides mental stimulation during meals.</p>
            
            <h2>5. Tug Toys with Resistance</h2>
            <p>Bungee cords or wall-mounted tug toys allow solo play. Strengthens jaw and neck muscles.</p>
            
            <h2>6. Hide and Seek Toys</h2>
            <p>Smaller toys hidden inside larger ones. Dogs must extract the inner toy. Satisfies prey drive.</p>
            
            <h2>7. Electronic Chase Toys</h2>
            <p>Motion-activated toys that move unpredictably. Triggers natural chase instinct.</p>
            
            <h2>8. Rope Puzzle Games</h2>
            <p>Treats hidden in knotted ropes. Dogs must untie knots to find rewards.</p>
            
            <h2>9. Scent Work Kits</h2>
            <p>Essential oils and scent targets. Tap into your dog's amazing sense of smell.</p>
            
            <h2>10. DIY Interactive Games</h2>
            <p>Muffin tin hides treats under tennis balls. Cardboard boxes with treats inside. Endless possibilities!</p>
            
            <h2>Benefits of Interactive Toys</h2>
            <ul>
                <li>Reduces anxiety and stress</li>
                <li>Prevents destructive behavior from boredom</li>
                <li>Strengthens problem-solving skills</li>
                <li>Provides mental exercise when physical activity limited</li>
                <li>Strengthens bond through interactive play</li>
                <li>Builds confidence and resilience</li>
            </ul>
            
            <h2>Safety Tips</h2>
            <ul>
                <li>Supervise play with new toys</li>
                <li>Choose appropriately sized toys</li>
                <li>Replace worn or damaged toys</li>
                <li>Rotate toys to maintain interest</li>
                <li>Match difficulty to your dog's skill level</li>
            </ul>
            
            <p>Visit our shop to find these interactive toys and more!</p>
        `,
    author: "Jessica Adams",
    authorImage: "images/authors/jessica.jpg",
    date: "2024-10-20",
    category: "toys",
    tags: ["toys", "enrichment", "playtime"],
    image: "images/blogs/dog-toys.jpg",
    readTime: 6,
    views: 1567,
    featured: false,
    comments: [],
  },
  {
    id: 7,
    title: "Why Rabies Still Matters: Lessons from Mathare",
    slug: "why-rabies-still-matters-lessons-from-mathare",
    excerpt:
      "On 15 April 2026, a rabies awareness campaign in Mathare, Nairobi, brought together two complementary forces—Zuri Health and The Pet People. What we found was both expected—and deeply concerning.",
    content: `
            <p><strong>15 April 2026</strong> — A rabies awareness campaign in Mathare, Nairobi, brought together two complementary forces—<strong>Zuri Health</strong> and <strong>The Pet People</strong>.</p>
            
            <p>What we found was both expected—and deeply concerning.</p>
            
            <p>Rabies is entirely preventable. Yet in Kenya, it still claims an estimated <strong>2,000 lives every year</strong>, most often through dog bites and scratches. Despite national efforts, the reality on the ground tells a different story—especially in low-income, high-density communities like Mathare.</p>
            
            <h2>A Disease We Know—But Don't Fully Understand</h2>
            
            <p>At first glance, awareness didn't seem like the problem.</p>
            
            <p>More than two-thirds of the people we engaged had heard of rabies. But as conversations deepened, a different picture emerged. Many did not know that rabies is <strong>almost always fatal once symptoms appear</strong>. Few understood what to do immediately after a bite. Misconceptions about how the disease spreads were common.</p>
            
            <p><strong>Awareness, it turned out, was shallow—and not translating into action.</strong></p>
            
            <h2>Where People and Animals Live Closely, Risk Increases</h2>
            
            <p>Mathare reflects a reality seen across many urban settlements in Kenya: people and animals share space, daily life, and risk.</p>
            
            <p>With an estimated <strong>7.46 million free-roaming dogs</strong> across the country, and dog populations closely tied to human density, interactions are constant. Dogs provide companionship and security. Children play alongside them. Boundaries are blurred. This relationship is powerful—but it also creates the perfect conditions for rabies transmission.</p>
            
            <h2>What We Did—and What We Saw</h2>
            
            <p>During the campaign, we engaged children, youth, and adults attending the Zuri Health-led community medical camp. Through interactive sessions and simple, visual materials in both English and Kiswahili, we focused on practical knowledge:</p>
            
            <ul>
                <li>What rabies is and how it spreads</li>
                <li>Signs and symptoms in humans and animals</li>
                <li>What to do after a bite or scratch</li>
                <li>How to prevent infection</li>
                <li>Why humane and responsible animal care matters</li>
            </ul>
            
            <p>Over <strong>700 materials were distributed</strong>, and about <strong>70% of participants</strong> were directly engaged.</p>
            
            <p>But what stood out most wasn't just what people learned—it was how they responded. Children were curious and eager to engage. Adults asked practical questions: <em>"Where do we go after a bite? How do we protect our families?"</em> Some shared personal experiences with dog bites—reminders that this is not an abstract risk, but a lived one.</p>
            
            <h2>Demand Is There—But Services Are Not</h2>
            
            <p>One message came through clearly: <strong>people are ready—but the system isn't.</strong></p>
            
            <p>Nearly half of the participants asked about <strong>dog vaccination</strong>. Many wanted to know about <strong>neutering</strong>. And one question kept coming up: <em>"When will you be back?"</em></p>
            
            <p>This wasn't casual curiosity. It was a signal of unmet need. Communities are not just lacking information—they are lacking access to consistent, reliable services.</p>
            
            <h2>Why This Partnership Matters</h2>
            
            <p>The collaboration between Zuri Health and The Pet People offers something different.</p>
            
            <ul>
                <li><strong>Zuri Health</strong> brings access to human healthcare through digital platforms and community outreach.</li>
                <li><strong>The Pet People</strong> brings expertise in animal health, welfare, and behavior change at the grassroots level.</li>
            </ul>
            
            <p>Together, they address both sides of the rabies equation:</p>
            <ul>
                <li>Prevention through animal health</li>
                <li>Response through human healthcare access</li>
            </ul>
            
            <p>In settings like Mathare, where human and animal health are deeply connected, this integrated approach isn't just useful—it's <strong>necessary</strong>.</p>
            
            <h2>What Needs to Change</h2>
            
            <p>The Mathare experience reinforces a hard truth: <strong>one-off awareness campaigns are not enough.</strong></p>
            
            <p>If rabies is to be eliminated in Kenya, efforts must shift toward:</p>
            
            <ul>
                <li><strong>Sustained community engagement</strong>, not sporadic outreach</li>
                <li><strong>Integration of awareness with services</strong>, including vaccination and neutering</li>
                <li><strong>Stronger collaboration</strong> between government, private sector, and community actors</li>
                <li><strong>Use of digital tools</strong> to maintain follow-up and improve access to care</li>
            </ul>
            
            <blockquote>
                <p>Rabies is preventable. But prevention requires more than information—it requires access, trust, and systems that work for everyone.</p>
            </blockquote>
            
            <p>ThePetPeople remains committed to being part of the solution. Through partnerships like the one with Zuri Health, and through continued grassroots engagement, we are working toward a future where no family loses a loved one to rabies.</p>
            
            <p><strong>Because every dog, every child, every community—deserves to be safe.</strong></p>
        `,
    author: "The Pet People Team",
    authorImage: "images/logo_ppl.jpg",
    date: "2026-04-15",
    category: "health",
    tags: [
      "rabies",
      "community outreach",
      "public health",
      "Mathare",
      "Zuri Health",
      "dog vaccination",
      "One Health",
    ],
    image: "images/about1.jpg",
    readTime: 6,
    views: 342,
    featured: true,
    comments: [
      {
        id: 1,
        name: "Dr. James Mwangi",
        comment:
          "Important work happening in Mathare! The One Health approach is exactly what Kenya needs to eliminate rabies. Great collaboration between Zuri Health and The Pet People.",
        date: "2026-04-16",
        likes: 24,
      },
      {
        id: 2,
        name: "Sarah K.",
        comment:
          "I was at this event! Thank you for coming to Mathare. My children learned so much about what to do if a dog bites them. When will you come back?",
        date: "2026-04-16",
        likes: 18,
      },
      {
        id: 3,
        name: "Peter Okoth",
        comment:
          "The part about 2,000 deaths annually in Kenya is shocking. We need more of these awareness campaigns across the country. Thank you The Pet People!",
        date: "2026-04-17",
        likes: 12,
      },
      {
        id: 4,
        name: "Zuri Health Team",
        comment:
          "Proud to partner with The Pet People on this important initiative. Together we can make a difference in rabies prevention! #OneHealth",
        date: "2026-04-17",
        likes: 31,
      },
    ],
  },
];

// Blog Categories
const blogCategories = [
  { id: "all", label: "All Posts", icon: "bx-news" },
  { id: "health", label: "Health & Wellness", icon: "bx-heart" },
  { id: "grooming", label: "Grooming", icon: "bx-cut" },
  { id: "behavior", label: "Behavior", icon: "bx-brain" },
  { id: "training", label: "Training", icon: "bx-dumbbell" },
  { id: "nutrition", label: "Nutrition", icon: "bx-bowl-hot" },
  { id: "toys", label: "Toys & Enrichment", icon: "bx-toy" },
];

// Function to format date
function formatBlogDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("en-US", options);
}

// Function to get reading time text
function getReadTimeText(minutes) {
  if (minutes < 1) return "< 1 min read";
  return `${minutes} min read`;
}
