// ── Freedom 250 — Public attendee data ─────────────────────────────────────

export function getEventDetails() {
  return {
    name:     'Freedom 250 Celebration',
    host:     'US Embassy Tashkent',
    date:     '2026-06-10',
    location: 'Uzexpocentre, Tashkent',
  }
}

export function getProgramRundown() {
  return {
    blocks: [
      { time: '6:00 PM',      item: 'Doors open — head to the food court, grab a drink, and enjoy the warm-up set with DJ Mans.', category: 'logistics'     },
      { time: '6:00–7:30 PM', item: 'Pre-show — music, food, and festivities while guests arrive.',                                category: 'entertainment' },
      { time: '7:30 PM',      item: 'Official welcome & Presentation of the Colors, followed by the national anthems of Uzbekistan and the United States.', category: 'ceremony' },
      { time: '7:50 PM',      item: "Remarks and a celebratory toast from U.S. Ambassador Jonathan Henick.",                       category: 'ceremony'      },
      { time: '8:00 PM',      item: 'Live concert begins — Uzbek and American artists, back to back.',                              category: 'entertainment' },
      { time: '8:00 PM',      item: 'Shovqin',                                                                                     category: 'entertainment' },
      { time: '8:20 PM',      item: 'Ruhsora Emm',                                                                                 category: 'entertainment' },
      { time: '8:40 PM',      item: 'Bu Qala',                                                                                     category: 'entertainment' },
      { time: '9:05 PM',      item: 'Yamadzhi',                                                                                    category: 'entertainment' },
      { time: '9:20 PM',      item: 'Hayriniso Akbarova',                                                                          category: 'entertainment' },
      { time: '9:40 PM',      item: 'DJ King Macarella — closing set.',                                                            category: 'entertainment' },
      { time: '10:00 PM',     item: 'Grand finale & farewell — DJ Mans plays guests out. Safe travels home!',                       category: 'ceremony'      },
    ],
    note: 'Here’s what’s happening tonight. Times are approximate — come and go as you like, and enjoy the evening.',
  }
}
