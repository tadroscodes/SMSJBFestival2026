// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE to customize the page with your church's info.
// You should not need to touch any other file to update text,
// dates, sponsors, or links.
// ─────────────────────────────────────────────────────────────

const content = {
  church: {
    name: "St. Mary & St. John The Beloved Coptic Orthodox Church",
    shortName: "St. Mary & St. John The Beloved", // used in tighter spaces (footer, nav)
  },

  festival: {
    name: "15th Annual Coptic Heritage Festival",
    tagline: "A celebration of faith, fellowship, and community",
  },

  event: {
    dateLabel: "September 19–20, 2026",
    timeLabel: "Sat 12–7pm · Sun 12-5pm",
    locationName: "SMSJB",
    address: "984 Kingston Rd, Pickering",
    mapUrl: "https://www.google.com/maps/place/St.+Mary+St.+John+The+Beloved+Coptic+Orthodox+Church/@43.8244676,-79.1044034,15z/data=!4m6!3m5!1s0x89d4cea6f6e9c9d1:0xad377f2c73e9e63e!8m2!3d43.8254643!4d-79.102285!16s%2Fg%2F11clrb93ch?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D",
  },

  history: {
    heading: "Our Story",
    body: [
      "The Coptic Orthodox Church traces its roots back to the apostle St. Mark, who came to Egypt and founded the See of Alexandria in 42 AD. The Church has endured for nearly 2000 years, maintaining the teachings, traditions, and prayers handed down to us by our forefathers.",
      "In 2011, under the guidance of the late Pope Shenouda III, the church of St Mary and St John The Beloved was founded, with Fr. Daniel Bessada serving as priest, and our church planted it's roots here in Pickering the following year. ",
    ],
    festivalBlurb:
      "The St. Mary and St. John the Beloved church festival is an annual celebration of faith, fellowship, and family. We welcome everyone to join us for a weekend filled with a variety of vendors, children’s activities, authentic food, and so much more! All are welcome to come and learn about the Coptic Orthodox Church and enjoy a fun weekend with our community!",
  },

  activities: [
    {
      title: "Car Wash",
      time: "All Weekend",
      description: "Get your car hand-washed by our special volunteers while you enjoy the festivities!",
    },
    {
      title: "Dunk Tank",
      time: "All weekend",
      description: "Test your skills and try to give one of our youth a much-needed bath!",
    },
    {
      title: "Ice Cream Truck",
      time: "Saturday",
      description: "Grab a sweet treat to enjoy out in the heat!",
    },
    {
      title: "Fire Truck",
      time: "Saturday, 4pm",
      description: "Take a tour of a real firetruck, used to keep Pickering safe.",
    },
    {
      title: "Petting Zoo",
      time: "Sunday, 1-2pm",
      description: "Meet all kinds of furry friends - great for all ages!",
    },
    {
      title: "Bouncy Castles",
      time: "All Weekend",
      description: "Enjoy the thrill of our bouncy castles, suitable for both younger and older kids",
    },
  ],

  tours: {
    heading: "Church Tours And Services",
    body: "Curious about the Coptic Church? The main church building will be open throughout the festival, with knowledgeable deacons and members of the congregation available to answer any questions. Learn about Coptic architecture, relics, icons, and liturgical traditions.",
    schedule: [
      { day: "Saturday Church Tours", times: ["12:00pm - 7:00pm"] },
      { day: "Saturday Vesper Prayers", times: ["7:00pm - 8:00pm"] },
      { day: " ", times: [""] },
      { day: "Sunday Divine Liturgy", times: ["8:30am - 11:30am"] },
      { day: "Sunday Church Tours", times: ["11:30am - 5:00pm"] }
      
    ],
    note: "Tours are free and open to all, no registration required. We ask that all are respectful of the church - please limit noise and refrain from eating and drinking inside the chapel.",
  },

  sponsors: {
    heading: "With Gratitude to Our Sponsors",
    body: "This festival is made possible by the generosity of local businesses and families who support our church community.",
    // Add / remove sponsors freely. `logo` should point to a file in /public/images/sponsors/
    tiers: [
      {
        tier: "",
        names: [
          { name: "Ayman Tanios" },
          { name: "Glamour Jewelry"},

          ]
      },
      {
        tier: "",
        names: [
          { name: "Ashamalla LLP", 
            logo: "images/sponsors/ashamalla.jpeg"
          },

          { name: "Bessada Kia",
            logo: "images/sponsors/kia.jpeg"
          },
          { name: "Durham Dental Centres", 
            logo: "images/sponsors/durham-dental.jpeg"
          },
          { name: "SurNet" ,
            logo: "images/sponsors/surnet.png"
          },
        ],
      },
    ],
  },

  social: {
    youtube: "https://www.youtube.com/channel/UC2C65jFVCe_uVNznsYBk84w",
    instagram: "https://www.instagram.com/smsjbchurch/",
    facebook: "https://www.facebook.com/share/193KsZiGmg/",
    website: "https://www.smsjb.org/",
  },
}

export default content
