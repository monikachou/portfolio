import { useState } from 'react';

const drivers = [
  { label: 'Selling price', kicker: 'THE REVENUE LEVER', text: 'Test how a price change affects contribution per unit and the volume needed to cover fixed costs.', question: 'What changes when the price changes?' },
  { label: 'Variable costs', kicker: 'THE COST OF EACH UNIT', text: 'Examine materials, labor, and overhead according to their cost behavior. Separate volume-sensitive costs from fixed expenses.', question: 'Which costs move with production?' },
  { label: 'Contribution margin', kicker: 'WHAT REMAINS TO COVER FIXED COSTS', text: 'Selling price less variable cost per unit shows how each product contributes toward fixed costs and, beyond break-even, profit.', question: 'What does each additional unit contribute?' },
  { label: 'Fixed costs', kicker: 'THE BREAK-EVEN CONTEXT', text: 'Evaluate fixed manufacturing expenses and overhead allocation alongside production volume to understand break-even and product profitability.', question: 'How much volume covers the fixed cost base?' },
];

export default function CostAnalysis() {
  const [active, setActive] = useState(1);
  const selected = drivers[active];
  return <div className="cost-analysis">
    <div className="visual-topline"><span className="eyebrow">PRODUCT ECONOMICS</span><span className="visual-status">CONCEPTUAL FRAMEWORK</span></div>
    <h4>From price<br /><em>to profitability.</em></h4>
    <div className="cost-stages" role="group" aria-label="Explore a cost analysis driver">{drivers.map((driver, index) => <button type="button" key={driver.label} aria-pressed={active === index} onClick={() => setActive(index)} className={'cost-stage cost-stage-' + index}><span className="stage-symbol" aria-hidden="true">{['', '−', '=', '−'][index]}</span><span>{driver.label}</span><span className="stage-index">0{index + 1}</span></button>)}</div>
    <div className="driver-explanation" aria-live="polite"><span className="eyebrow">{selected.kicker}</span><h5>{selected.question}</h5><p>{selected.text}</p></div>
  </div>;
}
