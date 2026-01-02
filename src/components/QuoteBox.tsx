import React from 'react';

const QuoteBox: React.FC<{ quote: string }> = ({ quote }) => (
  <div className="p-4 border-l-4 border-gold bg-navy text-white rounded-sm italic">
    {quote}
  </div>
);

export default QuoteBox;
