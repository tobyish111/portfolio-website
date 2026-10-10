export const accentStyles = {
  sage: {
    soft: 'bg-sage-soft',
    text: 'text-sage',
    border: 'border-sage/20',
  },
  violet: {
    soft: 'bg-violet-soft',
    text: 'text-violet',
    border: 'border-violet/20',
  },
  amber: {
    soft: 'bg-amber-soft',
    text: 'text-amber',
    border: 'border-amber/20',
  },
  magenta: {
    soft: 'bg-magenta-soft',
    text: 'text-magenta',
    border: 'border-magenta/20',
  },
  slate: {
    soft: 'bg-slate-soft',
    text: 'text-slate',
    border: 'border-slate/20',
  },
  navy: {
    soft: 'bg-navy-soft',
    text: 'text-navy',
    border: 'border-navy/20',
  },
  moss: {
    soft: 'bg-moss-soft',
    text: 'text-moss',
    border: 'border-moss/20',
  },
};

export function getAccent(accent) {
  return accentStyles[accent] ?? accentStyles.sage;
}
