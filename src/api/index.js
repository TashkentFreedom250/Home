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
      { time: '15:00', item: 'Venue opens — VIP / VVIP arrival & red carpet',  category: 'logistics'     },
      { time: '15:30', item: 'General admission gates open',                    category: 'logistics'     },
      { time: '15:30', item: 'DJ warm-up set — American classics, Top 40',     category: 'entertainment' },
      { time: '16:30', item: 'MC welcome & Freedom 250 introduction',           category: 'ceremony'      },
      { time: '16:35', item: 'National Anthem — Uzbekistan',                    category: 'ceremony'      },
      { time: '16:38', item: 'National Anthem — United States',                 category: 'ceremony'      },
      { time: '16:41', item: "Ambassador's welcoming remarks",                  category: 'ceremony'      },
      { time: '16:56', item: 'Distinguished guest remarks',                     category: 'ceremony'      },
      { time: '17:06', item: 'America 250 video presentation',                  category: 'ceremony'      },
      { time: '17:16', item: 'MC introduces opening act',                       category: 'ceremony'      },
      { time: '17:20', item: 'Opening act — live performance',                  category: 'entertainment' },
      { time: '17:50', item: 'MC interlude — acknowledgments',                  category: 'ceremony'      },
      { time: '18:00', item: 'Headliner — main performance',                    category: 'entertainment' },
      { time: '18:45', item: 'DJ transition set',                               category: 'entertainment' },
      { time: '19:00', item: 'Freedom 250 toast & anniversary moment',          category: 'ceremony'      },
      { time: '19:15', item: 'DJ — open format, dance floor open',              category: 'entertainment' },
      { time: '20:30', item: 'Event closes — guest departure',                  category: 'logistics'     },
    ],
  }
}
