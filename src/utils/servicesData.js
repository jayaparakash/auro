export const serviceCards = [
    {
      id: "s1",
      title: "Residential Construction",
      tag: "Most Popular",
      image:
        "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1600&q=80",
      duration: "3-12 months",
      budget: "$100k-$2M+",
      desc:
        "From ground-up custom homes to major additions, we bring your residential vision to life with meticulous attention to detail.",
      features: ["Custom design", "Premium finishes", "Energy efficiency", "Smart home ready"],
    },
    {
      id: "s2",
      title: "Commercial Build-Outs",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
      duration: "6-18 months",
      budget: "$500k-$10M+",
      desc:
        "Functional, inspiring commercial environments that enhance productivity and reflect your brand identity.",
      features: ["Project management", "Compliance", "Timeline control", "Budget control"],
    },
    {
      id: "s3",
      title: "Kitchen Remodeling",
      tag: "Most Popular",
      image:
        "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1600&q=80",
      duration: "6-12 weeks",
      budget: "$25k-$150k",
      desc:
        "Upgrade your kitchen with modern designs, premium appliances, and functional layouts that maximize space.",
      features: ["Modern layouts", "Premium materials", "Appliance integration", "Lighting plan"],
    },
    {
      id: "s4",
      title: "Bathroom Renovation",
      image:
        "https://images.unsplash.com/photo-1600566753151-384129cf4e3f?auto=format&fit=crop&w=1600&q=80",
      duration: "4-8 weeks",
      budget: "$15k-$75k",
      desc:
        "Create a personal spa retreat with our comprehensive bathroom renovation services and luxury finishes.",
      features: ["Custom tile work", "Fixture upgrades", "Vanity install", "Waterproofing"],
    },
    {
      id: "s5",
      title: "Home Additions",
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1600&q=80",
      duration: "4-8 months",
      budget: "$75k-$500k",
      desc:
        "Add valuable square footage with additions that blend seamlessly with your existing structure.",
      features: ["Structural integration", "Matching aesthetics", "Foundation work", "Permits handled"],
    },
    {
      id: "s6",
      title: "Basement Finishing",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
      duration: "6-12 weeks",
      budget: "$30k-$100k",
      desc:
        "Transform unused space into functional living areas like bedrooms, home theaters, or offices.",
      features: ["Moisture control", "Egress windows", "Electrical systems", "Insulation"],
    },
  ];
  
  export const processSteps = [
    {
      id: "p1",
      title: "Initial Consultation",
      time: "1-2 Days",
      icon: "💬",
      desc:
        "We begin with a comprehensive consultation to understand your vision, requirements, budget, and timeline.",
      included: [
        "Site assessment and measurements",
        "Budget discussion and planning",
        "Timeline expectations review",
        "Material preferences exploration",
      ],
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80",
    },
    {
      id: "p2",
      title: "Design & Planning",
      time: "1-3 Weeks",
      icon: "✏️",
      desc:
        "Our design team creates detailed plans and collaborates with you to refine every detail.",
      included: ["3D concepts", "Plan revisions", "Structural review", "Scope finalization"],
      image:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80",
    },
    {
      id: "p3",
      title: "Permits & Approvals",
      time: "2-4 Weeks",
      icon: "📄",
      desc:
        "We handle permits and regulatory approvals to ensure compliance with local codes.",
      included: ["Permit filing", "Compliance checks", "HOA coordination", "Scheduling"],
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80",
    },
    {
      id: "p4",
      title: "Construction Phase",
      time: "Varies",
      icon: "🔨",
      desc:
        "Our skilled craftsmen bring your project to life with precision, safety, and quality control.",
      included: ["Daily supervision", "Milestone updates", "Quality checkpoints", "Change management"],
      image:
        "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1600&q=80",
    },
    {
      id: "p5",
      title: "Quality Inspection",
      time: "3-5 Days",
      icon: "🔍",
      desc:
        "Rigorous quality checks ensure every aspect meets our standards and your expectations.",
      included: ["Finish checks", "Systems testing", "Punch list", "Final corrections"],
      image:
        "https://images.unsplash.com/photo-1452669618484-5e1344f1c67d?auto=format&fit=crop&w=1600&q=80",
    },
    {
      id: "p6",
      title: "Final Walkthrough & Handover",
      time: "1 Day",
      icon: "✅",
      desc:
        "We walk through the completed project with you and hand over documentation and warranties.",
      included: ["Walkthrough", "Warranty docs", "Maintenance guide", "Closeout package"],
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80",
    },
  ];
  
  export const materialTabs = ["Flooring", "Countertops", "Cabinets", "Fixtures", "Exterior"];
  
  export const materialsByTab = {
    Flooring: [
      {
        id: "m1",
        name: "Hardwood Oak",
        type: "Natural Wood",
        price: "$8-12/sq ft",
        image:
          "https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?auto=format&fit=crop&w=1600&q=80",
        ratings: { durability: 4, maintenance: 3, cost: 3 },
      },
      {
        id: "m2",
        name: "Porcelain Tile",
        type: "Ceramic",
        price: "$5-10/sq ft",
        image:
          "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1600&q=80",
        ratings: { durability: 5, maintenance: 4, cost: 3 },
      },
      {
        id: "m3",
        name: "Luxury Vinyl Plank",
        type: "Synthetic",
        price: "$3-7/sq ft",
        image:
          "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1600&q=80",
        ratings: { durability: 4, maintenance: 5, cost: 4 },
      },
    ],
  };
  