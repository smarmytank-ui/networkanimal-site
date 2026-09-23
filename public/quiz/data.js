// NetworkAnimal MVP — data.js
// 8 archetypes • 5 questions • 8 answers each

window.NA_DATA = {
  ANIMALS: {
    bear: {
      key: 'bear',
      emoji: '🐻',
      title: 'Bear — The Builder',
      coreTruth: 'You build real value before you ask for anything.',
      strength: 'You earn trust by being useful, steady, and results-oriented.',
      blindSpot: 'You can stay heads-down too long and miss visibility or momentum.',
      nextMove: 'Share one win publicly (or directly) and invite one person into your next build.',
    },

    dolphin: {
      key: 'dolphin',
      emoji: '🐬',
      title: 'Dolphin — The Connector',
      coreTruth: 'You bring people together naturally.',
      strength: 'You build warm trust quickly and make people feel included.',
      blindSpot: 'You can over-give without clear boundaries.',
      nextMove: 'Make two intentional introductions this week, with one sentence explaining why it’s a win-win.',
    },

    eagle: {
      key: 'eagle',
      emoji: '🦅',
      title: 'Eagle — The Visionary',
      coreTruth: 'You see what’s possible before others do.',
      strength: 'You connect dots across people and ideas, spotting opportunity early.',
      blindSpot: 'You may skip the small steps required to build trust.',
      nextMove: 'Send one “big idea” message with a tiny first step (15-minute call, quick intro, or shared doc).',
    },

    elephant: {
      key: 'elephant',
      emoji: '🐘',
      title: 'Elephant — The Anchor',
      coreTruth: 'You create safety and long-term trust.',
      strength: 'You remember what matters and build relationships over time.',
      blindSpot: 'You may hold onto connections that have outgrown their season.',
      nextMove: 'Reconnect with two people you value and offer something specific (intro, invite, or resource).',
    },

    fox: {
      key: 'fox',
      emoji: '🦊',
      title: 'Fox — The Navigator',
      coreTruth: 'You read the room and find the right lane.',
      strength: 'You adapt quickly and move with tact, making smart relationship decisions.',
      blindSpot: 'Avoiding vulnerability can keep connections surface-level.',
      nextMove: 'Take one relationship from “nice” to “real”: a coffee ask plus a specific collaboration idea.',
    },

    lion: {
      key: 'lion',
      emoji: '🦁',
      title: 'Lion — The Initiator',
      coreTruth: 'You move first — and others follow.',
      strength: 'You create momentum quickly and are comfortable making the first move.',
      blindSpot: 'You can move so quickly that you skip the depth that turns a contact into a real relationship.',
      nextMove: 'Pick three people you respect. Send one bold, clear message: value first, plus a simple next step.',
    },

    owl: {
      key: 'owl',
      emoji: '🦉',
      title: 'Owl — The Strategist',
      coreTruth: 'You win by thinking deeper than most.',
      strength: 'You bring clarity, insight, and great questions that raise the level of the room.',
      blindSpot: 'Overthinking can delay the first move and cost you momentum.',
      nextMove: 'Send one thoughtful follow-up: a specific observation plus one clear ask for a next step.',
    },

    wolf: {
      key: 'wolf',
      emoji: '🐺',
      title: 'Wolf — The Ally',
      coreTruth: 'You build loyalty and strong alliances.',
      strength: 'People trust you because you’re consistent, protective, and you follow through.',
      blindSpot: 'You may be slow to trust new people, even when it’s safe to open up.',
      nextMove: 'Choose one new person and give them a small win (resource, intro, or tip) within 48 hours.',
    },

    unicorn: {
      key: 'unicorn',
      emoji: '🦄',
      title: 'Unicorn — The Blend',
      coreTruth: 'You’re adaptable — a true blend with no single dominant lane.',
      strength: 'You can shift styles naturally depending on the room, the moment, and the person in front of you.',
      blindSpot: 'When you can be anything, it’s easy to be unclear. People may not know how to best work with you unless you choose a lane.',
      nextMove: 'At your next event, pick one intentional goal (one intro, one follow-up, or one deep conversation) and commit to it before you arrive.',
    },
  },

  QUESTIONS: [
    {
      id: "q1",
      text: "When you walk into a networking event, what’s your natural first move?",
      answers: [
        {
          text: "I start conversations fast and introduce people to each other.",
          w: { lion: 2, dolphin: 2, fox: 1, owl: -1 }
        },
        {
          text: "I scan the room, choose a few high-fit people, then approach.",
          w: { fox: 2, owl: 1, eagle: 1, dolphin: -1 }
        },
        {
          text: "I find someone alone or new and make sure they’re included.",
          w: { elephant: 2, wolf: 2, dolphin: 1, lion: -1 }
        },
        {
          text: "I hang back until I see a clear purpose, then join intentionally.",
          w: { owl: 2, bear: 1, fox: 1, lion: -1 }
        }
      ]
    },

    {
      id: "q2",
      text: "In conversation, you’re at your best when…",
      answers: [
        {
          text: "We’re trading ideas and possibilities — big picture and bold.",
          w: { eagle: 2, lion: 1, fox: 1, elephant: -1 }
        },
        {
          text: "We’re getting specific — goals, next steps, and clear outcomes.",
          w: { owl: 2, bear: 1, lion: 1, dolphin: -1 }
        },
        {
          text: "We’re building real rapport — stories, people, and shared context.",
          w: { dolphin: 2, elephant: 1, wolf: 1, owl: -1 }
        },
        {
          text: "We’re solving something practical — how to make it real.",
          w: { bear: 2, fox: 1, elephant: 1, eagle: -1 }
        }
      ]
    },

    {
      id: "q3",
      text: "After you meet someone great, your follow-up style is…",
      answers: [
        {
          text: "I send a crisp message and propose a specific next step.",
          w: { owl: 2, lion: 1, bear: 1, dolphin: -1 }
        },
        {
          text: "I connect them to someone who can help — value first.",
          w: { dolphin: 2, elephant: 1, fox: 1, bear: -1 }
        },
        {
          text: "I wait, reflect, then reach out with something thoughtful.",
          w: { fox: 2, eagle: 1, owl: 1, lion: -1 }
        },
        {
          text: "I keep it human — I check in and build the relationship slowly.",
          w: { elephant: 2, wolf: 1, dolphin: 1, owl: -1 }
        }
      ]
    },

    {
      id: "q4",
      text: "What do you tend to bring to a room?",
      answers: [
        {
          text: "Momentum — I spark conversations and move things forward.",
          w: { lion: 2, eagle: 1, dolphin: 1, owl: -1 }
        },
        {
          text: "Structure — I clarify who should talk and why it matters.",
          w: { owl: 2, fox: 1, bear: 1, wolf: -1 }
        },
        {
          text: "Warmth — people feel seen, included, and comfortable.",
          w: { elephant: 2, dolphin: 1, wolf: 1, lion: -1 }
        },
        {
          text: "Trust — I’m steady, reliable, and I follow through.",
          w: { bear: 2, wolf: 1, elephant: 1, eagle: -1 }
        }
      ]
    },

    {
      id: "q5",
      text: "If the vibe shifts (different crowd, different energy), you usually…",
      answers: [
        {
          text: "Adapt fast — I can play multiple roles naturally.",
          w: { dolphin: 1, fox: 1, owl: 1, lion: 1 }
        },
        {
          text: "Stick to my lane — consistency is my strength.",
          w: { bear: 2, elephant: 1, owl: 1, dolphin: -1 }
        },
        {
          text: "Change strategy — I adjust based on what will work here.",
          w: { fox: 2, owl: 1, eagle: 1, wolf: -1 }
        },
        {
          text: "Lead the shift — I set the tone and others follow.",
          w: { lion: 2, eagle: 1, dolphin: 1, elephant: -1 }
        }
      ]
    }
  ]
};
