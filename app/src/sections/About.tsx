export default function About() {
  return <>
    <aside className="tennis-interlude section-wrap" aria-labelledby="tennis-title">
      <div className="reveal"><span className="eyebrow">A DIFFERENT KIND OF PRACTICE</span><h2 id="tennis-title">Beyond the<br /><em>balance sheet.</em></h2></div>
      <div className="tennis-thought reveal"><p>“The court taught me to prepare carefully, adapt quickly, and stay focused when every point matters.”</p><span>Tennis, outside of work</span></div>
    </aside>
    <section id="about" className="about section-wrap">
      <div className="about-label reveal">
        <span className="eyebrow">04 / THE PERSON BEHIND THE NUMBERS</span>
        <h2>Beyond<br /><em>the numbers.</em></h2>
        <img className="about-portrait" src={import.meta.env.BASE_URL + 'monika-portrait.jpeg'} alt="Monika Choudhary" width={1066} height={1600} loading="lazy" decoding="async" />
        <div className="personal-principles"><span>Preparation.</span><span>Precision.</span><span>Perspective.</span></div>
      </div>
      <div className="about-copy reveal">
        <p className="large-copy">I'm Monika, a finance and accounting professional who believes the most interesting part of numbers is the story behind them.</p>
        <p>My experience spans corporate accounting, manufacturing finance, financial reporting, and data operations. From managing day-to-day accounting activities to analyzing costs, building financial models, and improving processes, I've learned that good financial information does more than explain what happened, it helps businesses decide what to do next.</p>
        <p>I'm naturally curious about how businesses work. I enjoy connecting the details to the bigger picture, asking the right questions, and finding practical ways to make complex processes simpler and more effective. Whether I'm reconciling accounts or exploring what drives profitability, I bring the same mindset: understand the problem, challenge assumptions, and find a better way forward.</p>
        <p>Outside of finance, tennis has been a big part of my life. Having competed internationally, I've learned the value of discipline, preparation, and staying composed under pressure, qualities that continue to shape how I approach both work and life.</p>
        <p>I'm excited to keep growing at the intersection of accounting, financial analysis, and business strategy, where curiosity meets meaningful impact.</p>
        <div className="education"><span className="eyebrow">THE ACADEMIC FOUNDATION</span><div><h3>Clark University</h3><p>MBA in Finance · May 2026</p><span>GPA: 3.7/4.0</span></div><div><h3>Kristu Jayanti College</h3><p>Bachelor of Business Administration · October 2020</p></div></div>
      </div>
    </section>
  </>;
}
