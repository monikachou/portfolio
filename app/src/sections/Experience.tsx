import { Plus } from 'lucide-react';

const experiences = [
  { company: 'Red Meters LLC', role: 'Staff Accountant', dates: 'October 2026 – Present', chapter: 'Accounting ownership', headline: 'Owning the numbers behind a manufacturing business.', summary: 'Managing the accounting processes that keep a manufacturing business financially organized, while connecting cost analysis with operational decisions.', metric: 'Full-cycle', metricLabel: 'accounting ownership', tags: ['QuickBooks Online', 'Manufacturing costs', 'Internal controls'], details: [
    ['From transactions to reporting', 'Independently manage general ledger, AP/AR, cash transactions, bank reconciliations, and month-end financial reporting. Analyze costs, expenses, and historical trends to support profitability assessment and financial projections.'],
    ['Making the process stronger', 'Designed payroll tracking and weekly accrual workflows, including labor allocation and payroll liability reconciliation. Manage commission accruals and payables while improving GL classifications and reconciliation procedures.'],
  ] },
  { company: 'Markem-Imaje (Dover Corporation)', role: 'Finance & Accounting Intern', dates: 'June 2025 – May 2026', chapter: 'Multinational finance', headline: 'A more accurate close. A more efficient process.', summary: 'Supported month-end close across four US and Canadian entities, improved recurring reconciliations, and worked through longstanding accounting discrepancies.', metric: '40–50%', metricLabel: 'less manual close preparation', tags: ['SAP & NetSuite', 'Excel automation', 'Reconciliations'], details: [
    ['Scale, with attention to detail', 'Prepared journal entries across 20+ accounts and analyzed customer-level deferred revenue in NetSuite. Investigated and resolved 300+ aging AR items, including unapplied cash, payment discrepancies, and clearing errors.'],
    ['Clearing the backlog', 'Built formula-driven Excel reconciliation templates, cleared a year-long GR/IR backlog, and supported US and Canadian unclaimed property reconciliations. Standardized documentation and procedures to support audit readiness.'],
  ], highlights: ['300+ AR items resolved', '4 entities supported', '20+ accounts', 'Year-long GR/IR backlog cleared'] },
  { company: 'Target Corporation', role: 'Lead Item Data Specialist', dates: 'September 2021 – July 2024', chapter: 'Enterprise data integrity', headline: 'Building confidence in enterprise-scale data.', summary: 'Supported accurate business operations through large-scale data validation, performance reporting, and cross-functional problem-solving.', metric: '40,000+', metricLabel: 'product records validated weekly', tags: ['Data quality', 'KPI reporting', 'Pre-launch audits'], details: [
    ['Before information moves downstream', 'Led weekly validation and quality-control processes across interconnected enterprise systems. Conducted pre-launch audits to identify discrepancies before product information reached downstream operations.'],
    ['A shared standard for quality', 'Developed KPI and data-quality reports, investigated recurring issues, and coordinated resolution across teams. Standardized validation procedures and trained team members to strengthen data integrity.'],
  ] },
  { company: 'Natural Granites', role: 'Finance Analyst Intern', dates: 'June 2020 – September 2021', chapter: 'The analytical foundation', headline: 'Where analysis met practical process improvement.', summary: 'Supported accounting and management reporting, using Excel automation to make recurring financial review more efficient.', metric: '20%', metricLabel: 'productivity improvement with Excel macros', tags: ['QuickBooks', 'Excel macros', 'Expense analysis'], details: [
    ['An accounting foundation', 'Supported general ledger maintenance, bank reconciliations, and financial reporting using QuickBooks and Excel. Reviewed expense trends and prepared management reports to improve financial visibility.'],
    ['Less repetition, more useful analysis', 'Developed macros to automate recurring review and reporting tasks, improving productivity by 20%. Investigated discrepancies in records and supporting documentation to maintain accurate reporting.'],
  ] },
];

export default function Experience() {
  return <section id="experience" className="experience section-wrap">
    <div className="section-heading reveal"><div><span className="eyebrow">03 / THE CAREER JOURNEY</span><h2>Different environments.<br /><em>The same care.</em></h2></div><p>From enterprise data integrity to manufacturing accounting, each role has added a different way of understanding the business.</p></div>
    <div className="career-journey">{experiences.map((item, index) => <article className="career-entry reveal" key={item.company}>
      <div className="career-rail"><span className="career-number">0{index + 1}</span><span className="career-date">{item.dates}</span><span className="career-chapter">{item.chapter}</span></div>
      <div className="career-story">
        <div className="career-employer"><h3>{item.company}</h3><p>{item.role}</p></div>
        <h4>{item.headline}</h4><p className="career-summary">{item.summary}</p>
        <div className="career-proof"><strong>{item.metric}</strong><span>{item.metricLabel}</span></div>
        {item.highlights && <ul className="career-highlights">{item.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul>}
        <div className="career-tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
        <details className="career-details"><summary>A closer look at the work <Plus size={17} /></summary><div className="career-detail-grid">{item.details.map(([title, text]) => <div key={title}><h5>{title}</h5><p>{text}</p></div>)}</div></details>
      </div>
    </article>)}</div>
  </section>;
}
