import { useState } from 'react';
import forecast from '../lib/forecast.json';

const actuals = [{ year: '2021', revenue: 50.971 }, { year: '2022', revenue: 59.427 }, { year: '2023', revenue: 67.060 }, { year: '2024', revenue: 64.809 }, { year: '2025', revenue: 67.589 }];
const cases = ['Base', 'Optimistic', 'Conservative'] as const;
const ceiling = Math.ceil(Math.max(...Object.values(forecast).flat().map(point => point.revenue)) / 5) * 5;
const plotX = (index: number) => 42 + index * 62;
const plotY = (value: number) => 224 - value / ceiling * 188;
const money = (value: number) => '$' + value.toFixed(2) + 'B';

export default function FinancialAnalysis() {
  const [view, setView] = useState<'actuals' | 'forecast'>('actuals');
  const [yearIndex, setYearIndex] = useState(4);
  const [quarterIndex, setQuarterIndex] = useState(0);
  const selected = actuals[yearIndex];

  return <div className="analysis-visual">
    <div className="visual-topline"><span className="eyebrow">CATERPILLAR / REVENUE</span><span className="visual-status">{view === 'actuals' ? 'HISTORICAL ACTUALS' : 'MODELED FORECASTS'}</span></div>
    <div className="view-switch" role="group" aria-label="Revenue chart view">
      <button type="button" aria-pressed={view === 'actuals'} onClick={() => setView('actuals')}>The past <span>2021–2025</span></button>
      <button type="button" aria-pressed={view === 'forecast'} onClick={() => setView('forecast')}>What comes next <span>8 quarters</span></button>
    </div>
    {view === 'actuals' ? <div className="actuals-view">
      <div className="chart-readout" aria-live="polite"><span>{selected.year} / ANNUAL REVENUE</span><strong>{money(selected.revenue)}</strong><p>Historical revenue · USD billions</p></div>
      <div className="actual-bars" role="group" aria-label="Select an annual revenue value">
        {actuals.map((point, index) => <button type="button" className="actual-column" key={point.year} aria-pressed={index === yearIndex} aria-label={point.year + ' revenue ' + money(point.revenue)} onClick={() => setYearIndex(index)} style={{ '--bar-size': (point.revenue / 70 * 100) + '%' } as React.CSSProperties}>
          <span>{'$' + point.revenue.toFixed(1) + 'B'}</span><span className="bar-track"><span className="actual-bar" /></span><span>{point.year}</span>
        </button>)}
      </div>
      <p className="chart-instruction">Select a year to inspect the source value.</p>
    </div> : <div className="forecast-view">
      <div className="forecast-legend">{cases.map(name => <span className={'scenario-' + name.toLowerCase()} key={name}><i />{name}</span>)}</div>
      <svg className="forecast-chart" viewBox="0 0 510 263" role="img" aria-label="Eight-quarter revenue forecasts comparing Base, Optimistic, and Conservative model scenarios. Values are modeled, not actual results. Use the quarter buttons below for exact values.">
        {[0, ceiling / 2, ceiling].map(value => <g key={value}><line x1="38" x2="482" y1={plotY(value)} y2={plotY(value)} className="chart-gridline" /><text x="30" y={plotY(value) + 4} textAnchor="end" className="axis-label">{value}</text></g>)}
        <text x="5" y="16" className="axis-label">USD B</text>
        <line x1={plotX(quarterIndex)} x2={plotX(quarterIndex)} y1="30" y2="230" className="selection-line" />
        {cases.map(name => <g key={name} className={'scenario-' + name.toLowerCase()}><polyline className="scenario-line" points={forecast[name].map((point, index) => plotX(index) + ',' + plotY(point.revenue)).join(' ')} /><circle cx={plotX(quarterIndex)} cy={plotY(forecast[name][quarterIndex].revenue)} r="5" className="scenario-dot" /></g>)}
        {forecast.Base.map((point, index) => <text className="axis-label" x={plotX(index)} y="252" textAnchor="middle" key={point.period}>{point.period.replace(':', ' ’')}</text>)}
      </svg>
      <div className="quarter-selector" role="group" aria-label="Select forecast quarter">{forecast.Base.map((point, index) => <button type="button" aria-pressed={quarterIndex === index} onClick={() => setQuarterIndex(index)} key={point.period}>{point.period.replace(':', ' ’')}</button>)}</div>
      <div className="scenario-values" aria-live="polite">{cases.map(name => <div key={name} className={'scenario-' + name.toLowerCase()}><span>{name}</span><strong>{money(forecast[name][quarterIndex].revenue)}</strong></div>)}</div>
      <p className="chart-instruction">Revenue scenarios for {forecast.Base[quarterIndex].period.replace(':', ' 20')}. Model assumptions, not predictions or realized results.</p>
    </div>}
    <div className="visual-source"><span>SUPPLIED PROJECT DATA / USD BILLIONS</span></div>
    <details className="chart-table"><summary>Read values as a table</summary><div className="table-scroll">{view === 'actuals' ? <table><caption>Historical annual revenue, USD billions</caption><thead><tr><th scope="col">Year</th><th scope="col">Revenue</th></tr></thead><tbody>{actuals.map(point => <tr key={point.year}><th scope="row">{point.year}</th><td>{point.revenue.toFixed(3)}</td></tr>)}</tbody></table> : <table><caption>Modeled quarterly revenue, USD billions</caption><thead><tr><th scope="col">Quarter</th>{cases.map(name => <th scope="col" key={name}>{name}</th>)}</tr></thead><tbody>{forecast.Base.map((point, index) => <tr key={point.period}><th scope="row">{point.period}</th>{cases.map(name => <td key={name}>{forecast[name][index].revenue.toFixed(3)}</td>)}</tr>)}</tbody></table>}</div></details>
  </div>;
}
