
export interface GameState {
  currentArc: number;
  character: Character | null;
  resources: Resources;
  arcProgress: number[];
  isComplete: boolean;
}

export interface Character {
  name: string;
  description: string;
  initialResources: Resources;
}

export interface Resources {
  time: number;
  network: number;
  cash: number;
}

export interface Arc {
  id: number;
  title: string;
  description: string;
  scenarios: Scenario[];
}

export interface Scenario {
  id: number;
  title: string;
  description: string;
  choices: Choice[];
}

export interface Choice {
  id: number;
  text: string;
  effects: Resources;
  consequence: string;
  progressIncrease: number;
}

export const CHARACTERS: Character[] = [
  {
    name: "Student",
    description: "Fresh perspective, unlimited time, but limited resources and connections",
    initialResources: { time: 90, network: 20, cash: 10 }
  },
  {
    name: "Corporate",
    description: "Strong network and steady income, but time is your enemy",
    initialResources: { time: 50, network: 80, cash: 70 }
  },
  {
    name: "Freelancer",
    description: "Balanced approach with moderate resources across all areas",
    initialResources: { time: 80, network: 50, cash: 40 }
  },
  {
    name: "Ex-Founder",
    description: "Battle-tested with connections and capital, but time is precious",
    initialResources: { time: 30, network: 90, cash: 80 }
  }
];

export const ARCS: Arc[] = [
  {
    id: 1,
    title: "Find Your Big Idea",
    description: "Every founder starts here. The idea that keeps you up at night.",
    scenarios: [
      {
        id: 1,
        title: "The Spark",
        description: "You're frustrated with existing solutions. Three paths emerge:",
        choices: [
          {
            id: 1,
            text: "Research the market deeply for 3 months",
            effects: { time: -20, network: 5, cash: -5 },
            consequence: "Thorough research pays off with market insights.",
            progressIncrease: 35
          },
          {
            id: 2,
            text: "Build a quick prototype immediately",
            effects: { time: -15, network: 0, cash: -10 },
            consequence: "Fast execution beats perfect planning.",
            progressIncrease: 30
          },
          {
            id: 3,
            text: "Talk to 50 potential customers first",
            effects: { time: -10, network: 15, cash: 0 },
            consequence: "Customer validation guides your direction.",
            progressIncrease: 35
          }
        ]
      },
      {
        id: 2,
        title: "Validation Reality",
        description: "Your initial assumptions are being tested. What's your next move?",
        choices: [
          {
            id: 1,
            text: "Pivot based on customer feedback",
            effects: { time: -15, network: 10, cash: -5 },
            consequence: "Flexibility keeps you relevant.",
            progressIncrease: 35
          },
          {
            id: 2,
            text: "Double down on original vision",
            effects: { time: -10, network: -5, cash: -10 },
            consequence: "Sometimes conviction pays off.",
            progressIncrease: 30
          },
          {
            id: 3,
            text: "Test multiple variations simultaneously",
            effects: { time: -25, network: 5, cash: -15 },
            consequence: "Comprehensive testing provides clarity.",
            progressIncrease: 40
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Build Your Dream Team",
    description: "Solo founders fail. Building the right team is everything.",
    scenarios: [
      {
        id: 1,
        title: "The Co-founder Dilemma",
        description: "You need a technical co-founder. Several options present themselves:",
        choices: [
          {
            id: 1,
            text: "Partner with your brilliant but difficult friend",
            effects: { time: -5, network: -10, cash: 0 },
            consequence: "Talent with baggage. Handle with care.",
            progressIncrease: 25
          },
          {
            id: 2,
            text: "Hire a seasoned developer with equity",
            effects: { time: -10, network: 10, cash: -20 },
            consequence: "Experience costs, but delivers results.",
            progressIncrease: 35
          },
          {
            id: 3,
            text: "Learn to code yourself",
            effects: { time: -30, network: 0, cash: -5 },
            consequence: "Self-reliance has its merits.",
            progressIncrease: 40
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Build MVP & Get Users",
    description: "Build fast, learn faster. Your MVP will teach you everything.",
    scenarios: [
      {
        id: 1,
        title: "Launch Strategy",
        description: "Your MVP is ready. How do you introduce it to the world?",
        choices: [
          {
            id: 1,
            text: "Soft launch to friends and family",
            effects: { time: -5, network: 5, cash: 0 },
            consequence: "Safe start with honest feedback.",
            progressIncrease: 30
          },
          {
            id: 2,
            text: "Big launch on Product Hunt",
            effects: { time: -15, network: 20, cash: -10 },
            consequence: "High risk, high reward visibility.",
            progressIncrease: 40
          },
          {
            id: 3,
            text: "Direct outreach to target customers",
            effects: { time: -20, network: 15, cash: 0 },
            consequence: "Personal touch builds relationships.",
            progressIncrease: 35
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Survive the Grind",
    description: "The honeymoon phase is over. Now comes the real work.",
    scenarios: [
      {
        id: 1,
        title: "The Plateau",
        description: "Growth has stalled. Your team is burning out. Critical decision time:",
        choices: [
          {
            id: 1,
            text: "Push harder - work 80 hour weeks",
            effects: { time: -25, network: -10, cash: -5 },
            consequence: "Burnout looms, but sometimes it works.",
            progressIncrease: 30
          },
          {
            id: 2,
            text: "Take a step back and strategize",
            effects: { time: -10, network: 5, cash: -10 },
            consequence: "Strategic thinking saves resources.",
            progressIncrease: 35
          },
          {
            id: 3,
            text: "Bring in an experienced advisor",
            effects: { time: -5, network: 20, cash: -15 },
            consequence: "Experience guides the way forward.",
            progressIncrease: 40
          }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Secure Investment",
    description: "Money talks. But at what cost?",
    scenarios: [
      {
        id: 1,
        title: "The Pitch",
        description: "VCs are interested. Multiple term sheets on the table:",
        choices: [
          {
            id: 1,
            text: "Take the highest valuation offer",
            effects: { time: -10, network: 10, cash: 40 },
            consequence: "Money now, control later.",
            progressIncrease: 35
          },
          {
            id: 2,
            text: "Choose the most strategic investor",
            effects: { time: -15, network: 25, cash: 25 },
            consequence: "Strategic value beyond money.",
            progressIncrease: 40
          },
          {
            id: 3,
            text: "Bootstrap longer to maintain control",
            effects: { time: -20, network: 0, cash: -10 },
            consequence: "Independence has its price.",
            progressIncrease: 30
          }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Scale & Exit",
    description: "The end game. Every decision shapes your legacy.",
    scenarios: [
      {
        id: 1,
        title: "The Exit Opportunity",
        description: "A major acquisition offer lands on your desk:",
        choices: [
          {
            id: 1,
            text: "Accept the offer - secure the win",
            effects: { time: -5, network: 15, cash: 50 },
            consequence: "Success defined, legacy secured.",
            progressIncrease: 50
          },
          {
            id: 2,
            text: "Hold out for IPO",
            effects: { time: -25, network: 10, cash: -20 },
            consequence: "Bigger risks, bigger rewards.",
            progressIncrease: 45
          },
          {
            id: 3,
            text: "Stay independent and keep building",
            effects: { time: -15, network: 5, cash: -10 },
            consequence: "The journey continues.",
            progressIncrease: 40
          }
        ]
      }
    ]
  }
];
