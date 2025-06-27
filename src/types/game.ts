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
        title: "What's your starting point?",
        description: "You want to build a startup. Where do you start?",
        choices: [
          {
            id: 1,
            text: "Scratch your own itch (personal pain)",
            effects: { time: 10, network: 0, cash: 0 },
            consequence: "Solving your own pain gives clarity. But you might be the only user.",
            progressIncrease: 10
          },
          {
            id: 2,
            text: "Copy a trending startup (clone model)",
            effects: { time: 0, network: 10, cash: 5 },
            consequence: "Trends grow fast — but competition eats you alive.",
            progressIncrease: 10
          },
          {
            id: 3,
            text: "Ask your friends about problems",
            effects: { time: -10, network: 15, cash: 0 },
            consequence: "Talking to others opens eyes — and markets.",
            progressIncrease: 10
          }
        ]
      },
      {
        id: 2,
        title: "How do you choose what to work on?",
        description: "You've listed 3 problem areas. How do you pick?",
        choices: [
          {
            id: 1,
            text: "Pick the one you're most passionate about",
            effects: { time: 5, network: 0, cash: 0 },
            consequence: "Passion keeps you going. But is there demand?",
            progressIncrease: 10
          },
          {
            id: 2,
            text: "Pick the biggest market",
            effects: { time: -5, network: 5, cash: 5 },
            consequence: "Market size matters — but you'll be one of many.",
            progressIncrease: 10
          },
          {
            id: 3,
            text: "Pick what your friends would pay for",
            effects: { time: -5, network: 10, cash: 0 },
            consequence: "Start with users who trust you. That's your edge.",
            progressIncrease: 10
          }
        ]
      },
      {
        id: 3,
        title: "You have 2 ideas — one familiar, one bold. Which one?",
        description: "Two paths diverge in front of you.",
        choices: [
          {
            id: 1,
            text: "Stick with what you know",
            effects: { time: 10, network: 0, cash: 0 },
            consequence: "Familiar terrain is safer. But are you playing small?",
            progressIncrease: 10
          },
          {
            id: 2,
            text: "Take the bold one, high risk-high reward",
            effects: { time: -10, network: 10, cash: -10 },
            consequence: "Disruption needs courage. And capital.",
            progressIncrease: 10
          }
        ]
      },
      {
        id: 4,
        title: "How do you validate your idea?",
        description: "Time to test if your idea has legs.",
        choices: [
          {
            id: 1,
            text: "Talk to 10 potential users",
            effects: { time: -15, network: 10, cash: 0 },
            consequence: "Validation saves time. Even when it hurts.",
            progressIncrease: 10
          },
          {
            id: 2,
            text: "Build an MVP and see who uses it",
            effects: { time: -25, network: 0, cash: -10 },
            consequence: "Building is tempting. But feedback is gold.",
            progressIncrease: 10
          },
          {
            id: 3,
            text: "Run a poll on LinkedIn",
            effects: { time: -5, network: 5, cash: 0 },
            consequence: "Polls are noisy signals — but quick and free.",
            progressIncrease: 10
          }
        ]
      },
      {
        id: 5,
        title: "You got mixed feedback. What do you do?",
        description: "The feedback is confusing and contradictory.",
        choices: [
          {
            id: 1,
            text: "Ignore it. Trust your gut.",
            effects: { time: 0, network: -5, cash: -5 },
            consequence: "Conviction is good. Arrogance isn't.",
            progressIncrease: 10
          },
          {
            id: 2,
            text: "Reframe the idea and re-test",
            effects: { time: -10, network: 10, cash: -5 },
            consequence: "The best ideas often evolve.",
            progressIncrease: 10
          }
        ]
      },
      {
        id: 6,
        title: "A competitor just launched with funding. Reaction?",
        description: "Your biggest fear just happened.",
        choices: [
          {
            id: 1,
            text: "Panic and pivot",
            effects: { time: -5, network: -10, cash: -5 },
            consequence: "Reacting without strategy burns more than time.",
            progressIncrease: 10
          },
          {
            id: 2,
            text: "Double down with a better angle",
            effects: { time: -15, network: 5, cash: -10 },
            consequence: "Being different > being first.",
            progressIncrease: 10
          }
        ]
      },
      {
        id: 7,
        title: "How do you test for willingness to pay?",
        description: "Time to see if people will actually pay.",
        choices: [
          {
            id: 1,
            text: "Pre-sell on a Notion page",
            effects: { time: -10, network: 10, cash: 10 },
            consequence: "Payment = validation. Nothing else comes close.",
            progressIncrease: 10
          },
          {
            id: 2,
            text: "Offer a free beta",
            effects: { time: -5, network: 15, cash: -5 },
            consequence: "Free brings users — but not necessarily customers.",
            progressIncrease: 10
          }
        ]
      },
      {
        id: 8,
        title: "You've validated demand. What now?",
        description: "Success! People want what you're building.",
        choices: [
          {
            id: 1,
            text: "Register a company and get serious",
            effects: { time: -10, network: 0, cash: -20 },
            consequence: "Legal structure is commitment. But wait till you must.",
            progressIncrease: 10
          },
          {
            id: 2,
            text: "Keep it lean and move fast",
            effects: { time: 5, network: 0, cash: 10 },
            consequence: "Speed and learning beat paperwork early on.",
            progressIncrease: 10
          }
        ]
      },
      {
        id: 9,
        title: "You're getting attention. What name do you choose?",
        description: "Time to brand your creation.",
        choices: [
          {
            id: 1,
            text: "Memorable and brandable",
            effects: { time: -5, network: 5, cash: -5 },
            consequence: "Your name is your first impression.",
            progressIncrease: 10
          },
          {
            id: 2,
            text: "Functional and SEO-friendly",
            effects: { time: -5, network: 0, cash: 5 },
            consequence: "Clarity wins over cleverness — especially online.",
            progressIncrease: 10
          }
        ]
      },
      {
        id: 10,
        title: "You're now 80% sure. How do you commit?",
        description: "The moment of truth arrives.",
        choices: [
          {
            id: 1,
            text: "Block off 6 months full-time",
            effects: { time: -50, network: 0, cash: -20 },
            consequence: "All-in is a risk. But sometimes it's the only way.",
            progressIncrease: 10
          },
          {
            id: 2,
            text: "Work part-time, validate more",
            effects: { time: -20, network: 5, cash: -5 },
            consequence: "Side hustle mode is safe — but slow.",
            progressIncrease: 10
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
