/* ============================================================
   Inline SVG diagrams for the Case Intelligence build guide.
   Keyed by name, referenced from content.js. Colors use CSS
   variables so they follow the theme.
   ============================================================ */
window.DIAGRAMS = {

  /* ============================================================
     MASTER — the whole pipeline on one canvas
     ============================================================ */
  master: `
<svg viewBox="0 0 760 470" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="ci-a" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="var(--text-3)"/></marker>
  </defs>
  <text x="380" y="24" fill="var(--text)" font-size="15" font-weight="800" text-anchor="middle">Case Intelligence — the end-to-end pipeline</text>
  <text x="380" y="42" fill="var(--text-3)" font-size="10" text-anchor="middle">a case comes in · the local model enriches it · your app routes it — no human triage</text>

  <!-- incoming -->
  <rect x="30" y="180" width="120" height="70" rx="12" fill="#0e1422" stroke="var(--blue)"/>
  <text x="90" y="210" fill="var(--blue)" font-size="11" font-weight="700" text-anchor="middle">New case</text>
  <text x="90" y="228" fill="var(--text-3)" font-size="8" text-anchor="middle">raw ticket text</text>

  <!-- app -->
  <rect x="190" y="180" width="120" height="70" rx="12" fill="rgba(129,140,248,0.1)" stroke="var(--indigo)"/>
  <text x="250" y="205" fill="var(--indigo)" font-size="11" font-weight="700" text-anchor="middle">Your app</text>
  <text x="250" y="223" fill="var(--text-3)" font-size="8" text-anchor="middle">builds the prompt</text>
  <text x="250" y="236" fill="var(--text-3)" font-size="8" text-anchor="middle">L07</text>

  <!-- ollama box (offline) -->
  <rect x="345" y="70" width="230" height="290" rx="14" fill="rgba(45,212,191,0.04)" stroke="var(--teal)" stroke-dasharray="5 4"/>
  <text x="460" y="92" fill="var(--teal)" font-size="10" font-weight="700" text-anchor="middle">Ollama · Llama 3.1 — runs locally, offline · L01</text>
  ${[['Classify domain','var(--purple)','L02'],['Summarize','var(--cyan)','L03'],['Extract tags','var(--green)','L04'],['Sentiment + urgency','var(--amber)','L05']].map(function(t,i){return '<rect x="365" y="'+(108+i*58)+'" width="190" height="46" rx="9" fill="#0e1422" stroke="'+t[1]+'"/>'+'<text x="460" y="'+(130+i*58)+'" fill="'+t[1]+'" font-size="11" font-weight="600" text-anchor="middle">'+t[0]+'</text>'+'<text x="540" y="'+(147+i*58)+'" fill="var(--text-3)" font-size="8" text-anchor="end">'+t[2]+'</text>';}).join('')}

  <!-- structured result -->
  <rect x="610" y="120" width="120" height="90" rx="12" fill="rgba(251,191,36,0.08)" stroke="var(--amber)"/>
  <text x="670" y="145" fill="var(--amber)" font-size="10" font-weight="700" text-anchor="middle">Structured</text>
  <text x="670" y="160" fill="var(--amber)" font-size="10" font-weight="700" text-anchor="middle">JSON</text>
  <text x="670" y="182" fill="var(--text-3)" font-size="8" text-anchor="middle">validated · L06</text>

  <!-- triage/route -->
  <rect x="610" y="250" width="120" height="90" rx="12" fill="rgba(74,222,128,0.08)" stroke="var(--green)"/>
  <text x="670" y="278" fill="var(--green)" font-size="10" font-weight="700" text-anchor="middle">Auto-triage</text>
  <text x="670" y="296" fill="var(--text-3)" font-size="8" text-anchor="middle">route · prioritize</text>
  <text x="670" y="309" fill="var(--text-3)" font-size="8" text-anchor="middle">save · dashboard</text>

  <line x1="150" y1="215" x2="188" y2="215" stroke="var(--text-3)" marker-end="url(#ci-a)"/>
  <line x1="310" y1="215" x2="343" y2="215" stroke="var(--text-3)" marker-end="url(#ci-a)"/>
  <line x1="575" y1="165" x2="608" y2="165" stroke="var(--text-3)" marker-end="url(#ci-a)"/>
  <line x1="670" y1="210" x2="670" y2="248" stroke="var(--text-3)" marker-end="url(#ci-a)"/>
  <text x="380" y="440" fill="var(--text-3)" font-size="9.5" text-anchor="middle">every box below is one level of this guide — build them in order</text>
</svg>`,

  /* before/after triage */
  triage: `
<svg viewBox="0 0 700 230" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="tr-a" markerWidth="8" markerHeight="8" refX="6" refY="2.5" orient="auto"><path d="M0,0 L6,2.5 L0,5 Z" fill="var(--text-3)"/></marker></defs>
  <text x="175" y="26" fill="var(--rose)" font-size="12" font-weight="700" text-anchor="middle">Manual triage (today)</text>
  <rect x="40" y="44" width="90" height="34" rx="7" fill="#0e1422" stroke="var(--rose)"/><text x="85" y="65" fill="var(--text-2)" font-size="9" text-anchor="middle">case</text>
  <rect x="150" y="44" width="130" height="34" rx="7" fill="rgba(251,113,133,0.08)" stroke="var(--rose)"/><text x="215" y="60" fill="var(--rose)" font-size="9" text-anchor="middle">human reads it all</text><text x="215" y="72" fill="var(--text-3)" font-size="8" text-anchor="middle">slow · inconsistent</text>
  <line x1="130" y1="61" x2="148" y2="61" stroke="var(--text-3)" marker-end="url(#tr-a)"/>
  <rect x="110" y="110" width="130" height="34" rx="7" fill="#0e1422" stroke="var(--rose)"/><text x="175" y="131" fill="var(--text-2)" font-size="9" text-anchor="middle">assign &amp; prioritize</text>
  <line x1="215" y1="78" x2="185" y2="108" stroke="var(--text-3)" marker-end="url(#tr-a)"/>
  <text x="175" y="176" fill="var(--rose)" font-size="9" text-anchor="middle">minutes per case · a growing backlog</text>

  <line x1="350" y1="20" x2="350" y2="210" stroke="var(--line-2)" stroke-dasharray="4 4"/>

  <text x="525" y="26" fill="var(--green)" font-size="12" font-weight="700" text-anchor="middle">AI-assisted triage (goal)</text>
  <rect x="400" y="44" width="80" height="34" rx="7" fill="#0e1422" stroke="var(--green)"/><text x="440" y="65" fill="var(--text-2)" font-size="9" text-anchor="middle">case</text>
  <rect x="500" y="44" width="150" height="34" rx="7" fill="rgba(45,212,191,0.08)" stroke="var(--teal)"/><text x="575" y="60" fill="var(--teal)" font-size="9" text-anchor="middle">model pre-fills fields</text><text x="575" y="72" fill="var(--text-3)" font-size="8" text-anchor="middle">domain·summary·tags·urgency</text>
  <line x1="480" y1="61" x2="498" y2="61" stroke="var(--text-3)" marker-end="url(#tr-a)"/>
  <rect x="460" y="110" width="130" height="34" rx="7" fill="rgba(74,222,128,0.1)" stroke="var(--green)"/><text x="525" y="126" fill="var(--green)" font-size="9" text-anchor="middle">auto-routed</text><text x="525" y="138" fill="var(--text-3)" font-size="8" text-anchor="middle">human just reviews</text>
  <line x1="575" y1="78" x2="540" y2="108" stroke="var(--text-3)" marker-end="url(#tr-a)"/>
  <text x="525" y="176" fill="var(--green)" font-size="9" text-anchor="middle">seconds per case · consistent · private</text>
</svg>`,

  /* ollama architecture / offline */
  ollamaArch: `
<svg viewBox="0 0 700 250" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="ol-a" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="var(--text-3)"/></marker></defs>
  <rect x="40" y="40" width="420" height="180" rx="16" fill="rgba(45,212,191,0.04)" stroke="var(--teal)"/>
  <text x="60" y="64" fill="var(--teal)" font-size="11" font-weight="700">Your machine / server — nothing leaves it</text>
  <rect x="70" y="90" width="150" height="90" rx="12" fill="rgba(129,140,248,0.1)" stroke="var(--indigo)"/>
  <text x="145" y="120" fill="var(--indigo)" font-size="11" font-weight="700" text-anchor="middle">Your app</text>
  <text x="145" y="140" fill="var(--text-3)" font-size="8.5" text-anchor="middle">Spring / any backend</text>
  <rect x="290" y="90" width="150" height="90" rx="12" fill="rgba(45,212,191,0.08)" stroke="var(--teal)"/>
  <text x="365" y="118" fill="var(--teal)" font-size="11" font-weight="700" text-anchor="middle">Ollama</text>
  <text x="365" y="136" fill="var(--text-3)" font-size="8.5" text-anchor="middle">serves Llama 3.1</text>
  <text x="365" y="150" fill="var(--text-3)" font-size="8.5" text-anchor="middle">on your GPU/CPU</text>
  <line x1="220" y1="125" x2="288" y2="125" stroke="var(--text-3)" marker-end="url(#ol-a)"/>
  <line x1="288" y1="145" x2="220" y2="145" stroke="var(--green)" marker-end="url(#ol-a)"/>
  <text x="254" y="118" fill="var(--text-3)" font-size="7.5" text-anchor="middle">HTTP</text>
  <text x="254" y="168" fill="var(--text-3)" font-size="7.5" text-anchor="middle">:11434</text>
  <line x1="500" y1="130" x2="560" y2="130" stroke="var(--rose)" stroke-width="2" stroke-dasharray="5 4"/>
  <line x1="560" y1="110" x2="560" y2="150" stroke="var(--rose)" stroke-width="2"/>
  <circle cx="620" cy="130" r="34" fill="none" stroke="var(--rose)"/><text x="620" y="126" fill="var(--rose)" font-size="9" text-anchor="middle">cloud</text><text x="620" y="140" fill="var(--rose)" font-size="9" text-anchor="middle">/ internet</text>
  <text x="530" y="185" fill="var(--rose)" font-size="9" text-anchor="middle">blocked — no</text>
  <text x="530" y="197" fill="var(--rose)" font-size="9" text-anchor="middle">data egress</text>
  <text x="350" y="240" fill="var(--text-3)" font-size="9.5" text-anchor="middle">offline &amp; local = sensitive case data never leaves your walls (the whole reason for this design)</text>
</svg>`,

  /* classification */
  classifyFlow: `
<svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="cl-a" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="var(--text-3)"/></marker></defs>
  <rect x="30" y="80" width="150" height="60" rx="10" fill="#0e1422" stroke="var(--line-2)"/>
  <text x="105" y="105" fill="var(--text-2)" font-size="9.5" text-anchor="middle">case text</text>
  <text x="105" y="122" fill="var(--text-3)" font-size="8" text-anchor="middle">"VPN won't connect..."</text>
  <rect x="230" y="55" width="220" height="110" rx="12" fill="rgba(167,139,250,0.06)" stroke="var(--purple)"/>
  <text x="340" y="78" fill="var(--purple)" font-size="10" font-weight="700" text-anchor="middle">prompt: pick exactly ONE</text>
  ${['Billing','Technical','Account','Security','Other'].map(function(d,i){return '<rect x="'+(248+ (i%3)*66)+'" y="'+(90+Math.floor(i/3)*32)+'" width="60" height="24" rx="6" fill="#0e1422" stroke="'+(d==='Technical'?'var(--purple)':'var(--line-2)')+'"/>'+'<text x="'+(278+(i%3)*66)+'" y="'+(106+Math.floor(i/3)*32)+'" fill="'+(d==='Technical'?'var(--purple)':'var(--text-3)')+'" font-size="8" text-anchor="middle">'+d+'</text>';}).join('')}
  <rect x="500" y="80" width="170" height="60" rx="10" fill="rgba(74,222,128,0.1)" stroke="var(--green)"/>
  <text x="585" y="105" fill="var(--green)" font-size="11" font-weight="700" text-anchor="middle">"Technical"</text>
  <text x="585" y="122" fill="var(--text-3)" font-size="8" text-anchor="middle">one of the allowed labels</text>
  <line x1="180" y1="110" x2="228" y2="110" stroke="var(--text-3)" marker-end="url(#cl-a)"/>
  <line x1="450" y1="110" x2="498" y2="110" stroke="var(--text-3)" marker-end="url(#cl-a)"/>
  <text x="350" y="195" fill="var(--text-3)" font-size="9.5" text-anchor="middle">give a FIXED list of domains and forbid anything else — a constrained choice, not open text</text>
</svg>`,

  /* summarization */
  summarizeFlow: `
<svg viewBox="0 0 700 180" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="sm-a" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="var(--text-3)"/></marker></defs>
  <rect x="50" y="45" width="150" height="90" rx="10" fill="#0e1422" stroke="var(--cyan)"/>
  <text x="125" y="38" fill="var(--text-3)" font-size="9" text-anchor="middle">long case thread</text>
  ${[0,1,2,3,4].map(function(i){return '<line x1="66" y1="'+(62+i*14)+'" x2="184" y2="'+(62+i*14)+'" stroke="var(--text-3)" stroke-opacity="0.35"/>';}).join('')}
  <rect x="290" y="60" width="120" height="60" rx="10" fill="rgba(34,211,238,0.08)" stroke="var(--cyan)"/>
  <text x="350" y="88" fill="var(--cyan)" font-size="10" font-weight="700" text-anchor="middle">summarize</text>
  <text x="350" y="104" fill="var(--text-3)" font-size="8" text-anchor="middle">"3 bullets, ≤60 words"</text>
  <rect x="500" y="50" width="150" height="80" rx="10" fill="rgba(74,222,128,0.08)" stroke="var(--green)"/>
  <text x="575" y="42" fill="var(--text-3)" font-size="9" text-anchor="middle">tight summary</text>
  ${[0,1,2].map(function(i){return '<circle cx="518" cy="'+(72+i*18)+'" r="2.5" fill="var(--green)"/><line x1="528" y1="'+(72+i*18)+'" x2="632" y2="'+(72+i*18)+'" stroke="var(--green)" stroke-opacity="0.5"/>';}).join('')}
  <line x1="200" y1="90" x2="288" y2="90" stroke="var(--text-3)" marker-end="url(#sm-a)"/>
  <line x1="410" y1="90" x2="498" y2="90" stroke="var(--text-3)" marker-end="url(#sm-a)"/>
  <text x="350" y="164" fill="var(--text-3)" font-size="9.5" text-anchor="middle">specify length &amp; format — an unbounded "summarize this" gives inconsistent, rambling output</text>
</svg>`,

  /* map-reduce for long docs */
  mapReduce: `
<svg viewBox="0 0 700 210" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="mr-a" markerWidth="8" markerHeight="8" refX="6" refY="2.5" orient="auto"><path d="M0,0 L6,2.5 L0,5 Z" fill="var(--text-3)"/></marker></defs>
  <rect x="30" y="80" width="100" height="50" rx="9" fill="#0e1422" stroke="var(--line-2)"/><text x="80" y="100" fill="var(--text-2)" font-size="9" text-anchor="middle">huge case</text><text x="80" y="114" fill="var(--text-3)" font-size="8" text-anchor="middle">&gt; context window</text>
  ${[0,1,2].map(function(i){return '<rect x="200" y="'+(40+i*50)+'" width="90" height="38" rx="7" fill="#0e1422" stroke="var(--cyan)"/><text x="245" y="'+(63+i*50)+'" fill="var(--cyan)" font-size="9" text-anchor="middle">chunk '+(i+1)+'</text>'+'<line x1="130" y1="105" x2="198" y2="'+(59+i*50)+'" stroke="var(--text-3)" stroke-opacity="0.5" marker-end="url(#mr-a)"/>'+'<rect x="330" y="'+(40+i*50)+'" width="100" height="38" rx="7" fill="rgba(34,211,238,0.06)" stroke="var(--cyan)"/><text x="380" y="'+(63+i*50)+'" fill="var(--text-3)" font-size="8" text-anchor="middle">mini-summary</text>'+'<line x1="290" y1="'+(59+i*50)+'" x2="328" y2="'+(59+i*50)+'" stroke="var(--text-3)" marker-end="url(#mr-a)"/>'+'<line x1="430" y1="'+(59+i*50)+'" x2="498" y2="105" stroke="var(--text-3)" stroke-opacity="0.5" marker-end="url(#mr-a)"/>';}).join('')}
  <rect x="500" y="80" width="120" height="50" rx="9" fill="rgba(74,222,128,0.1)" stroke="var(--green)"/><text x="560" y="100" fill="var(--green)" font-size="9" font-weight="700" text-anchor="middle">summary of</text><text x="560" y="114" fill="var(--green)" font-size="9" font-weight="700" text-anchor="middle">summaries</text>
  <text x="350" y="195" fill="var(--text-3)" font-size="9.5" text-anchor="middle">map-reduce: summarize each chunk (map), then summarize those summaries (reduce) — for cases too big to fit</text>
</svg>`,

  /* tagging */
  tagging: `
<svg viewBox="0 0 700 170" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="tg-a" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="var(--text-3)"/></marker></defs>
  <rect x="40" y="55" width="180" height="60" rx="10" fill="#0e1422" stroke="var(--line-2)"/>
  <text x="130" y="80" fill="var(--text-2)" font-size="9" text-anchor="middle">"Remote user's VPN drops</text>
  <text x="130" y="96" fill="var(--text-2)" font-size="9" text-anchor="middle">every few minutes on wifi"</text>
  <rect x="300" y="65" width="90" height="40" rx="9" fill="rgba(74,222,128,0.08)" stroke="var(--green)"/><text x="345" y="90" fill="var(--green)" font-size="9.5" font-weight="700" text-anchor="middle">extract tags</text>
  <line x1="220" y1="85" x2="298" y2="85" stroke="var(--text-3)" marker-end="url(#tg-a)"/>
  <line x1="390" y1="85" x2="448" y2="85" stroke="var(--text-3)" marker-end="url(#tg-a)"/>
  ${['vpn','network','wifi','remote'].map(function(t,i){return '<rect x="'+(460+(i%2)*110)+'" y="'+(58+Math.floor(i/2)*32)+'" width="100" height="24" rx="12" fill="rgba(74,222,128,0.1)" stroke="var(--green)"/><text x="'+(510+(i%2)*110)+'" y="'+(74+Math.floor(i/2)*32)+'" fill="var(--green)" font-size="9" text-anchor="middle">'+t+'</text>';}).join('')}
  <text x="350" y="150" fill="var(--text-3)" font-size="9.5" text-anchor="middle">return a JSON array of short tags — optionally restricted to a controlled vocabulary you define</text>
</svg>`,

  /* sentiment x urgency matrix */
  sentimentUrgency: `
<svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg">
  <text x="350" y="24" fill="var(--text-2)" font-size="11" font-weight="700" text-anchor="middle">Two signals that decide routing</text>
  <text x="70" y="60" fill="var(--text-3)" font-size="9">urgency →</text>
  <text x="60" y="230" fill="var(--text-3)" font-size="9" transform="rotate(-90 60 230)">sentiment →</text>
  ${['low','med','high','critical'].map(function(u,i){return '<text x="'+(150+i*130)+'" y="60" fill="var(--text-3)" font-size="9" text-anchor="middle">'+u+'</text>';}).join('')}
  ${[['positive','var(--green)'],['neutral','var(--amber)'],['negative','var(--rose)']].map(function(s,r){return '<text x="95" y="'+(95+r*55)+'" fill="'+s[1]+'" font-size="9" text-anchor="end">'+s[0]+'</text>'+['low','med','high','critical'].map(function(u,c){var score=c+r; var col= score>=4?'rgba(251,113,133,0.22)': score>=2?'rgba(251,191,36,0.16)':'rgba(74,222,128,0.12)'; var stroke= score>=4?'var(--rose)': score>=2?'var(--amber)':'var(--green)'; return '<rect x="'+(115+c*130)+'" y="'+(78+r*55)+'" width="120" height="44" rx="8" fill="'+col+'" stroke="'+stroke+'"/>';}).join('');}).join('')}
  <text x="175" y="245" fill="var(--rose)" font-size="9" text-anchor="middle">angry + critical → escalate now</text>
  <text x="560" y="245" fill="var(--green)" font-size="9" text-anchor="middle">calm + low → standard queue</text>
</svg>`,

  /* one call vs four */
  combinedCall: `
<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="cc-a" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="var(--text-3)"/></marker></defs>
  <text x="175" y="26" fill="var(--text-3)" font-size="11" font-weight="700" text-anchor="middle">Four calls</text>
  ${['classify','summarize','tag','sentiment'].map(function(t,i){return '<rect x="60" y="'+(42+i*40)+'" width="230" height="30" rx="7" fill="#0e1422" stroke="var(--line-2)"/><text x="175" y="'+(61+i*40)+'" fill="var(--text-2)" font-size="9" text-anchor="middle">call '+(i+1)+' · '+t+'</text>';}).join('')}
  <text x="175" y="225" fill="var(--text-3)" font-size="9" text-anchor="middle">simple &amp; isolated · 4× the latency &amp; cost</text>

  <line x1="350" y1="20" x2="350" y2="215" stroke="var(--line-2)" stroke-dasharray="4 4"/>

  <text x="525" y="26" fill="var(--teal)" font-size="11" font-weight="700" text-anchor="middle">One call</text>
  <rect x="410" y="50" width="230" height="40" rx="8" fill="rgba(45,212,191,0.08)" stroke="var(--teal)"/><text x="525" y="74" fill="var(--teal)" font-size="9.5" text-anchor="middle">"return one JSON with all fields"</text>
  <rect x="410" y="110" width="230" height="80" rx="8" fill="#0e1422" stroke="var(--amber)"/>
  <text x="425" y="130" fill="var(--text-3)" font-size="8.5" font-family="monospace">{ "domain": "...",</text>
  <text x="425" y="146" fill="var(--text-3)" font-size="8.5" font-family="monospace">  "summary": "...",</text>
  <text x="425" y="162" fill="var(--text-3)" font-size="8.5" font-family="monospace">  "tags": [...],</text>
  <text x="425" y="178" fill="var(--text-3)" font-size="8.5" font-family="monospace">  "sentiment": "...", "urgency": "..." }</text>
  <line x1="525" y1="90" x2="525" y2="108" stroke="var(--text-3)" marker-end="url(#cc-a)"/>
  <text x="525" y="225" fill="var(--teal)" font-size="9" text-anchor="middle">1× cost · consistent · usually the winner</text>
</svg>`,

  /* structured output + validate + retry */
  structuredFlow: `
<svg viewBox="0 0 700 210" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="st-a" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="var(--text-3)"/></marker></defs>
  ${[['prompt','var(--purple)','ask for JSON'],['model','var(--teal)','generates text'],['parse +','var(--amber)','validate schema'],['typed','var(--green)','object']].map(function(p,i){return '<rect x="'+(40+i*165)+'" y="60" width="130" height="56" rx="10" fill="#0e1422" stroke="'+p[1]+'"/><text x="'+(105+i*165)+'" y="84" fill="'+p[1]+'" font-size="10" font-weight="700" text-anchor="middle">'+p[0]+'</text><text x="'+(105+i*165)+'" y="101" fill="var(--text-3)" font-size="8" text-anchor="middle">'+p[2]+'</text>'+(i<3?'<line x1="'+(170+i*165)+'" y1="88" x2="'+(203+i*165)+'" y2="88" stroke="var(--text-3)" marker-end="url(#st-a)"/>':'');}).join('')}
  <path d="M 600 116 C 600 160 300 160 235 120" fill="none" stroke="var(--rose)" stroke-dasharray="4 3" marker-end="url(#st-a)"/>
  <text x="415" y="158" fill="var(--rose)" font-size="9" text-anchor="middle">invalid? → retry (temperature 0)</text>
  <text x="350" y="190" fill="var(--text-3)" font-size="9.5" text-anchor="middle">never trust raw text — force JSON, validate against a schema, retry on failure. This is what makes it production-safe.</text>
</svg>`,

  /* app integration */
  appIntegration: `
<svg viewBox="0 0 700 250" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="ai-a" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="var(--text-3)"/></marker></defs>
  <rect x="40" y="100" width="120" height="50" rx="10" fill="#0e1422" stroke="var(--blue)"/><text x="100" y="122" fill="var(--blue)" font-size="9.5" font-weight="700" text-anchor="middle">Case created</text><text x="100" y="138" fill="var(--text-3)" font-size="8" text-anchor="middle">controller / event</text>
  <rect x="200" y="100" width="130" height="50" rx="10" fill="rgba(129,140,248,0.1)" stroke="var(--indigo)"/><text x="265" y="122" fill="var(--indigo)" font-size="9.5" font-weight="700" text-anchor="middle">CaseAiService</text><text x="265" y="138" fill="var(--text-3)" font-size="8" text-anchor="middle">prompt + call + parse</text>
  <rect x="370" y="30" width="120" height="46" rx="10" fill="rgba(45,212,191,0.08)" stroke="var(--teal)"/><text x="430" y="57" fill="var(--teal)" font-size="9.5" text-anchor="middle">Ollama (local)</text>
  <rect x="370" y="175" width="120" height="46" rx="10" fill="rgba(251,191,36,0.08)" stroke="var(--amber)"/><text x="430" y="196" fill="var(--amber)" font-size="9" text-anchor="middle">CaseInsight</text><text x="430" y="209" fill="var(--text-3)" font-size="8" text-anchor="middle">record/DTO</text>
  <rect x="540" y="60" width="120" height="46" rx="10" fill="#0e1422" stroke="var(--green)"/><text x="600" y="81" fill="var(--green)" font-size="9" text-anchor="middle">save to DB</text><text x="600" y="95" fill="var(--text-3)" font-size="8" text-anchor="middle">enrich the case</text>
  <rect x="540" y="145" width="120" height="46" rx="10" fill="#0e1422" stroke="var(--green)"/><text x="600" y="166" fill="var(--green)" font-size="9" text-anchor="middle">triage queue</text><text x="600" y="180" fill="var(--text-3)" font-size="8" text-anchor="middle">route by urgency</text>
  <line x1="160" y1="125" x2="198" y2="125" stroke="var(--text-3)" marker-end="url(#ai-a)"/>
  <line x1="330" y1="110" x2="368" y2="65" stroke="var(--text-3)" marker-end="url(#ai-a)"/>
  <line x1="368" y1="70" x2="332" y2="112" stroke="var(--green)" marker-end="url(#ai-a)"/>
  <line x1="330" y1="140" x2="368" y2="185" stroke="var(--text-3)" marker-end="url(#ai-a)"/>
  <line x1="490" y1="185" x2="538" y2="120" stroke="var(--text-3)" marker-end="url(#ai-a)"/>
  <line x1="490" y1="190" x2="538" y2="168" stroke="var(--text-3)" marker-end="url(#ai-a)"/>
  <text x="350" y="242" fill="var(--text-3)" font-size="9.5" text-anchor="middle">run it async on case-create: call the model, parse to a typed object, persist &amp; route — no user waits</text>
</svg>`,

  /* eval loop */
  evalLoop: `
<svg viewBox="0 0 700 190" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="el-a" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="var(--text-3)"/></marker></defs>
  ${[['50-100 real cases','var(--blue)','hand-labelled'],['run the pipeline','var(--teal)','predict fields'],['compare','var(--amber)','pred vs truth'],['accuracy %','var(--green)','per task']].map(function(p,i){return '<rect x="'+(30+i*172)+'" y="55" width="145" height="56" rx="10" fill="#0e1422" stroke="'+p[1]+'"/><text x="'+(102+i*172)+'" y="80" fill="'+p[1]+'" font-size="10" font-weight="700" text-anchor="middle">'+p[0]+'</text><text x="'+(102+i*172)+'" y="98" fill="var(--text-3)" font-size="8" text-anchor="middle">'+p[2]+'</text>'+(i<3?'<line x1="'+(175+i*172)+'" y1="83" x2="'+(200+i*172)+'" y2="83" stroke="var(--text-3)" marker-end="url(#el-a)"/>':'');}).join('')}
  <text x="350" y="150" fill="var(--text-3)" font-size="9.5" text-anchor="middle">a labelled test set turns "the prompt feels better" into a number you can defend — measure before you change prompts</text>
</svg>`,

  /* deploy */
  deploy: `
<svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="dp-a" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="var(--text-3)"/></marker></defs>
  <rect x="60" y="50" width="360" height="120" rx="14" fill="rgba(45,212,191,0.04)" stroke="var(--teal)" stroke-dasharray="5 4"/>
  <text x="80" y="72" fill="var(--teal)" font-size="10" font-weight="700">docker compose — one private box</text>
  <rect x="90" y="90" width="140" height="60" rx="10" fill="rgba(129,140,248,0.1)" stroke="var(--indigo)"/><text x="160" y="116" fill="var(--indigo)" font-size="10" font-weight="700" text-anchor="middle">app</text><text x="160" y="132" fill="var(--text-3)" font-size="8" text-anchor="middle">container</text>
  <rect x="250" y="90" width="140" height="60" rx="10" fill="rgba(45,212,191,0.08)" stroke="var(--teal)"/><text x="320" y="112" fill="var(--teal)" font-size="10" font-weight="700" text-anchor="middle">ollama</text><text x="320" y="128" fill="var(--text-3)" font-size="8" text-anchor="middle">+ model volume</text>
  <line x1="230" y1="120" x2="248" y2="120" stroke="var(--text-3)" marker-end="url(#dp-a)"/>
  <rect x="470" y="70" width="170" height="40" rx="9" fill="#0e1422" stroke="var(--green)"/><text x="555" y="94" fill="var(--green)" font-size="9" text-anchor="middle">scale: GPU / queue / batch</text>
  <rect x="470" y="125" width="170" height="40" rx="9" fill="#0e1422" stroke="var(--purple)"/><text x="555" y="149" fill="var(--purple)" font-size="9" text-anchor="middle">next: RAG · fine-tune</text>
  <line x1="420" y1="100" x2="468" y2="90" stroke="var(--text-3)" stroke-opacity="0.5" marker-end="url(#dp-a)"/>
  <line x1="420" y1="130" x2="468" y2="140" stroke="var(--text-3)" stroke-opacity="0.5" marker-end="url(#dp-a)"/>
  <text x="350" y="200" fill="var(--text-3)" font-size="9.5" text-anchor="middle">ship the app and the model together as containers — still fully offline — then scale and enrich</text>
</svg>`,

};
