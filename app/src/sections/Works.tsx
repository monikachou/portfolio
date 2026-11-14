import { Plus } from 'lucide-react';
import FinancialAnalysis from '../components/FinancialAnalysis';
import CostAnalysis from '../components/CostAnalysis';

export default function Works() {
  return <section id="works" className="projects section-wrap">
    <div className="section-heading reveal"><div><span className="eyebrow">02 / SELECTED ANALYSIS</span><h2>Good analysis starts<br /><em>with a better question.</em></h2></div><div className="project-index"><a href="#caterpillar">01 / Financial performance ↗</a><a href="#manufacturing">02 / Product profitability ↗</a></div></div>
    <article id="caterpillar" className="case-study reveal" aria-labelledby="caterpillar-title">
      <div className="case-opening"><span className="eyebrow">CASE STUDY 01 / CATERPILLAR INC.</span><h3 id="caterpillar-title">Understanding the past.<br /><em>Modeling what comes next.</em></h3><p className="case-subtitle">Financial Statement Analysis, Forecasting & Working Capital Modeling</p></div>
      <div className="case-layout">
        <FinancialAnalysis />
        <div className="case-narrative">
          <p className="case-lead">Five years of performance tell one story. The next eight quarters raise a different question: what could happen next?</p>
          <p>This independent analysis connects revenue, profitability, cash flow, and working capital assumptions with forward-looking scenarios.</p>
          <div className="business-question"><span className="eyebrow">THE QUESTION</span><h4>How can past performance help evaluate future profitability, liquidity, and funding needs?</h4></div>
          <div className="method-preview"><span>05 <small>annual years</small></span><span>20 <small>historical quarters</small></span><span>08 <small>forecast quarters</small></span></div>
          <details className="case-details"><summary>The approach & planning value <Plus size={18} /></summary><div className="case-detail-content"><h5>Build the historical picture</h5><p>Analyze revenue, profitability margins, financial ratios, and cash flow across five annual years and 20 quarters of publicly reported financial data.</p><h5>Change the assumptions</h5><p>Compare eight-quarter Base, Optimistic, and Conservative forecasts. Model inventory investment, receivable/payable cycles, and cash conversion to examine liquidity and possible funding gaps.</p><h5>Support the decision</h5><p>The model is designed to help assess planning risks, test assumptions, and understand how changes in operating performance may affect cash requirements. The scenarios are analytical tools, not realized outcomes.</p></div></details>
          <p className="tools">Microsoft Excel / Financial Modeling / Scenario Analysis</p>
        </div>
      </div>
    </article>
    <article id="manufacturing" className="case-study manufacturing-case reveal" aria-labelledby="manufacturing-title">
      <div className="case-opening"><span className="eyebrow">CASE STUDY 02 / MANUFACTURING COST OPTIMIZATION</span><h3 id="manufacturing-title">Every cost tells a story.<br /><em>Every margin reveals a decision.</em></h3><p className="case-subtitle">Manufacturing Cost Optimization & Product Profitability Analysis</p></div>
      <div className="case-layout">
        <div className="case-narrative">
          <p className="case-lead">Profitability isn’t determined by revenue alone.</p><p>Behind each product are material costs, labor, overhead, production efficiency, and pricing decisions. This project examines how they interact to shape margins.</p>
          <div className="business-question"><span className="eyebrow">THE QUESTION</span><h4>Which cost drivers matter most, and how do price, volume, and manufacturing expenses change profitability?</h4></div>
          <div className="analysis-lenses"><span>Cost structure</span><span>Variance analysis</span><span>Break-even</span></div>
          <details className="case-details"><summary>The approach & decision value <Plus size={18} /></summary><div className="case-detail-content"><h5>Understand the economics</h5><p>Model product-level direct materials, labor, manufacturing overhead, and contribution margins. Evaluate fixed and variable expenses and budget-to-actual variances to identify major cost drivers.</p><h5>Explore the trade-offs</h5><p>Use pricing, production volume, and cost sensitivity scenarios to examine break-even points and the financial implications of operational choices.</p><h5>Support the decision</h5><p>The framework supports product profitability assessment, cost control, and more informed pricing and production decisions. It does not establish measured savings or a specific financial outcome.</p></div></details>
          <p className="tools">Microsoft Excel / Power BI / Cost Accounting / Variance Analysis</p>
        </div>
        <CostAnalysis />
      </div>
    </article>
  </section>;
}
