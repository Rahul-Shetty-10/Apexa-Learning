import Script from "next/script";

export default function Home() {
  return (<>


<div className="announce"><div className="in"><span className="dot" aria-hidden="true"></span>{"Admissions Open for Classes 9 "}{"&"}{" 10 "}<a href="#contact">{"Enquire Now"}</a></div></div>

<header className="site">
  <div className="wrap nav">
    <a href="#home" className="brand" aria-label="HRB Apexa Learning, home">
      <span className="brand-mark"><img src="/assests/Apexa_logo.jpeg" alt="HRB Apexa Learning logo" width="1280" height="1280" /></span>
      <span><b>{"HRB Apexa Learning"}</b><small>{"Redefining Academic Standards"}</small></span>
    </a>
    <nav aria-label="Main navigation">
      <div className="links" id="menu">
        <a href="#home">{"Home"}</a>
        <a href="#classes">{"Classes "}{"&"}{" Fees"}</a>
        <a href="#about">{"About Us"}</a>
        <a href="#contact">{"Contact"}</a>
      </div>
    </nav>
    <a className="btn btn-primary nav-cta" href="#contact">{"Enquire Now"}</a>
    <button className="burger" id="burger" aria-label="Open menu" aria-expanded="false" aria-controls="menu"><span></span></button>
  </div>
</header>

<main>
{/* HERO */}
<section className="hero" id="home">
  <div className="wrap hero-grid">
    <div>
      <div className="eyebrow">{"Concepts first. Confidence always."}</div>
      <h1>{"Turn math anxiety into "}<span className="hl">{"problem-solving power."}</span></h1>
      {/* <p class="lead">Personalised, concept-based Mathematics learning for Karnataka State Board students in Classes 9 and 10. Build strong foundations, solve problems with clarity, and learn with confidence.</p> */}
      <div className="cta-row">
        <a className="btn btn-primary" href="#contact">{"Enquire Now\n          "}<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></a>
        <a className="btn btn-ghost" href="#classes">{"Explore Classes"}</a>
      </div>
      {/* <div class="cred">
        <span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>Led by Bhuvan Raj H</span>
        <span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>3+ years of teaching experience</span>
        <span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>Small-batch online classes</span>
      </div> */}
      <div className="mini-prices">
        <a className="glass mini" href="#classes"><small>{"Class 9 \u00b7 Mathematics"}</small><strong>{"\u20b9399"}<em>{"/month"}</em></strong></a>
        <a className="glass mini" href="#classes"><small>{"Class 10 \u00b7 Mathematics"}</small><strong>{"\u20b9399"}<em>{"/month"}</em></strong></a>
      </div>
      <p className="hero-note">{"Monday\u2013Saturday \u00b7 Morning and evening batches \u00b7 Admissions open"}</p>
    </div>

    <div style={{"position": "relative"}}>
      <span className="sym" style={{"top": "-26px", "left": "-10px"}} aria-hidden="true">{"\u03c0"}</span>
      <span className="sym" style={{"top": "40%", "right": "-26px"}} aria-hidden="true">{"\u221ax"}</span>
      <div className="glass lab reveal">
        <div className="lab-top"><b>{"Try it \u00b7 Concept playground"}</b><span className="eq" id="eq" aria-live="polite">{"y = x\u00b2"}</span></div>
        <svg className="graph" id="graph" viewBox="0 0 400 300" role="img" aria-label="Interactive graph of a quadratic equation that changes as the sliders move"></svg>
        <div className="sliders">
          <div className="sl"><label htmlFor="sa">{"a"}</label><input id="sa" type="range" min="-3" max="3" step="0.5" defaultValue="1" /><output id="oa">{"1"}</output></div>
          <div className="sl"><label htmlFor="sb">{"b"}</label><input id="sb" type="range" min="-6" max="6" step="1" defaultValue="0" /><output id="ob">{"0"}</output></div>
          <div className="sl"><label htmlFor="sc">{"c"}</label><input id="sc" type="range" min="-6" max="6" step="1" defaultValue="-4" /><output id="oc">{"-4"}</output></div>
        </div>
        <div className="facts" id="facts"></div>
      </div>
    </div>
  </div>
</section>

{/* BENEFITS */}
<div className="strip">
  <div className="wrap strip-grid">
    <div className="ben"><div className="ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20L20 4M4 4h6M7 1v6M14 17h6M14 20h6"></path></svg></div><div><b>{"Mathematics Specialist"}</b><small>{"Focused learning for Classes 9 "}{"&"}{" 10"}</small></div></div>
    <div className="ben"><div className="ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z"></path><path d="M9 12l2 2 4-4"></path></svg></div><div><b>{"Karnataka State Board"}</b><small>{"Aligned with your curriculum"}</small></div></div>
    <div className="ben"><div className="ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="5"></circle><path d="M8.5 12L7 22l5-3 5 3-1.5-10"></path></svg></div><div><b>{"3+ Years Experience"}</b><small>{"Teaching Mathematics"}</small></div></div>
    <div className="ben"><div className="ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path></svg></div><div><b>{"Flexible Schedule"}</b><small>{"Morning and evening batches"}</small></div></div>
    <div className="ben"><div className="ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="12" rx="2"></rect><path d="M8 20h8M12 16v4"></path></svg></div><div><b>{"Online Classes"}</b><small>{"Learn from anywhere"}</small></div></div>
  </div>
</div>

{/* ABOUT */}
<section className="pad" id="about">
  <div className="wrap two">
    <div className="about-visual reveal" role="img" aria-label="HRB Apexa Learning brand visual with the tagline Redefining Academic Standards">
      <img className="about-logo" src="/assests/Apexa_logo.jpeg" alt="HRB Apexa Learning - Redefining Academic Standards" width="1280" height="1280" loading="lazy" />
      <span className="chip about-chip-one" aria-hidden="true">{"x? + 2x + 1"}</span>
      <span className="chip about-chip-two" aria-hidden="true">{"?ABC = 90?"}</span>
      <span className="chip about-chip-three" aria-hidden="true">{"a? + b? = c?"}</span>
      <span className="chip about-chip-four">{"Concepts first. Confidence always."}</span>
    </div>
    <div className="reveal about-copy">
      <div className="eyebrow">{"About us"}</div>
      <h2>{"Why HRB Apexa Learning?"}</h2>
      {/* <p class="lead" style="margin-top:18px">At HRB Apexa Learning, we believe every student has the potential to excel when learning is built on understanding. Our mission is to make Mathematics clearer and more approachable by focusing on concepts, reasoning, and purposeful practice.</p> */}
      <div className="diffs">
        <div className="diff"><span className="n">{"01"}</span><h3>{"Concept-First Teaching"}</h3><p>{"Build real understanding and problem-solving skills."}</p></div>
        <div className="diff"><span className="n">{"02"}</span><h3>{"Personal Attention"}</h3><p>{"Small batches create more opportunities to ask questions and participate."}</p></div>
        <div className="diff"><span className="n">{"03"}</span><h3>{"Transparent Approach"}</h3><p>{"Clear communication about learning goals and areas for improvement."}</p></div>
        <div className="diff"><span className="n">{"04"}</span><h3>{"Student Growth"}</h3><p>{"Encourage confidence, independent thinking, and steady progress."}</p></div>
      </div>
    </div>
  </div>
</section>

{/* FOUNDER */}
<section className="pad founder">
  <div className="wrap two" style={{"position": "relative"}}>
    <div className="reveal">
      <div className="eyebrow">{"Founder "}{"&"}{" philosophy"}</div>
      <h2>{"Personal Attention. Purposeful Learning."}</h2>
      <p className="lead" style={{"marginTop": "18px"}}>{"Founded by Bhuvan Raj H, HRB Apexa Learning was created to bring greater transparency and a more thoughtful approach to Mathematics education. The focus is on helping students understand concepts, ask questions without hesitation, and develop the confidence to solve problems independently."}</p>
      <p className="formula" aria-hidden="true">{"understanding "}{">"}{" memorising"}</p>
    </div>
    <div className="f-card reveal">
      <img className="founder-photo" src="/assests/Bhuvan_pic.jpeg" alt="Bhuvan Raj H, founder and Mathematics teacher" width="896" height="1195" loading="lazy" />
      <div className="qm" aria-hidden="true">{"\u201c"}</div>
      <div className="f-name">{"Bhuvan Raj H"}</div>
      <div className="f-role">{"Founder \u00b7 Mathematics teacher"}</div>
      <ul className="f-list">
        <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6L9 17l-5-5"></path></svg>{"3+ years of teaching experience"}</li>
        <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6L9 17l-5-5"></path></svg>{"Mathematics for Classes 9 and 10"}</li>
        <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6L9 17l-5-5"></path></svg>{"Karnataka State Board"}</li>
        <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6L9 17l-5-5"></path></svg>{"Online small-batch teaching"}</li>
      </ul>
    </div>
  </div>
</section>

{/* APPROACH */}
{/* PRICING */}
<section className="pad pricing" id="classes">
  <div className="wrap">
    <div className="head-c reveal">
      <div className="eyebrow">{"Simple, transparent pricing"}</div>
      <h2>{"A Strong Foundation Starts Here."}</h2>
      <p className="lead">{"Online Mathematics learning for Karnataka State Board students in Classes 9 and 10."}</p>
    </div>
    <div className="cards2">
      <article className="glass price reveal">
        <span className="tag"><span className="dot" aria-hidden="true"></span>{"Admissions open"}</span>
        <h3>{"Class 9"}</h3><p className="sub">{"Mathematics"}</p>
        <div className="amt"><sup>{"\u20b9"}</sup>{"399"}<small>{" / month"}</small></div>
        <ul>
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6L9 17l-5-5"></path></svg>{"Karnataka State Board"}</li>
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6L9 17l-5-5"></path></svg>{"Online small-batch classes"}</li>
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6L9 17l-5-5"></path></svg>{"Scheduled learning sessions"}</li>
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6L9 17l-5-5"></path></svg>{"Doubt-clearing support"}</li>
        </ul>
        <a className="btn btn-dark" id="wa9" href="#" target="_blank" rel="noopener">{"Enquire for Class 9"}</a>
      </article>
      <article className="glass price reveal">
        <span className="tag"><span className="dot" aria-hidden="true"></span>{"Admissions open"}</span>
        <h3>{"Class 10"}</h3><p className="sub">{"Mathematics"}</p>
        <div className="amt"><sup>{"\u20b9"}</sup>{"399"}<small>{" / month"}</small></div>
        <ul>
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6L9 17l-5-5"></path></svg>{"Karnataka State Board"}</li>
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6L9 17l-5-5"></path></svg>{"Online small-batch classes"}</li>
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6L9 17l-5-5"></path></svg>{"Scheduled learning sessions"}</li>
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M20 6L9 17l-5-5"></path></svg>{"Doubt-clearing support"}</li>
        </ul>
        <a className="btn btn-primary" id="wa10" href="#" target="_blank" rel="noopener">{"Enquire for Class 10"}</a>
      </article>
    </div>
    <p className="note">{"Contact us to confirm current batch timings and admission details."}</p>
  </div>
</section>

{/* SCHEDULE */}
<section className="pad">
  <div className="wrap two">
    <div className="reveal">
      <h2>{"Consistent Practice. Steady Progress."}</h2>
      <p className="lead" style={{"margin": "18px 0 30px"}}>{"Classes run Monday to Saturday, with morning and evening batches. Contact us to ask about current timings and available places."}</p>
      <a className="btn btn-primary" id="waTime" href="#" target="_blank" rel="noopener">{"Ask About Batch Timings"}</a>
    </div>
    <div className="glass sched reveal">
      <h3>{"Weekly schedule"}</h3>
      <div className="days" role="img" aria-label="Classes Monday to Saturday, Sunday off"><span>{"Mon"}</span><span>{"Tue"}</span><span>{"Wed"}</span><span>{"Thu"}</span><span>{"Fri"}</span><span>{"Sat"}</span><span className="off">{"Sun"}</span></div>
      <div className="srow"><div className="ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.900 4.900l1.400 1.400M17.700 17.700l1.400 1.400M2 12h2M20 12h2M4.900 19.100l1.400-1.400M17.700 6.300l1.400-1.400"></path></svg></div><div><b>{"Morning batches"}</b><small>{"Timings confirmed on enquiry"}</small></div></div>
      <div className="srow"><div className="ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.800A9 9 0 1111.200 3a7 7 0 009.800 9.800z"></path></svg></div><div><b>{"Evening batches"}</b><small>{"Timings confirmed on enquiry"}</small></div></div>
      <div className="srow"><div className="ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"></rect><path d="M16 3v4M8 3v4M3 11h18"></path></svg></div><div><b>{"Scheduled sessions"}</b><small>{"Regular, planned classes"}</small></div></div>
      <div className="srow"><div className="ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"></path></svg></div><div><b>{"Doubt-clearing support"}</b><small>{"Ask questions without hesitation"}</small></div></div>
    </div>
  </div>
</section>

{/* TRUST */}
{/* Trust section temporarily hidden.
<section class="pad trust">
  <div class="wrap">
    <div class="head-c reveal" style="margin-bottom:0">
      <div class="eyebrow">Trust built through teaching</div>
      <h2>Progress That Means Something.</h2>
      <p class="lead">Every student's journey is different. We believe in transparent communication, a supportive learning environment, and helping students make meaningful academic progress.</p>
    </div>
    <div class="pillars">
      <div class="pillar reveal"><div class="ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10L12 5 2 10l10 5 10-5zM6 12v5c3 2 9 2 12 0v-5"/></svg></div><b>Teaching experience</b><p>3+ years of teaching experience.</p></div>
      <div class="pillar reveal"><div class="ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.500"/><path d="M3 20c0-3.300 2.700-6 6-6s6 2.700 6 6M15 15c3 0 6 2 6 5"/></svg></div><b>Small-batch approach</b><p>More room for questions and participation.</p></div>
      <div class="pillar reveal"><div class="ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 11-3-6.700M21 4v5h-5"/></svg></div><b>Transparent communication</b><p>Clarity on teaching, fees and learning progress.</p></div>
      <div class="pillar reveal"><div class="ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></div><b>Student &amp; parent feedback</b><p>Shared here once available.</p></div>
    </div>
    [Internal note: TESTIMONIALS: replace this block with real, approved testimonials only.
         Example: <figure class="glass" style="padding:28px"><blockquote>…</blockquote><figcaption>Name, Class</figcaption></figure>]
    <div class="testi reveal" id="testimonials"><b>Student and parent experiences will be featured here.</b><p>We only share genuine feedback that families have approved.</p></div>
  </div>
</section>
*/}

{/* CTA */}
<section className="cta">
  <div className="wrap reveal">
    <div className="eyebrow" style={{"justifyContent": "center"}}>{"Admissions are open"}</div>
    <h2>{"Let's Make Mathematics Make Sense."}</h2>
    <p>{"Take the first step towards clearer concepts and more confident learning."}</p>
    <a className="btn btn-primary" href="#contact">{"Enquire Today"}</a>
  </div>
</section>

{/* CONTACT */}
<section className="pad" id="contact">
  <div className="wrap two" style={{"alignItems": "start"}}>
    <div className="reveal">
      <div className="eyebrow">{"Get in touch"}</div>
      <h2>{"Let's Talk About Your Next Step."}</h2>
      <p className="lead" style={{"marginTop": "18px"}}>{"Ask about fees, batch timings, admissions, or whether the classes are right for your child. We'll help you understand the next steps."}</p>
      <div className="contact-list">
        <a className="c-item" href="tel:+916360453928"><div className="ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.900v3a2 2 0 01-2.200 2 19.800 19.800 0 01-8.600-3.100 19.500 19.500 0 01-6-6A19.800 19.800 0 012.100 4.200 2 2 0 014.100 2h3a2 2 0 012 1.700c.1 1 .4 1.900.7 2.800a2 2 0 01-.5 2.100L8.100 9.900a16 16 0 006 6l1.300-1.300a2 2 0 012.100-.4c.9.300 1.800.6 2.800.7a2 2 0 011.700 2z"></path></svg></div><div><small>{"Phone"}</small><b>{"+91 6360453928"}</b></div></a>
        <a className="c-item" id="waContact" href="https://wa.me/916360453928" target="_blank" rel="noopener"><div className="ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.700-5A9 9 0 118 19.300z"></path></svg></div><div><small>{"WhatsApp"}</small><b>{"+91 6360453928"}</b></div></a>
        <a className="c-item" href="mailto:hrbapexalearning@gmail.com"><div className="ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="M3 7l9 6 9-6"></path></svg></div><div><small>{"Email"}</small><b>{"hrbapexalearning@gmail.com"}</b></div></a>
      </div>
    </div>

    <form className="glass form reveal" id="form" noValidate={true}>
      <h3>{"Send an enquiry"}</h3>
      <p style={{"color": "var(--muted)", "fontSize": ".93rem"}}>{"Fields marked "}<span className="req">{"*"}</span>{" are required."}</p>
      <div className="fld" id="f-name"><label htmlFor="name">{"Student's name "}<span className="req" aria-hidden="true">{"*"}</span></label><input id="name" autoComplete="name" aria-describedby="e-name" /><div className="err" id="e-name" role="alert">{"Please enter the student's name."}</div></div>
      <div className="fld"><label htmlFor="parent">{"Parent/guardian name "}<span className="opt">{"(optional)"}</span></label><input id="parent" autoComplete="off" /></div>
      <div className="row2">
        <div className="fld" id="f-class"><label htmlFor="cls">{"Class "}<span className="req" aria-hidden="true">{"*"}</span></label>
          <select id="cls" aria-describedby="e-class"><option value="">{"Select class"}</option><option>{"Class 9"}</option><option>{"Class 10"}</option></select>
          <div className="err" id="e-class" role="alert">{"Please choose a class."}</div></div>
        <div className="fld" id="f-phone"><label htmlFor="phone">{"Phone number "}<span className="req" aria-hidden="true">{"*"}</span></label><input id="phone" type="tel" inputmode="tel" autoComplete="tel" aria-describedby="e-phone" /><div className="err" id="e-phone" role="alert">{"Enter a valid 10-digit phone number."}</div></div>
      </div>
      <div className="fld"><label htmlFor="msg">{"Message "}<span className="opt">{"(optional)"}</span></label><textarea id="msg"></textarea></div>
      <button className="btn btn-primary" type="submit">{"Send Enquiry"}</button>
      <div className="status" id="status" role="status" aria-live="polite"></div>
      <p className="privacy">{"Your details are used only to respond to your enquiry."}</p>
    </form>
  </div>
</section>
</main>

<footer>
  <div className="wrap">
    <div className="f-grid">
      <div>
        <a href="#home" className="brand">
          <span className="brand-mark"><img src="/assests/Apexa_logo.jpeg" alt="HRB Apexa Learning logo" width="1280" height="1280" /></span>
          <span><b>{"HRB Apexa Learning"}</b></span>
        </a>
        <p className="tag-line">{"Redefining Academic Standards"}</p>
        <p style={{"maxWidth": "40ch"}}>{"Concept-first online Mathematics learning for Karnataka State Board Classes 9 and 10."}</p>
      </div>
      <div><h4>{"Explore"}</h4><ul>
        <li><a href="#home">{"Home"}</a></li><li><a href="#classes">{"Classes "}{"&"}{" Fees"}</a></li><li><a href="#about">{"About Us"}</a></li><li><a href="#contact">{"Contact"}</a></li></ul></div>
      <div><h4>{"Contact"}</h4><ul>
        <li><a href="tel:+916360453928">{"Phone: +91 6360453928"}</a></li>
        <li><a href="https://wa.me/916360453928" target="_blank" rel="noopener">{"WhatsApp: +91 6360453928"}</a></li>
        <li><a href="mailto:hrbapexalearning@gmail.com" style={{"overflowWrap": "anywhere"}}>{"hrbapexalearning@gmail.com"}</a></li></ul></div>
    </div>
    <div className="copy"><span>{"\u00a9 "}<span id="yr">{"2026"}</span>{" HRB Apexa Learning. All rights reserved."}</span><span>{"Founder: Bhuvan Raj H"}</span></div>
  </div>
</footer>

<a className="wa" href="https://wa.me/916360453928" target="_blank" rel="noopener" aria-label="Chat with HRB Apexa Learning on WhatsApp">
  <svg width="30" height="30" viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M12 2a10 10 0 00-8.600 15.100L2 22l5-1.300A10 10 0 1012 2zm5.200 14.100c-.2.600-1.300 1.200-1.800 1.200-.5.100-1 .2-3.300-.7-2.800-1.200-4.600-4-4.700-4.200-.1-.2-1.100-1.500-1.100-2.800 0-1.300.7-1.900.9-2.200.2-.3.500-.3.700-.3h.5c.2 0 .4 0 .6.500.2.600.8 1.900.8 2 .1.100.1.300 0 .5l-.3.400c-.1.100-.3.300-.1.600.2.300.7 1.100 1.500 1.800 1 .9 1.800 1.100 2.100 1.300.3.100.4.100.6-.1.2-.2.700-.8.900-1.100.2-.3.400-.2.600-.1l1.900.9c.3.100.5.200.5.300.1.200.1.700-.1 1.300z"></path></svg>
</a>



<Script src="/site.js" strategy="afterInteractive" />
</>);
}
