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
    note: '',
    blocks: [
      { time: '6:00 PM',      item: 'Doors open — explore the food court, grab a drink, and settle in as DJ Mans opens the evening with a warm-up set. The White House video plays on the main screen.', category: 'logistics'     },
      { time: '6:00–7:30 PM', item: 'Pre-show — music, food, and festivities as guests arrive. DJ Mans keeps the energy going until the official program begins.',                                       category: 'entertainment' },
      { time: '7:30 PM',      item: 'Official welcome & Presentation of the Colors by the U.S. Embassy Tashkent Marine Security Guard Detachment, followed by the national anthems of the Republic of Uzbekistan and the United States of America.', category: 'ceremony' },
      { time: '7:50 PM',      item: "Ambassador's remarks & toast — welcome remarks from U.S. Ambassador Jonathan Henick, followed by a celebratory toast to 250 years of American independence and to the friendship between our two nations.", category: 'ceremony' },
      { time: '8:00 PM',      item: 'Live concert begins — a back-to-back lineup of celebrated Uzbek and American artists.', category: 'entertainment' },
      { time: '8:00 PM',      item: 'Shovqin',                                                category: 'entertainment' },
      { time: '8:20 PM',      item: 'Ruhsora Emm',                                            category: 'entertainment' },
      { time: '8:40 PM',      item: 'Bu Qala',                                                category: 'entertainment' },
      { time: '9:05 PM',      item: 'Yamadzhi',                                               category: 'entertainment' },
      { time: '9:20 PM',      item: 'Hayriniso Akbarova',                                     category: 'entertainment' },
      { time: '9:40 PM',      item: 'DJ King Macarella (closing set)',                        category: 'entertainment' },
      { time: '10:00 PM',     item: 'Grand finale & farewell — the night closes on a high note, with DJ Mans playing guests out.', category: 'ceremony' },
    ],
  }
}
