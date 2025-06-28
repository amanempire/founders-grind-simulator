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
        title: "A proven engineer with a brilliant resume is arrogant, dismissive of your vision.",
        description: "They have the skills but not the attitude. What's your move?",
        choices: [
          {
            id: 1,
            text: "Hire them — ship faster, risk culture.",
            effects: { time: -10, network: 5, cash: -10 },
            consequence: "Skill gets you to market. Ego poisons teams.",
            progressIncrease: 10
          },
          {
            id: 2,
            text: "Pass on them, wait for culture fit.",
            effects: { time: 10, network: -5, cash: 0 },
            consequence: "Culture is slow ROI. Until crisis hits.",
            progressIncrease: 10
          }
        ]
      },
      {
        id: 2,
        title: "Your best friend wants to cofound, but lacks the needed skill.",
        description: "Trust vs competence. The eternal founder dilemma.",
        choices: [
          {
            id: 1,
            text: "Say yes, trust you'll upskill them.",
            effects: { time: 5, network: 5, cash: -5 },
            consequence: "Loyalty feels safe — till pressure breaks it.",
            progressIncrease: 10
          },
          {
            id: 2,
            text: "Say no, keep friendship intact.",
            effects: { time: -5, network: -5, cash: 5 },
            consequence: "Mixing money & friends breaks more than startups.",
            progressIncrease: 10
          }
        ]
      },
      {
        id: 3,
        title: "Cofounder wants to move slow — small scope, avoid risk.",
        description: "Vision alignment crisis. Speed vs safety.",
        choices: [
          {
            id: 1,
            text: "Agree, stay cautious.",
            effects: { time: 10, network: -5, cash: -5 },
            consequence: "Caution kills momentum. But buys survival.",
            progressIncrease: 10
          },
          {
            id: 2,
            text: "Push hard, expand roadmap.",
            effects: { time: -15, network: 5, cash: -10 },
            consequence: "Aggression builds or burns.",
            progressIncrease: 10
          }
        ]
      },
      {
        id: 4,
        title: "Early hire starts gossiping about you, morale drops.",
        description: "Toxic behavior spreads fast in small teams.",
        choices: [
          {
            id: 1,
            text: "Fire instantly, show zero tolerance.",
            effects: { time: 5, network: -10, cash: -5 },
            consequence: "Culture is set by what you tolerate.",
            progressIncrease: 10
          },
          {
            id: 2,
            text: "Have a private talk, give them a chance.",
            effects: { time: -5, network: 10, cash: -5 },
            consequence: "Grace wins loyalty. Or backfires.",
            progressIncrease: 10
          }
        ]
      },
      {
        id: 5,
        title: "You're out of cash. Team asks for deferred salaries.",
        description: "The ultimate test of team loyalty and trust.",
        choices: [
          {
            id: 1,
            text: "Promise backpay & keep them.",
            effects: { time: 10, network: 5, cash: -20 },
            consequence: "Deferred salaries build hidden debt.",
            progressIncrease: 10
          },
          {
            id: 2,
            text: "Lay off & slim down.",
            effects: { time: -5, network: -10, cash: 10 },
            consequence: "Survive to fight again — with fewer scars.",
            progressIncrease: 10
          }
        ]
      },
      {
        id: 6,
        title: "Cofounder secretly freelancing on side gigs.",
        description: "Divided attention when focus is everything.",
        choices: [
          {
            id: 1,
            text: "Confront & issue ultimatum.",
            effects: { time: -5, network: 0, cash: 0 },
            consequence: "Focus is oxygen. Split focus, slow death.",
            progressIncrease: 10
          },
          {
            id: 2,
            text: "Ignore it, hope they deliver.",
            effects: { time: 5, network: -10, cash: 0 },
            consequence: "Passive founders breed chaotic startups.",
            progressIncrease: 10
          }
        ]
      },
      {
        id: 7,
        title: "You can hire a rockstar dev overseas, but barely vet them.",
        description: "Speed vs security in hiring decisions.",
        choices: [
          {
            id: 1,
            text: "Do it for speed.",
            effects: { time: -15, network: 0, cash: -15 },
            consequence: "Cheap. Fast. Maybe also broken.",
            progressIncrease: 10
          },
          {
            id: 2,
            text: "Hire local, slower but vetted.",
            effects: { time: -5, network: 5, cash: -5 },
            consequence: "Long-term trust pays.",
            progressIncrease: 10
          }
        ]
      },
      {
        id: 8,
        title: "Cofounder wants 50-50 split, you've done 80% so far.",
        description: "Equity negotiations test relationships and fairness.",
        choices: [
          {
            id: 1,
            text: "Agree to equal — keep peace.",
            effects: { time: 5, network: 0, cash: -10 },
            consequence: "Equal splits breed silent resentment.",
            progressIncrease: 10
          },
          {
            id: 2,
            text: "Negotiate hard for fair split.",
            effects: { time: -10, network: -5, cash: 5 },
            consequence: "Tough talks now, fewer regrets later.",
            progressIncrease: 10
          }
        ]
      },
      {
        id: 9,
        title: "You discover a team member padded expense reports.",
        description: "Ethics violations in early-stage startups.",
        choices: [
          {
            id: 1,
            text: "Fire them instantly.",
            effects: { time: 5, network: -5, cash: 10 },
            consequence: "Ethics lines crossed once, never uncrossed.",
            progressIncrease: 10
          },
          {
            id: 2,
            text: "Give them a second chance.",
            effects: { time: -5, network: 5, cash: -10 },
            consequence: "Compassion can cost. Or transform.",
            progressIncrease: 10
          }
        ]
      },
      {
        id: 10,
        title: "Team is burned out. Next step?",
        description: "When pushing hard meets human limits.",
        choices: [
          {
            id: 1,
            text: "Call a break — mandatory week off.",
            effects: { time: 15, network: -5, cash: -10 },
            consequence: "Burnout ignored becomes exit interviews.",
            progressIncrease: 10
          },
          {
            id: 2,
            text: "Push through to MVP launch.",
            effects: { time: -20, network: 0, cash: 5 },
            consequence: "Ship. Or implode.",
            progressIncrease: 10
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
        title: "You have a working prototype.",
        description: "Your top early tester says it's confusing.",
        choices: [
          {
            id: 1,
            text: "Scrap weeks of work to rebuild UX?",
            effects: { time: -20, network: 5, cash: -10 },
            consequence: "Is one user enough signal?",
            progressIncrease: 10
          },
          {
            id: 2,
            text: "Ship as is, hoping wider users will adapt?",
            effects: { time: 5, network: -5, cash: 0 },
            consequence: "Risk massive churn for speed.",
            progressIncrease: 10
          }
        ]
      },
      {
        id: 2,
        title: "You can only afford ONE:",
        description: "Choose your next hire carefully.",
        choices: [
          {
            id: 1,
            text: "Hire a growth hacker to rapidly get signups.",
            effects: { time: -10, network: 20, cash: -20 },
            consequence: "Users come. Will they stay?",
            progressIncrease: 10
          },
          {
            id: 2,
            text: "Hire a senior engineer to bulletproof your backend.",
            effects: { time: -20, network: 0, cash: -15 },
            consequence: "Stable product. Maybe no one tries it.",
            progressIncrease: 10
          }
        ]
      },
      {
        id: 3,
        title: "A beta user offered to introduce you to an influencer — IF you give them a special feature that no one else gets.",
        description: "Special treatment for potential viral growth.",
        choices: [
          {
            id: 1,
            text: "Agree to build a custom feature.",
            effects: { time: -15, network: 15, cash: -5 },
            consequence: "Prioritize one user over your roadmap.",
            progressIncrease: 10
          },
          {
            id: 2,
            text: "Decline. Keep your product focused.",
            effects: { time: 5, network: -10, cash: 0 },
            consequence: "Risk losing potential viral growth.",
            progressIncrease: 10
          }
        ]
      },
      {
        id: 4,
        title: "You've gathered tons of feature requests.",
        description: "You can't build all.",
        choices: [
          {
            id: 1,
            text: "Choose features that excite YOU most.",
            effects: { time: -15, network: 0, cash: -5 },
            consequence: "Founder passion sometimes misses the market.",
            progressIncrease: 10
          },
          {
            id: 2,
            text: "Build only what 3+ users have explicitly asked for.",
            effects: { time: -10, network: 10, cash: -5 },
            consequence: "Play it safe. Could be uninspiring.",
            progressIncrease: 10
          }
        ]
      },
      {
        id: 5,
        title: "Your site is ugly but functional.",
        description: "A designer offers to overhaul it for free, but needs full creative control.",
        choices: [
          {
            id: 1,
            text: "Say yes, lose control over branding.",
            effects: { time: -10, network: 5, cash: 0 },
            consequence: "Fresh look. Might hate it later.",
            progressIncrease: 10
          },
          {
            id: 2,
            text: "Say no, keep your rough design.",
            effects: { time: 5, network: -5, cash: 0 },
            consequence: "MVP might flop on first impressions.",
            progressIncrease: 10
          }
        ]
      },
      {
        id: 6,
        title: "A competitor launches with a polished app.",
        description: "Their pricing undercuts you.",
        choices: [
          {
            id: 1,
            text: "Drop your price to stay competitive.",
            effects: { time: -5, network: 5, cash: -15 },
            consequence: "Race to the bottom on margins.",
            progressIncrease: 10
          },
          {
            id: 2,
            text: "Keep your price, justify on quality.",
            effects: { time: 0, network: -5, cash: 0 },
            consequence: "Risk customers flocking to cheaper option.",
            progressIncrease: 10
          }
        ]
      },
      {
        id: 7,
        title: "You're struggling with churn.",
        description: "How do you handle churned users?",
        choices: [
          {
            id: 1,
            text: "Email all churned users, offer a 50% discount to return.",
            effects: { time: -10, network: 10, cash: -10 },
            consequence: "Might win some. Might look desperate.",
            progressIncrease: 10
          },
          {
            id: 2,
            text: "Let them go, focus on improving value first.",
            effects: { time: -15, network: -5, cash: 5 },
            consequence: "Patience or death by slow bleed.",
            progressIncrease: 10
          }
        ]
      },
      {
        id: 8,
        title: "A well-known blogger offers to write about you.",
        description: "...but only if you fake some success metrics.",
        choices: [
          {
            id: 1,
            text: "Do it — fake it till you make it.",
            effects: { time: -5, network: 15, cash: 0 },
            consequence: "Could skyrocket. Or wreck your rep.",
            progressIncrease: 10
          },
          {
            id: 2,
            text: "Say no — keep your integrity.",
            effects: { time: 5, network: -10, cash: 0 },
            consequence: "Build slow. Sleep easy.",
            progressIncrease: 10
          }
        ]
      },
      {
        id: 9,
        title: "Your product works, but retention is terrible.",
        description: "What's your next move?",
        choices: [
          {
            id: 1,
            text: "Double down on marketing to widen funnel.",
            effects: { time: -10, network: 15, cash: -20 },
            consequence: "Masking leaks with volume.",
            progressIncrease: 10
          },
          {
            id: 2,
            text: "Pause growth, overhaul onboarding.",
            effects: { time: -20, network: -5, cash: -5 },
            consequence: "Slow now, might pay later.",
            progressIncrease: 10
          }
        ]
      },
      {
        id: 10,
        title: "You get an acquisition offer.",
        description: "Small payout, would cover your last 6 months burn.",
        choices: [
          {
            id: 1,
            text: "Sell, cash out, maybe regret forever.",
            effects: { time: 20, network: -10, cash: 50 },
            consequence: "Secure bank account. Unfinished dream.",
            progressIncrease: 10
          },
          {
            id: 2,
            text: "Decline, bet on scaling bigger.",
            effects: { time: -15, network: 5, cash: -5 },
            consequence: "Could be a unicorn. Or roadkill.",
            progressIncrease: 10
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
        title: "Your CTO knocks on your door at midnight, eyes bloodshot.",
        description: "\"If we skip writing tests, we can launch in two weeks. But… we're blind to bugs.\" You look at the burn chart. Cash runs out in a month.",
        choices: [
          {
            id: 1,
            text: "\"Do it. We'll deal with chaos later.\"",
            effects: { time: -20, network: 5, cash: -5 },
            consequence: "Speed now. Possible catastrophic bugs later.",
            progressIncrease: 8
          },
          {
            id: 2,
            text: "\"No. We'll build it right.\"",
            effects: { time: -40, network: -5, cash: -10 },
            consequence: "Slow. Solid. Hope you last long enough to matter.",
            progressIncrease: 8
          }
        ]
      },
      {
        id: 2,
        title: "Your cofounder tells you privately:",
        description: "\"I think we should exaggerate our user numbers for the next pitch. Everyone does it. We'll fix it before diligence.\"",
        choices: [
          {
            id: 1,
            text: "\"Alright… survival first.\"",
            effects: { time: -10, network: 15, cash: 30 },
            consequence: "Investors hook. Integrity cracks.",
            progressIncrease: 8
          },
          {
            id: 2,
            text: "\"No lies. Even small ones.\"",
            effects: { time: 5, network: -10, cash: 0 },
            consequence: "Might stay poor. Sleep well though.",
            progressIncrease: 8
          }
        ]
      },
      {
        id: 3,
        title: "Your best developer's father falls critically ill.",
        description: "They ask for a month off, unpaid if needed.",
        choices: [
          {
            id: 1,
            text: "\"Go. Family first.\"",
            effects: { time: -20, network: 10, cash: -5 },
            consequence: "Loyalty grows. Deadlines slip.",
            progressIncrease: 8
          },
          {
            id: 2,
            text: "\"I need you here. I'm sorry.\"",
            effects: { time: -5, network: -20, cash: 0 },
            consequence: "Cold founder. Warm burn rate.",
            progressIncrease: 8
          }
        ]
      },
      {
        id: 4,
        title: "Your dashboard shows metrics dropping fast.",
        description: "An investor meeting is tomorrow. At 3AM, you find a hack to fudge churn rates temporarily.",
        choices: [
          {
            id: 1,
            text: "Deploy the fudge.",
            effects: { time: -5, network: 15, cash: 20 },
            consequence: "Short-term win. Possible long-term explosion.",
            progressIncrease: 8
          },
          {
            id: 2,
            text: "Leave it raw. Face the truth.",
            effects: { time: 5, network: -10, cash: 0 },
            consequence: "Might lose funding. Might keep soul.",
            progressIncrease: 8
          }
        ]
      },
      {
        id: 5,
        title: "Your partner cries quietly beside you in bed.",
        description: "\"I barely see you anymore. When was the last time we just... existed?\"",
        choices: [
          {
            id: 1,
            text: "\"I'll cancel tomorrow's meetings. Let's breathe.\"",
            effects: { time: 10, network: -5, cash: -5 },
            consequence: "Love rekindles. Pipeline slows.",
            progressIncrease: 8
          },
          {
            id: 2,
            text: "\"I promise. After we raise.\"",
            effects: { time: -10, network: 5, cash: 0 },
            consequence: "Promises can be cold comfort.",
            progressIncrease: 8
          }
        ]
      },
      {
        id: 6,
        title: "A desperate competitor emails you a partnership proposal — they're floundering, might sink.",
        description: "\"Let's merge resources. We'll survive together.\"",
        choices: [
          {
            id: 1,
            text: "Merge. Might share the throne.",
            effects: { time: -20, network: 20, cash: -10 },
            consequence: "Survive together, or drown twice as big.",
            progressIncrease: 8
          },
          {
            id: 2,
            text: "Decline. Let them die.",
            effects: { time: 5, network: -10, cash: 0 },
            consequence: "Colder world. Bigger slice if you last.",
            progressIncrease: 8
          }
        ]
      },
      {
        id: 7,
        title: "Your lead designer's leaving for a corporate job.",
        description: "\"I can stay… if you match their offer. It's 3x what I earn here.\"",
        choices: [
          {
            id: 1,
            text: "Find the cash, keep them.",
            effects: { time: -10, network: 5, cash: -30 },
            consequence: "Huge morale boost. Huge burn hit.",
            progressIncrease: 8
          },
          {
            id: 2,
            text: "Wish them luck, hold the line.",
            effects: { time: 5, network: -5, cash: 0 },
            consequence: "Might inspire others to jump too.",
            progressIncrease: 8
          }
        ]
      },
      {
        id: 8,
        title: "You're beyond exhausted.",
        description: "Doctor says you're borderline hypertensive. \"Take a month off or risk permanent damage.\"",
        choices: [
          {
            id: 1,
            text: "Take the break.",
            effects: { time: 30, network: -10, cash: -10 },
            consequence: "Health resets. Biz might crumble.",
            progressIncrease: 8
          },
          {
            id: 2,
            text: "Ignore it. Chase the sprint.",
            effects: { time: -15, network: 5, cash: 5 },
            consequence: "Founder martyrdom.",
            progressIncrease: 8
          }
        ]
      },
      {
        id: 9,
        title: "Your app accidentally exposed some user data.",
        description: "No one's noticed yet.",
        choices: [
          {
            id: 1,
            text: "Silently patch & pray.",
            effects: { time: -5, network: 0, cash: 0 },
            consequence: "Cheap. Ethically murky. Might explode later.",
            progressIncrease: 8
          },
          {
            id: 2,
            text: "Disclose immediately.",
            effects: { time: -15, network: -5, cash: -10 },
            consequence: "Honesty costs.",
            progressIncrease: 8
          }
        ]
      },
      {
        id: 10,
        title: "You've been offered to join a big accelerator.",
        description: "But it requires relocating across the country, away from your fragile team.",
        choices: [
          {
            id: 1,
            text: "Go, chase the opportunity.",
            effects: { time: -10, network: 20, cash: 10 },
            consequence: "Might strain the team to breaking.",
            progressIncrease: 8
          },
          {
            id: 2,
            text: "Stay, grow roots first.",
            effects: { time: 5, network: -5, cash: 0 },
            consequence: "Miss your shot. Keep your home base.",
            progressIncrease: 8
          }
        ]
      },
      {
        id: 11,
        title: "You're offered an exclusive deal by a huge enterprise client.",
        description: "They demand you kill your consumer app to focus 100% on them.",
        choices: [
          {
            id: 1,
            text: "Pivot. Become their tech team.",
            effects: { time: -20, network: 30, cash: 50 },
            consequence: "Safe. Soul might rot.",
            progressIncrease: 8
          },
          {
            id: 2,
            text: "Refuse. Keep your original dream alive.",
            effects: { time: 5, network: -10, cash: -5 },
            consequence: "Fight for vision. Fight for scraps.",
            progressIncrease: 8
          }
        ]
      },
      {
        id: 12,
        title: "At 4AM, alone in your dark office, you stare at the cash forecast.",
        description: "\"There's maybe 3 months left. Do you tell your team the brutal truth, or keep morale intact and hope?\"",
        choices: [
          {
            id: 1,
            text: "Tell them everything.",
            effects: { time: -5, network: 10, cash: -5 },
            consequence: "Honesty builds unbreakable bonds. Or mass panic.",
            progressIncrease: 8
          },
          {
            id: 2,
            text: "Keep the burden solo.",
            effects: { time: 5, network: -10, cash: 0 },
            consequence: "Protect them. Or betray them later.",
            progressIncrease: 8
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
