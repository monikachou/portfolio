const expertise = [
  { title: 'Accounting & Financial Reporting', description: 'Accurate records are the starting point. I connect day-to-day accounting with a consistent, well-supported close.', groups: [['Core accounting', 'General ledger · AP/AR · Journal entries & accruals'], ['Reporting & controls', 'Month-end close · Reconciliations · Financial reporting · Internal controls'], ['Specialized workflows', 'Payroll · Manufacturing labor allocation · Commission accounting']] },
  { title: 'Financial Analysis & Cost Accounting', description: 'I look beyond the total to understand the drivers behind performance, costs, and profitability.', groups: [['Performance', 'Financial statement analysis · Profitability · Forecasting'], ['Cost analysis', 'Manufacturing costs · COGS · Variances · Cost drivers']] },
  { title: 'ERP & Accounting Systems', description: 'Experience working across accounting systems, tracing transactions, and reconciling information between processes.', groups: [['Accounting platforms', 'QuickBooks Online · SAP · NetSuite'], ['Close & finance systems', 'BlackLine · HighRadius · OneStream']] },
  { title: 'Financial Modeling & Analytics', description: 'Turning recurring analysis into clear models, useful reports, and repeatable workflows.', groups: [['Modeling & automation', 'Advanced Excel · PivotTables · VLOOKUP · Macros · Google Sheets'], ['Reporting & visualization', 'Power BI · Tableau · DOMO · KPI reporting']] },
];

export default function Services() {
  return <section id="services" className="expertise section-wrap">
    <div className="section-heading reveal"><div><span className="eyebrow">01 / EXPERTISE</span><h2>Strong foundations.<br /><em>A wider perspective.</em></h2></div><p>Four connected disciplines. One practical aim: financial information people can rely on and use.</p></div>
    <div className="expertise-list">{expertise.map((item, index) => <article className="expertise-row reveal" key={item.title}>
      <span className="row-number">0{index + 1}</span>
      <div className="expertise-intro"><h3>{item.title}</h3><p>{item.description}</p></div>
      <dl className="skill-groups">{item.groups.map(([label, skills]) => <div key={label}><dt>{label}</dt><dd>{skills}</dd></div>)}</dl>
    </article>)}</div>
  </section>;
}
