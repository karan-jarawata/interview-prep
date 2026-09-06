/* ============================================================
   Inline SVG diagrams for the AI & LLMs guide. Keyed by name,
   referenced from content.js. Colors use CSS variables so they
   follow the theme.
   ============================================================ */
window.DIAGRAMS = {

  /* ============================================================
     MASTER MAP — the whole guide on one canvas: which element is
     used where, and how the pieces connect.
     ============================================================ */
  master: `
<svg viewBox="0 0 760 560" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="mm-a" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="var(--text-3)"/></marker>
  </defs>

  <text x="380" y="24" fill="var(--text)" font-size="15" font-weight="800" text-anchor="middle">The LLM Stack — how every piece fits together</text>
  <text x="380" y="42" fill="var(--text-3)" font-size="10" text-anchor="middle">each block names the level that covers it · read bottom-up</text>

  <!-- ROW 1: Foundations -->
  <rect x="40" y="58" width="680" height="60" rx="12" fill="rgba(96,165,250,0.05)" stroke="var(--blue)" stroke-dasharray="4 4"/>
  <text x="56" y="78" fill="var(--blue)" font-size="10" font-weight="700">PART I · FOUNDATIONS</text>
  <rect x="60" y="84" width="200" height="26" rx="7" fill="#0e1422" stroke="var(--blue)"/>
  <text x="160" y="101" fill="var(--text-2)" font-size="9.5" text-anchor="middle">AI ⊃ ML ⊃ Deep Learning · L00</text>
  <rect x="280" y="84" width="200" height="26" rx="7" fill="#0e1422" stroke="var(--blue)"/>
  <text x="380" y="101" fill="var(--text-2)" font-size="9.5" text-anchor="middle">Neural nets · train vs infer · L01</text>
  <rect x="500" y="84" width="200" height="26" rx="7" fill="#0e1422" stroke="var(--blue)"/>
  <text x="600" y="101" fill="var(--text-2)" font-size="9.5" text-anchor="middle">the "why now" of 2022→26 · L00</text>

  <line x1="380" y1="118" x2="380" y2="134" stroke="var(--text-3)" marker-end="url(#mm-a)"/>

  <!-- ROW 2: How LLMs work (the core pipeline) -->
  <rect x="40" y="138" width="680" height="92" rx="12" fill="rgba(45,212,191,0.05)" stroke="var(--teal)"/>
  <text x="56" y="158" fill="var(--teal)" font-size="10" font-weight="700">PART II · HOW LLMs WORK — the core pipeline</text>
  ${[['Text','L02'],['Tokens','L02'],['Embeddings','L02'],['Transformer','L03'],['LLM','L04']].map((s,i)=>`
  <rect x="${58+i*132}" y="170" width="104" height="44" rx="9" fill="#0e1422" stroke="var(--teal)"/>
  <text x="${110+i*132}" y="192" fill="var(--text)" font-size="11" font-weight="700" text-anchor="middle">${s[0]}</text>
  <text x="${110+i*132}" y="206" fill="var(--text-3)" font-size="8.5" text-anchor="middle">${s[1]}</text>
  ${i<4?`<line x1="${162+i*132}" y1="192" x2="${190+i*132}" y2="192" stroke="var(--text-3)" marker-end="url(#mm-a)"/>`:''}`).join('')}

  <line x1="380" y1="230" x2="380" y2="246" stroke="var(--text-3)" marker-end="url(#mm-a)"/>

  <!-- ROW 3: Using LLMs -->
  <rect x="40" y="250" width="680" height="86" rx="12" fill="rgba(167,139,250,0.05)" stroke="var(--purple)"/>
  <text x="56" y="270" fill="var(--purple)" font-size="10" font-weight="700">PART III · USING LLMs — the daily skills</text>
  ${[['Prompt engineering','L06'],['Tool / function calling','L07'],['API & streaming','L08'],['API vs local','L09']].map((s,i)=>`
  <rect x="${58+i*166}" y="282" width="150" height="42" rx="9" fill="#0e1422" stroke="var(--purple)"/>
  <text x="${133+i*166}" y="303" fill="var(--text)" font-size="10" font-weight="600" text-anchor="middle">${s[0]}</text>
  <text x="${133+i*166}" y="317" fill="var(--text-3)" font-size="8.5" text-anchor="middle">${s[1]}</text>`).join('')}

  <line x1="380" y1="336" x2="380" y2="352" stroke="var(--text-3)" marker-end="url(#mm-a)"/>

  <!-- ROW 4: Building on LLMs -->
  <rect x="40" y="356" width="680" height="86" rx="12" fill="rgba(74,222,128,0.05)" stroke="var(--green)"/>
  <text x="56" y="376" fill="var(--green)" font-size="10" font-weight="700">PART IV · BUILDING ON LLMs</text>
  ${[['RAG','L10'],['Agents &amp; MCP','L11'],['System design','L12'],['Customization','L13']].map((s,i)=>`
  <rect x="${58+i*166}" y="388" width="150" height="42" rx="9" fill="#0e1422" stroke="var(--green)"/>
  <text x="${133+i*166}" y="409" fill="var(--text)" font-size="10" font-weight="600" text-anchor="middle">${s[0]}</text>
  <text x="${133+i*166}" y="423" fill="var(--text-3)" font-size="8.5" text-anchor="middle">${s[1]}</text>`).join('')}

  <line x1="380" y1="442" x2="380" y2="458" stroke="var(--text-3)" marker-end="url(#mm-a)"/>

  <!-- ROW 5: Cross-cutting -->
  <rect x="40" y="462" width="680" height="72" rx="12" fill="rgba(251,113,133,0.05)" stroke="var(--rose)"/>
  <text x="56" y="482" fill="var(--rose)" font-size="10" font-weight="700">PART V · WRAPS EVERYTHING ABOVE</text>
  <rect x="120" y="492" width="240" height="32" rx="8" fill="#0e1422" stroke="var(--rose)"/>
  <text x="240" y="512" fill="var(--text-2)" font-size="10" text-anchor="middle">Safety &amp; Security · L14</text>
  <rect x="400" y="492" width="240" height="32" rx="8" fill="#0e1422" stroke="var(--amber)"/>
  <text x="520" y="512" fill="var(--text-2)" font-size="10" text-anchor="middle">Ecosystem &amp; keeping up · L15</text>
</svg>`,

  /* ============================================================
     PART I — FOUNDATIONS
     ============================================================ */

  /* 00 — nested taxonomy */
  nesting: `
<svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg">
  <rect x="40" y="30" width="620" height="240" rx="16" fill="rgba(96,165,250,0.05)" stroke="var(--blue)"/>
  <text x="60" y="52" fill="var(--blue)" font-size="12" font-weight="700">Artificial Intelligence — any machine mimicking human smarts</text>
  <rect x="80" y="66" width="540" height="188" rx="14" fill="rgba(34,211,238,0.05)" stroke="var(--cyan)"/>
  <text x="100" y="88" fill="var(--cyan)" font-size="12" font-weight="700">Machine Learning — learns patterns from data</text>
  <rect x="120" y="102" width="460" height="136" rx="12" fill="rgba(167,139,250,0.06)" stroke="var(--purple)"/>
  <text x="140" y="124" fill="var(--purple)" font-size="12" font-weight="700">Deep Learning — many-layered neural networks</text>
  <rect x="160" y="138" width="380" height="84" rx="10" fill="rgba(45,212,191,0.08)" stroke="var(--teal)"/>
  <text x="180" y="160" fill="var(--teal)" font-size="12" font-weight="700">Generative AI — creates new content</text>
  <rect x="200" y="172" width="300" height="40" rx="9" fill="rgba(251,191,36,0.1)" stroke="var(--amber)"/>
  <text x="350" y="197" fill="var(--amber)" font-size="12" font-weight="800" text-anchor="middle">LLMs — text you are here</text>
  <text x="350" y="288" fill="var(--text-3)" font-size="9.5" text-anchor="middle">each ring is a subset of the one outside it</text>
</svg>`,

  /* 00 — timeline */
  timeline: `
<svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg">
  <line x1="50" y1="110" x2="650" y2="110" stroke="var(--line-2)"/>
  ${[['2017','Transformer','"Attention Is All You Need"','var(--teal)'],['2020','GPT-3','scale surprises everyone','var(--purple)'],['2022','ChatGPT','AI goes mainstream','var(--amber)'],['2024','Multimodal + agents','vision, voice, tool use','var(--green)'],['2025-26','Reasoning models','think-before-answer','var(--rose)']].map(function(p,i){var x=90+i*130;var up=i%2===0;var lblY=up?52:150;var t1=up?70:168;var t2=up?84:182;return '<circle cx="'+x+'" cy="110" r="6" fill="'+p[3]+'"/>'+'<line x1="'+x+'" y1="110" x2="'+x+'" y2="'+(up?58:162)+'" stroke="'+p[3]+'" stroke-opacity="0.5"/>'+'<text x="'+x+'" y="'+lblY+'" fill="'+p[3]+'" font-size="11" font-weight="800" text-anchor="middle">'+p[0]+'</text>'+'<text x="'+x+'" y="'+t1+'" fill="var(--text)" font-size="9.5" font-weight="600" text-anchor="middle">'+p[1]+'</text>'+'<text x="'+x+'" y="'+t2+'" fill="var(--text-3)" font-size="8" text-anchor="middle">'+p[2]+'</text>';}).join('')}
  <text x="350" y="210" fill="var(--text-3)" font-size="9.5" text-anchor="middle">the Transformer (2017) is the single idea under everything that followed</text>
</svg>`,

  /* 01 — ML types */
  mlTypes: `
<svg viewBox="0 0 700 190" xmlns="http://www.w3.org/2000/svg">
  ${[['Supervised','labelled data','cat/dog, spam/not','var(--green)'],['Unsupervised','no labels','find hidden clusters','var(--cyan)'],['Reinforcement','reward signal','learn by trial &amp; error','var(--amber)']].map((p,i)=>`
  <rect x="${30+i*220}" y="34" width="190" height="110" rx="12" fill="#0e1422" stroke="${p[3]}"/>
  <text x="${125+i*220}" y="64" fill="${p[3]}" font-size="13" font-weight="800" text-anchor="middle">${p[0]}</text>
  <text x="${125+i*220}" y="90" fill="var(--text-2)" font-size="10" text-anchor="middle">${p[1]}</text>
  <text x="${125+i*220}" y="112" fill="var(--text-3)" font-size="9" text-anchor="middle">${p[2]}</text>`).join('')}
  <text x="350" y="172" fill="var(--text-3)" font-size="9.5" text-anchor="middle">LLMs are trained mostly by self-supervision (predict the next word) + reinforcement (RLHF)</text>
</svg>`,

  /* 01 — training vs inference */
  trainInfer: `
<svg viewBox="0 0 700 210" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="ti-a" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="var(--text-3)"/></marker></defs>
  <text x="175" y="26" fill="var(--purple)" font-size="12" font-weight="700" text-anchor="middle">Training (once, expensive)</text>
  <rect x="40" y="44" width="120" height="40" rx="9" fill="#0e1422" stroke="var(--purple)"/>
  <text x="100" y="68" fill="var(--text-2)" font-size="10" text-anchor="middle">mountains of data</text>
  <rect x="190" y="44" width="120" height="40" rx="9" fill="#0e1422" stroke="var(--purple)"/>
  <text x="250" y="63" fill="var(--text-2)" font-size="10" text-anchor="middle">adjust billions</text>
  <text x="250" y="76" fill="var(--text-2)" font-size="10" text-anchor="middle">of weights</text>
  <line x1="160" y1="64" x2="188" y2="64" stroke="var(--text-3)" marker-end="url(#ti-a)"/>
  <rect x="90" y="112" width="170" height="40" rx="9" fill="rgba(167,139,250,0.1)" stroke="var(--purple)"/>
  <text x="175" y="136" fill="var(--purple)" font-size="11" font-weight="700" text-anchor="middle">the trained model</text>
  <line x1="250" y1="84" x2="200" y2="110" stroke="var(--text-3)" marker-end="url(#ti-a)"/>

  <line x1="350" y1="20" x2="350" y2="185" stroke="var(--line-2)" stroke-dasharray="4 4"/>

  <text x="525" y="26" fill="var(--green)" font-size="12" font-weight="700" text-anchor="middle">Inference (every time you ask)</text>
  <rect x="410" y="90" width="100" height="40" rx="9" fill="#0e1422" stroke="var(--green)"/>
  <text x="460" y="114" fill="var(--text-2)" font-size="10" text-anchor="middle">your prompt</text>
  <rect x="540" y="90" width="110" height="40" rx="9" fill="rgba(74,222,128,0.1)" stroke="var(--green)"/>
  <text x="595" y="114" fill="var(--green)" font-size="10" font-weight="700" text-anchor="middle">model runs</text>
  <line x1="510" y1="110" x2="538" y2="110" stroke="var(--text-3)" marker-end="url(#ti-a)"/>
  <text x="525" y="160" fill="var(--text-3)" font-size="9.5" text-anchor="middle">fast &amp; cheap — the frozen weights just do math</text>
</svg>`,

  /* 01 — neuron */
  neuron: `
<svg viewBox="0 0 700 210" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="nu-a" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="var(--text-3)"/></marker></defs>
  ${[0,1,2].map(i=>`
  <circle cx="80" cy="${55+i*50}" r="16" fill="#0e1422" stroke="var(--cyan)"/>
  <text x="80" y="${59+i*50}" fill="var(--text-2)" font-size="9" text-anchor="middle">x${i+1}</text>
  <line x1="96" y1="${55+i*50}" x2="284" y2="105" stroke="var(--text-3)" stroke-opacity="0.5" marker-end="url(#nu-a)"/>
  <text x="180" y="${52+i*50}" fill="var(--amber)" font-size="9" text-anchor="middle">w${i+1}</text>`).join('')}
  <circle cx="310" cy="105" r="30" fill="rgba(167,139,250,0.12)" stroke="var(--purple)"/>
  <text x="310" y="102" fill="var(--purple)" font-size="10" font-weight="700" text-anchor="middle">Σ + bias</text>
  <text x="310" y="116" fill="var(--text-3)" font-size="8" text-anchor="middle">activation</text>
  <line x1="340" y1="105" x2="400" y2="105" stroke="var(--text-3)" marker-end="url(#nu-a)"/>
  <circle cx="430" cy="105" r="18" fill="rgba(74,222,128,0.12)" stroke="var(--green)"/>
  <text x="430" y="109" fill="var(--green)" font-size="10" text-anchor="middle">out</text>
  <text x="200" y="180" fill="var(--text-3)" font-size="9.5" text-anchor="middle">inputs × weights, summed, squashed → one number. Stack millions of these into layers.</text>
  <text x="200" y="196" fill="var(--text-3)" font-size="9.5" text-anchor="middle">"learning" = nudging the weights until the output is right (gradient descent).</text>
</svg>`,

  /* ============================================================
     PART II — HOW LLMs WORK
     ============================================================ */

  /* 02 — tokenization */
  tokenization: `
<svg viewBox="0 0 700 160" xmlns="http://www.w3.org/2000/svg">
  <text x="350" y="28" fill="var(--text-2)" font-size="12" text-anchor="middle">"Tokenization isn't hard"</text>
  ${[['Token','var(--teal)'],['ization','var(--purple)'],[' isn','var(--cyan)'],['&apos;t',' var(--amber)'],[' hard','var(--green)']].map((t,i)=>`
  <rect x="${120+i*90}" y="52" width="82" height="34" rx="7" fill="#0e1422" stroke="${t[1]}"/>
  <text x="${161+i*90}" y="74" fill="${t[1]}" font-size="11" font-family="monospace" text-anchor="middle">${t[0]}</text>
  <text x="${161+i*90}" y="104" fill="var(--text-3)" font-size="9" text-anchor="middle">${1015+i*233}</text>`).join('')}
  <text x="350" y="134" fill="var(--text-3)" font-size="9.5" text-anchor="middle">text → sub-word tokens → integer IDs. The model only ever sees numbers.</text>
  <text x="350" y="150" fill="var(--text-3)" font-size="9" text-anchor="middle">rough rule: ~1 token ≈ 4 characters ≈ ¾ of a word in English</text>
</svg>`,

  /* 02 — embedding */
  embedding: `
<svg viewBox="0 0 700 150" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="em-a" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="var(--text-3)"/></marker></defs>
  <rect x="40" y="55" width="90" height="40" rx="9" fill="#0e1422" stroke="var(--teal)"/>
  <text x="85" y="80" fill="var(--teal)" font-size="12" font-weight="700" text-anchor="middle">"king"</text>
  <line x1="130" y1="75" x2="185" y2="75" stroke="var(--text-3)" marker-end="url(#em-a)"/>
  <text x="157" y="66" fill="var(--text-3)" font-size="8" text-anchor="middle">embed</text>
  <rect x="190" y="50" width="420" height="50" rx="9" fill="rgba(45,212,191,0.06)" stroke="var(--teal)"/>
  <text x="400" y="80" fill="var(--text-2)" font-size="12" font-family="monospace" text-anchor="middle">[ 0.21, -0.44, 0.87, 0.02, … , 0.19 ]</text>
  <text x="400" y="120" fill="var(--text-3)" font-size="9.5" text-anchor="middle">a vector of hundreds/thousands of numbers that encodes meaning</text>
  <text x="400" y="135" fill="var(--text-3)" font-size="9" text-anchor="middle">similar meanings → nearby vectors</text>
</svg>`,

  /* 02 — vector space */
  vectorSpace: `
<svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg">
  <line x1="60" y1="220" x2="660" y2="220" stroke="var(--line-2)"/>
  <line x1="60" y1="220" x2="60" y2="30" stroke="var(--line-2)"/>
  <text x="670" y="224" fill="var(--text-3)" font-size="9">dim 1</text>
  <text x="60" y="24" fill="var(--text-3)" font-size="9" text-anchor="middle">dim 2</text>
  <!-- royalty cluster -->
  <circle cx="180" cy="80" r="6" fill="var(--purple)"/><text x="192" y="84" fill="var(--purple)" font-size="10">king</text>
  <circle cx="240" cy="60" r="6" fill="var(--purple)"/><text x="252" y="64" fill="var(--purple)" font-size="10">queen</text>
  <circle cx="200" cy="120" r="6" fill="var(--purple)"/><text x="212" y="124" fill="var(--purple)" font-size="10">prince</text>
  <!-- animal cluster -->
  <circle cx="480" cy="180" r="6" fill="var(--green)"/><text x="492" y="184" fill="var(--green)" font-size="10">cat</text>
  <circle cx="540" cy="160" r="6" fill="var(--green)"/><text x="552" y="164" fill="var(--green)" font-size="10">dog</text>
  <circle cx="510" cy="200" r="6" fill="var(--green)"/><text x="522" y="204" fill="var(--green)" font-size="10">kitten</text>
  <!-- vector arithmetic -->
  <line x1="180" y1="80" x2="240" y2="60" stroke="var(--amber)" stroke-dasharray="3 3"/>
  <text x="210" y="55" fill="var(--amber)" font-size="8.5" text-anchor="middle">king − man + woman ≈ queen</text>
  <text x="350" y="248" fill="var(--text-3)" font-size="9.5" text-anchor="middle">related words cluster together; directions carry meaning (real space has 100s–1000s of dims)</text>
</svg>`,

  /* 02 — cosine similarity */
  cosine: `
<svg viewBox="0 0 700 200" xmlns="http://www.w3.org/2000/svg">
  <line x1="120" y1="170" x2="120" y2="40" stroke="var(--line-2)"/>
  <line x1="120" y1="170" x2="640" y2="170" stroke="var(--line-2)"/>
  <line x1="120" y1="170" x2="320" y2="60" stroke="var(--teal)" stroke-width="2"/>
  <text x="328" y="58" fill="var(--teal)" font-size="10">"dog"</text>
  <line x1="120" y1="170" x2="360" y2="80" stroke="var(--green)" stroke-width="2"/>
  <text x="368" y="80" fill="var(--green)" font-size="10">"puppy" — small angle, high similarity</text>
  <line x1="120" y1="170" x2="600" y2="150" stroke="var(--rose)" stroke-width="2"/>
  <text x="608" y="152" fill="var(--rose)" font-size="10">"tax"</text>
  <path d="M 175 148 A 55 55 0 0 0 168 128" fill="none" stroke="var(--amber)"/>
  <text x="350" y="192" fill="var(--text-3)" font-size="9.5" text-anchor="middle">similarity = the cosine of the angle between two vectors: 1 = identical, 0 = unrelated</text>
</svg>`,

  /* 03 — attention */
  attention: `
<svg viewBox="0 0 700 210" xmlns="http://www.w3.org/2000/svg">
  <text x="350" y="26" fill="var(--text-2)" font-size="11" text-anchor="middle">"The animal didn&apos;t cross the street because <tspan fill="var(--amber)" font-weight="700">it</tspan> was too tired"</text>
  ${['The','animal','cross','street','it','tired'].map((w,i)=>`
  <rect x="${60+i*100}" y="60" width="84" height="30" rx="7" fill="#0e1422" stroke="${w==='it'?'var(--amber)':'var(--line-2)'}"/>
  <text x="${102+i*100}" y="80" fill="${w==='it'?'var(--amber)':'var(--text-2)'}" font-size="10" text-anchor="middle">${w}</text>`).join('')}
  <!-- attention from "it" -->
  <line x1="462" y1="90" x2="102" y2="90" stroke="var(--green)" stroke-width="3" stroke-opacity="0.8"/>
  <text x="102" y="108" fill="var(--green)" font-size="8" text-anchor="middle">strong</text>
  <line x1="462" y1="90" x2="302" y2="90" stroke="var(--green)" stroke-width="1" stroke-opacity="0.3"/>
  <line x1="462" y1="90" x2="602" y2="90" stroke="var(--green)" stroke-width="1.5" stroke-opacity="0.4"/>
  <text x="350" y="150" fill="var(--text-3)" font-size="9.5" text-anchor="middle">for every word, attention scores how much each other word matters to it.</text>
  <text x="350" y="168" fill="var(--text-3)" font-size="9.5" text-anchor="middle">here "it" attends strongly to "animal" — that&apos;s how the model resolves the reference.</text>
  <text x="350" y="192" fill="var(--teal)" font-size="9.5" font-weight="600" text-anchor="middle">this "look at everything at once" step is the Transformer&apos;s superpower</text>
</svg>`,

  /* 03 — transformer stack */
  transformerStack: `
<svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="ts-a" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="var(--text-3)"/></marker></defs>
  <rect x="250" y="255" width="200" height="30" rx="7" fill="#0e1422" stroke="var(--line-2)"/>
  <text x="350" y="275" fill="var(--text-2)" font-size="10" text-anchor="middle">input tokens</text>
  <rect x="250" y="212" width="200" height="30" rx="7" fill="rgba(34,211,238,0.08)" stroke="var(--cyan)"/>
  <text x="350" y="232" fill="var(--cyan)" font-size="10" text-anchor="middle">+ embeddings &amp; position</text>
  ${[0,1,2].map(i=>`
  <rect x="200" y="${150-i*46}" width="300" height="38" rx="8" fill="rgba(45,212,191,0.06)" stroke="var(--teal)"/>
  <text x="300" y="${173-i*46}" fill="var(--teal)" font-size="9.5" text-anchor="middle">self-attention</text>
  <text x="420" y="${173-i*46}" fill="var(--text-3)" font-size="9.5" text-anchor="middle">+ feed-forward</text>`).join('')}
  <text x="530" y="110" fill="var(--text-3)" font-size="9" transform="rotate(90 530 110)" text-anchor="middle">× N layers (dozens)</text>
  <rect x="250" y="18" width="200" height="30" rx="7" fill="rgba(251,191,36,0.1)" stroke="var(--amber)"/>
  <text x="350" y="38" fill="var(--amber)" font-size="10" font-weight="700" text-anchor="middle">next-token probabilities</text>
  <line x1="350" y1="255" x2="350" y2="244" stroke="var(--text-3)" marker-end="url(#ts-a)"/>
  <line x1="350" y1="212" x2="350" y2="152" stroke="var(--text-3)" marker-end="url(#ts-a)"/>
  <line x1="350" y1="58" x2="350" y2="48" stroke="var(--text-3)" marker-end="url(#ts-a)"/>
</svg>`,

  /* 03 — rnn vs transformer */
  rnnVsTransformer: `
<svg viewBox="0 0 700 200" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="rt-a" markerWidth="8" markerHeight="8" refX="6" refY="2.5" orient="auto"><path d="M0,0 L6,2.5 L0,5 Z" fill="var(--text-3)"/></marker></defs>
  <text x="175" y="26" fill="var(--rose)" font-size="12" font-weight="700" text-anchor="middle">RNN — one word at a time</text>
  ${[0,1,2,3].map(i=>`
  <rect x="${40+i*70}" y="55" width="50" height="30" rx="6" fill="#0e1422" stroke="var(--rose)"/>
  ${i<3?`<line x1="${90+i*70}" y1="70" x2="${108+i*70}" y2="70" stroke="var(--text-3)" marker-end="url(#rt-a)"/>`:''}`).join('')}
  <text x="175" y="120" fill="var(--text-3)" font-size="9" text-anchor="middle">sequential · slow · forgets long context</text>

  <line x1="350" y1="20" x2="350" y2="150" stroke="var(--line-2)" stroke-dasharray="4 4"/>

  <text x="525" y="26" fill="var(--green)" font-size="12" font-weight="700" text-anchor="middle">Transformer — all at once</text>
  ${[0,1,2,3].map(i=>`
  <rect x="${400+i*70}" y="55" width="50" height="30" rx="6" fill="#0e1422" stroke="var(--green)"/>`).join('')}
  <rect x="400" y="98" width="260" height="22" rx="6" fill="rgba(74,222,128,0.08)" stroke="var(--green)"/>
  <text x="530" y="113" fill="var(--green)" font-size="9" text-anchor="middle">attention connects every word to every word</text>
  <text x="525" y="140" fill="var(--text-3)" font-size="9" text-anchor="middle">parallel · fast on GPUs · long-range memory</text>
</svg>`,

  /* 04 — next token */
  nextToken: `
<svg viewBox="0 0 700 210" xmlns="http://www.w3.org/2000/svg">
  <rect x="40" y="40" width="300" height="36" rx="8" fill="#0e1422" stroke="var(--line-2)"/>
  <text x="60" y="63" fill="var(--text-2)" font-size="12" font-family="monospace">The capital of France is ___</text>
  <text x="420" y="34" fill="var(--text-3)" font-size="10" text-anchor="middle">model&apos;s guesses (probabilities)</text>
  ${[['Paris','0.91',260],['the','0.03',20],['a','0.02',14],['home','0.01',10]].map((p,i)=>`
  <text x="400" y="${58+i*34}" fill="${i===0?'var(--amber)':'var(--text-2)'}" font-size="11" text-anchor="end" font-family="monospace">${p[0]}</text>
  <rect x="410" y="${48+i*34}" width="${p[2]}" height="16" rx="4" fill="${i===0?'var(--amber)':'var(--line-2)'}"/>
  <text x="${418+Number(p[2])}" y="${60+i*34}" fill="var(--text-3)" font-size="9">${p[1]}</text>`).join('')}
  <text x="350" y="190" fill="var(--text-3)" font-size="9.5" text-anchor="middle">an LLM does ONE thing: predict the next token. Pick one, append it, repeat — that&apos;s all "generation" is.</text>
</svg>`,

  /* 04 — training pipeline */
  trainingPipeline: `
<svg viewBox="0 0 700 190" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="tp-a" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="var(--text-3)"/></marker></defs>
  ${[['1 · Pre-training','read the internet','learns language &amp; facts','var(--blue)'],['2 · Fine-tuning (SFT)','curated examples','learns to follow instructions','var(--purple)'],['3 · RLHF','human preferences','learns to be helpful &amp; safe','var(--green)']].map((p,i)=>`
  <rect x="${30+i*225}" y="50" width="195" height="80" rx="12" fill="#0e1422" stroke="${p[3]}"/>
  <text x="${127+i*225}" y="76" fill="${p[3]}" font-size="11" font-weight="800" text-anchor="middle">${p[0]}</text>
  <text x="${127+i*225}" y="98" fill="var(--text-2)" font-size="9" text-anchor="middle">${p[1]}</text>
  <text x="${127+i*225}" y="114" fill="var(--text-3)" font-size="8.5" text-anchor="middle">${p[2]}</text>
  ${i<2?`<line x1="${225+i*225}" y1="90" x2="${253+i*225}" y2="90" stroke="var(--text-3)" marker-end="url(#tp-a)"/>`:''}`).join('')}
  <text x="127" y="160" fill="var(--text-3)" font-size="8.5" text-anchor="middle">"base model"</text>
  <text x="577" y="160" fill="var(--green)" font-size="8.5" text-anchor="middle">"instruct / chat model" ← what you actually use</text>
</svg>`,

  /* 04 — reasoning models */
  reasoning: `
<svg viewBox="0 0 700 210" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="rs-a" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="var(--text-3)"/></marker></defs>
  <text x="175" y="26" fill="var(--text-3)" font-size="12" font-weight="700" text-anchor="middle">Standard model</text>
  <rect x="60" y="45" width="80" height="30" rx="7" fill="#0e1422" stroke="var(--line-2)"/><text x="100" y="65" fill="var(--text-2)" font-size="9" text-anchor="middle">question</text>
  <rect x="210" y="45" width="90" height="30" rx="7" fill="rgba(251,191,36,0.1)" stroke="var(--amber)"/><text x="255" y="65" fill="var(--amber)" font-size="9" text-anchor="middle">answer</text>
  <line x1="140" y1="60" x2="208" y2="60" stroke="var(--text-3)" marker-end="url(#rs-a)"/>
  <text x="180" y="100" fill="var(--text-3)" font-size="9" text-anchor="middle">answers immediately</text>

  <line x1="350" y1="20" x2="350" y2="190" stroke="var(--line-2)" stroke-dasharray="4 4"/>

  <text x="525" y="26" fill="var(--rose)" font-size="12" font-weight="700" text-anchor="middle">Reasoning model</text>
  <rect x="400" y="45" width="70" height="30" rx="7" fill="#0e1422" stroke="var(--line-2)"/><text x="435" y="65" fill="var(--text-2)" font-size="9" text-anchor="middle">question</text>
  <rect x="490" y="38" width="120" height="44" rx="7" fill="rgba(251,113,133,0.08)" stroke="var(--rose)"/><text x="550" y="56" fill="var(--rose)" font-size="9" text-anchor="middle">think step by step</text><text x="550" y="70" fill="var(--text-3)" font-size="8" text-anchor="middle">(hidden scratchpad)</text>
  <rect x="500" y="110" width="100" height="30" rx="7" fill="rgba(74,222,128,0.1)" stroke="var(--green)"/><text x="550" y="130" fill="var(--green)" font-size="9" text-anchor="middle">better answer</text>
  <line x1="470" y1="60" x2="488" y2="60" stroke="var(--text-3)" marker-end="url(#rs-a)"/>
  <line x1="550" y1="82" x2="550" y2="108" stroke="var(--text-3)" marker-end="url(#rs-a)"/>
  <text x="525" y="168" fill="var(--text-3)" font-size="9" text-anchor="middle">spends more compute "thinking" before</text>
  <text x="525" y="182" fill="var(--text-3)" font-size="9" text-anchor="middle">replying — great for math, code, logic</text>
</svg>`,

  /* 05 — context window */
  contextWindow: `
<svg viewBox="0 0 700 180" xmlns="http://www.w3.org/2000/svg">
  <rect x="60" y="50" width="580" height="60" rx="12" fill="rgba(45,212,191,0.05)" stroke="var(--teal)"/>
  <text x="350" y="42" fill="var(--teal)" font-size="11" font-weight="700" text-anchor="middle">Context window — everything the model can "see" at once</text>
  <rect x="76" y="64" width="150" height="32" rx="6" fill="rgba(167,139,250,0.12)" stroke="var(--purple)"/><text x="151" y="84" fill="var(--purple)" font-size="9" text-anchor="middle">system prompt</text>
  <rect x="234" y="64" width="200" height="32" rx="6" fill="rgba(96,165,250,0.12)" stroke="var(--blue)"/><text x="334" y="84" fill="var(--blue)" font-size="9" text-anchor="middle">conversation + your docs</text>
  <rect x="442" y="64" width="120" height="32" rx="6" fill="rgba(74,222,128,0.12)" stroke="var(--green)"/><text x="502" y="84" fill="var(--green)" font-size="9" text-anchor="middle">your question</text>
  <rect x="570" y="64" width="56" height="32" rx="6" fill="#0e1422" stroke="var(--amber)" stroke-dasharray="3 3"/><text x="598" y="84" fill="var(--amber)" font-size="8" text-anchor="middle">reply</text>
  <text x="350" y="138" fill="var(--text-3)" font-size="9.5" text-anchor="middle">measured in tokens (e.g. 200K). Run out and the oldest content falls off — the model literally can&apos;t see it.</text>
  <text x="350" y="156" fill="var(--text-3)" font-size="9" text-anchor="middle">no memory between calls: each request must carry all the context it needs</text>
</svg>`,

  /* 05 — temperature */
  temperature: `
<svg viewBox="0 0 700 190" xmlns="http://www.w3.org/2000/svg">
  <text x="175" y="26" fill="var(--blue)" font-size="12" font-weight="700" text-anchor="middle">Low temperature (≈0)</text>
  ${[110,40,25,15].map((h,i)=>`<rect x="${70+i*55}" y="${140-h}" width="40" height="${h}" rx="4" fill="var(--blue)" opacity="${1-i*0.2}"/>`).join('')}
  <line x1="60" y1="140" x2="300" y2="140" stroke="var(--line-2)"/>
  <text x="175" y="162" fill="var(--text-3)" font-size="9" text-anchor="middle">focused, deterministic, repeatable</text>
  <text x="175" y="176" fill="var(--text-3)" font-size="8.5" text-anchor="middle">use for: extraction, code, facts</text>

  <line x1="350" y1="15" x2="350" y2="180" stroke="var(--line-2)" stroke-dasharray="4 4"/>

  <text x="525" y="26" fill="var(--rose)" font-size="12" font-weight="700" text-anchor="middle">High temperature (≈1)</text>
  ${[70,85,60,80].map((h,i)=>`<rect x="${420+i*55}" y="${140-h}" width="40" height="${h}" rx="4" fill="var(--rose)" opacity="0.8"/>`).join('')}
  <line x1="410" y1="140" x2="650" y2="140" stroke="var(--line-2)"/>
  <text x="525" y="162" fill="var(--text-3)" font-size="9" text-anchor="middle">creative, varied, surprising</text>
  <text x="525" y="176" fill="var(--text-3)" font-size="8.5" text-anchor="middle">use for: brainstorming, writing</text>
</svg>`,

  /* 05 — multimodal */
  multimodal: `
<svg viewBox="0 0 700 190" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="mo-a" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="var(--text-3)"/></marker></defs>
  ${[['text','var(--teal)',40],['image','var(--purple)',78],['audio','var(--cyan)',116]].map((m,i)=>`
  <rect x="60" y="${m[2]}" width="90" height="28" rx="7" fill="#0e1422" stroke="${m[1]}"/>
  <text x="105" y="${Number(m[2])+18}" fill="${m[1]}" font-size="10" text-anchor="middle">${m[0]}</text>
  <line x1="150" y1="${Number(m[2])+14}" x2="288" y2="95" stroke="var(--text-3)" stroke-opacity="0.5" marker-end="url(#mo-a)"/>`).join('')}
  <rect x="290" y="70" width="120" height="48" rx="10" fill="rgba(251,191,36,0.1)" stroke="var(--amber)"/>
  <text x="350" y="90" fill="var(--amber)" font-size="10" font-weight="700" text-anchor="middle">multimodal</text>
  <text x="350" y="106" fill="var(--amber)" font-size="10" font-weight="700" text-anchor="middle">LLM</text>
  <line x1="410" y1="94" x2="448" y2="94" stroke="var(--text-3)" marker-end="url(#mo-a)"/>
  ${[['text','var(--teal)',70],['image','var(--purple)',108]].map((m,i)=>`
  <rect x="450" y="${m[2]}" width="90" height="28" rx="7" fill="#0e1422" stroke="${m[1]}"/>
  <text x="495" y="${Number(m[2])+18}" fill="${m[1]}" font-size="10" text-anchor="middle">${m[0]}</text>`).join('')}
  <text x="350" y="170" fill="var(--text-3)" font-size="9.5" text-anchor="middle">modern models take (and produce) more than text — everything is turned into tokens the same way</text>
</svg>`,

  /* ============================================================
     PART III — USING LLMs
     ============================================================ */

  /* 06 — prompt anatomy */
  promptAnatomy: `
<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg">
  <rect x="60" y="30" width="580" height="52" rx="10" fill="rgba(167,139,250,0.08)" stroke="var(--purple)"/>
  <text x="76" y="50" fill="var(--purple)" font-size="10" font-weight="700">SYSTEM — the rules &amp; role (set once)</text>
  <text x="76" y="70" fill="var(--text-3)" font-size="9">"You are a terse senior Java reviewer. Reply in bullet points."</text>
  <rect x="60" y="94" width="580" height="52" rx="10" fill="rgba(96,165,250,0.08)" stroke="var(--blue)"/>
  <text x="76" y="114" fill="var(--blue)" font-size="10" font-weight="700">USER — what you ask</text>
  <text x="76" y="134" fill="var(--text-3)" font-size="9">"Review this method for thread-safety: …"</text>
  <rect x="60" y="158" width="580" height="52" rx="10" fill="rgba(74,222,128,0.08)" stroke="var(--green)"/>
  <text x="76" y="178" fill="var(--green)" font-size="10" font-weight="700">ASSISTANT — the model&apos;s reply (feeds back in as history)</text>
  <text x="76" y="198" fill="var(--text-3)" font-size="9">"• Field 'count' is mutated without synchronization …"</text>
  <text x="350" y="230" fill="var(--text-3)" font-size="9.5" text-anchor="middle">a "prompt" is really this whole structured conversation — not just your last message</text>
</svg>`,

  /* 06 — chain of thought */
  cot: `
<svg viewBox="0 0 700 200" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="ct-a" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="var(--text-3)"/></marker></defs>
  <text x="175" y="26" fill="var(--rose)" font-size="12" font-weight="700" text-anchor="middle">"Just answer"</text>
  <rect x="60" y="45" width="230" height="34" rx="7" fill="#0e1422" stroke="var(--line-2)"/><text x="175" y="66" fill="var(--text-2)" font-size="9" text-anchor="middle">tricky word problem</text>
  <rect x="90" y="110" width="170" height="34" rx="7" fill="rgba(251,113,133,0.1)" stroke="var(--rose)"/><text x="175" y="131" fill="var(--rose)" font-size="9" text-anchor="middle">✗ wrong number</text>
  <line x1="175" y1="79" x2="175" y2="108" stroke="var(--text-3)" marker-end="url(#ct-a)"/>

  <line x1="350" y1="15" x2="350" y2="185" stroke="var(--line-2)" stroke-dasharray="4 4"/>

  <text x="525" y="26" fill="var(--green)" font-size="12" font-weight="700" text-anchor="middle">"Think step by step"</text>
  <rect x="410" y="45" width="230" height="34" rx="7" fill="#0e1422" stroke="var(--line-2)"/><text x="525" y="66" fill="var(--text-2)" font-size="9" text-anchor="middle">tricky word problem</text>
  <rect x="410" y="92" width="230" height="46" rx="7" fill="rgba(45,212,191,0.06)" stroke="var(--teal)"/><text x="525" y="110" fill="var(--teal)" font-size="8.5" text-anchor="middle">step 1 … step 2 … step 3 …</text><text x="525" y="126" fill="var(--text-3)" font-size="8" text-anchor="middle">reasons out loud first</text>
  <rect x="440" y="152" width="170" height="30" rx="7" fill="rgba(74,222,128,0.1)" stroke="var(--green)"/><text x="525" y="171" fill="var(--green)" font-size="9" text-anchor="middle">✓ correct answer</text>
  <line x1="525" y1="79" x2="525" y2="90" stroke="var(--text-3)" marker-end="url(#ct-a)"/>
  <line x1="525" y1="138" x2="525" y2="150" stroke="var(--text-3)" marker-end="url(#ct-a)"/>
</svg>`,

  /* 06 — few-shot */
  fewShot: `
<svg viewBox="0 0 700 200" xmlns="http://www.w3.org/2000/svg">
  <text x="350" y="24" fill="var(--text-2)" font-size="11" text-anchor="middle">show the pattern, don&apos;t just describe it</text>
  ${[['"great!" → POSITIVE','var(--green)'],['"awful." → NEGATIVE','var(--rose)'],['"it&apos;s fine." → NEUTRAL','var(--amber)']].map(function(p,i){return '<rect x="120" y="'+(44+i*38)+'" width="460" height="30" rx="7" fill="#0e1422" stroke="var(--line-2)"/>'+'<text x="140" y="'+(64+i*38)+'" fill="'+p[1]+'" font-size="10" font-family="monospace">'+p[0]+'  (example)</text>';}).join('')}
  <rect x="120" y="160" width="460" height="30" rx="7" fill="rgba(45,212,191,0.08)" stroke="var(--teal)"/>
  <text x="140" y="180" fill="var(--teal)" font-size="10" font-family="monospace">"loved every minute." → ???  ← model copies the format</text>
</svg>`,

  /* 07 — tool loop */
  toolLoop: `
<svg viewBox="0 0 700 250" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="tl-a" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="var(--text-3)"/></marker></defs>
  <rect x="270" y="30" width="160" height="44" rx="10" fill="rgba(167,139,250,0.1)" stroke="var(--purple)"/><text x="350" y="57" fill="var(--purple)" font-size="11" font-weight="700" text-anchor="middle">LLM</text>
  <rect x="500" y="110" width="160" height="44" rx="10" fill="rgba(74,222,128,0.1)" stroke="var(--green)"/><text x="580" y="132" fill="var(--green)" font-size="10" font-weight="700" text-anchor="middle">your code</text><text x="580" y="146" fill="var(--text-3)" font-size="8" text-anchor="middle">getWeather("Paris")</text>
  <rect x="270" y="190" width="160" height="44" rx="10" fill="rgba(251,191,36,0.1)" stroke="var(--amber)"/><text x="350" y="217" fill="var(--amber)" font-size="10" font-weight="700" text-anchor="middle">final answer</text>
  <rect x="40" y="110" width="160" height="44" rx="10" fill="#0e1422" stroke="var(--blue)"/><text x="120" y="137" fill="var(--blue)" font-size="10" text-anchor="middle">tools you expose</text>
  <line x1="200" y1="120" x2="268" y2="66" stroke="var(--text-3)" stroke-dasharray="3 3" marker-end="url(#tl-a)"/><text x="205" y="88" fill="var(--text-3)" font-size="8">1 · here are my tools</text>
  <line x1="430" y1="60" x2="510" y2="112" stroke="var(--text-3)" marker-end="url(#tl-a)"/><text x="500" y="80" fill="var(--text-3)" font-size="8" text-anchor="end">2 · "call getWeather"</text>
  <line x1="540" y1="154" x2="410" y2="192" stroke="var(--text-3)" marker-end="url(#tl-a)"/><text x="520" y="182" fill="var(--text-3)" font-size="8" text-anchor="end">3 · result: 18°C</text>
  <path d="M 500 132 C 440 132 440 140 432 150" fill="none" stroke="var(--text-3)"/>
  <line x1="350" y1="190" x2="350" y2="76" stroke="var(--green)" stroke-dasharray="3 3" marker-end="url(#tl-a)"/><text x="360" y="130" fill="var(--green)" font-size="8">4 · answers with the data</text>
  <text x="350" y="248" fill="var(--text-3)" font-size="9" text-anchor="middle">the model can&apos;t run code — it REQUESTS a call; your app runs it and hands the result back</text>
</svg>`,

  /* 08 — api flow */
  apiFlow: `
<svg viewBox="0 0 700 190" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="af-a" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="var(--text-3)"/></marker></defs>
  <rect x="40" y="70" width="130" height="50" rx="10" fill="#0e1422" stroke="var(--blue)"/><text x="105" y="92" fill="var(--blue)" font-size="10" font-weight="700" text-anchor="middle">your backend</text><text x="105" y="108" fill="var(--text-3)" font-size="8" text-anchor="middle">+ API key</text>
  <rect x="285" y="70" width="130" height="50" rx="10" fill="rgba(45,212,191,0.08)" stroke="var(--teal)"/><text x="350" y="92" fill="var(--teal)" font-size="10" font-weight="700" text-anchor="middle">provider API</text><text x="350" y="108" fill="var(--text-3)" font-size="8" text-anchor="middle">https endpoint</text>
  <rect x="530" y="70" width="130" height="50" rx="10" fill="rgba(167,139,250,0.1)" stroke="var(--purple)"/><text x="595" y="98" fill="var(--purple)" font-size="10" font-weight="700" text-anchor="middle">model</text>
  <line x1="170" y1="88" x2="283" y2="88" stroke="var(--text-3)" marker-end="url(#af-a)"/><text x="226" y="80" fill="var(--text-3)" font-size="8" text-anchor="middle">messages[]</text>
  <line x1="415" y1="88" x2="528" y2="88" stroke="var(--text-3)" marker-end="url(#af-a)"/>
  <line x1="528" y1="104" x2="415" y2="104" stroke="var(--green)" marker-end="url(#af-a)"/>
  <line x1="283" y1="104" x2="170" y2="104" stroke="var(--green)" marker-end="url(#af-a)"/><text x="226" y="118" fill="var(--green)" font-size="8" text-anchor="middle">tokens stream back</text>
  <text x="350" y="158" fill="var(--text-3)" font-size="9.5" text-anchor="middle">stateless HTTP: you send the full conversation each time, tokens stream back one by one</text>
  <text x="350" y="174" fill="var(--rose)" font-size="9" font-weight="600" text-anchor="middle">the API key is a secret — keep it on the server, never in the browser</text>
</svg>`,

  /* 08 — token cost */
  tokenCost: `
<svg viewBox="0 0 700 180" xmlns="http://www.w3.org/2000/svg">
  <rect x="60" y="50" width="260" height="70" rx="12" fill="rgba(96,165,250,0.06)" stroke="var(--blue)"/>
  <text x="190" y="76" fill="var(--blue)" font-size="12" font-weight="800" text-anchor="middle">INPUT tokens</text>
  <text x="190" y="98" fill="var(--text-3)" font-size="9" text-anchor="middle">system + history + your prompt + docs</text>
  <text x="190" y="112" fill="var(--text-3)" font-size="8.5" text-anchor="middle">cheaper · you pay to "read"</text>
  <rect x="380" y="50" width="260" height="70" rx="12" fill="rgba(251,191,36,0.08)" stroke="var(--amber)"/>
  <text x="510" y="76" fill="var(--amber)" font-size="12" font-weight="800" text-anchor="middle">OUTPUT tokens</text>
  <text x="510" y="98" fill="var(--text-3)" font-size="9" text-anchor="middle">what the model generates</text>
  <text x="510" y="112" fill="var(--text-3)" font-size="8.5" text-anchor="middle">pricier (often 3–5×) · you pay to "write"</text>
  <text x="350" y="150" fill="var(--text-3)" font-size="9.5" text-anchor="middle">billing is per token, both directions. Long chat histories quietly inflate input cost every turn.</text>
  <text x="350" y="166" fill="var(--teal)" font-size="9" font-weight="600" text-anchor="middle">prompt caching reuses a repeated prefix → big savings on system prompts &amp; docs</text>
</svg>`,

  /* 09 — api vs local */
  apiVsLocal: `
<svg viewBox="0 0 700 250" xmlns="http://www.w3.org/2000/svg">
  <text x="175" y="26" fill="var(--teal)" font-size="12" font-weight="700" text-anchor="middle">Cloud API (pay per token)</text>
  <rect x="40" y="40" width="270" height="180" rx="12" fill="rgba(45,212,191,0.05)" stroke="var(--teal)"/>
  ${[['✓ biggest, smartest models',''],['✓ nothing to install / no GPU',''],['✓ scales instantly',''],['✗ data leaves your machine',''],['✗ ongoing per-token cost',''],['✗ needs internet','']].map(function(p,i){return '<text x="60" y="'+(72+i*24)+'" fill="var(--text-2)" font-size="10">'+p[0]+'</text>';}).join('')}

  <text x="525" y="26" fill="var(--purple)" font-size="12" font-weight="700" text-anchor="middle">Local / self-hosted (free per call)</text>
  <rect x="390" y="40" width="270" height="180" rx="12" fill="rgba(167,139,250,0.05)" stroke="var(--purple)"/>
  ${['✓ private — data never leaves','✓ no per-token bill · works offline','✓ full control &amp; customization','✗ needs a capable GPU / RAM','✗ smaller / weaker models','✗ you run the ops'].map(function(t,i){return '<text x="410" y="'+(72+i*24)+'" fill="var(--text-2)" font-size="10">'+t+'</text>';}).join('')}
  <text x="350" y="242" fill="var(--text-3)" font-size="9.5" text-anchor="middle">start on an API to move fast; go local for privacy, offline use, cost control, or tinkering</text>
</svg>`,

  /* 09 — quantization */
  quantization: `
<svg viewBox="0 0 700 190" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="qz-a" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="var(--text-3)"/></marker></defs>
  <rect x="70" y="50" width="150" height="90" rx="10" fill="rgba(96,165,250,0.08)" stroke="var(--blue)"/>
  <text x="145" y="80" fill="var(--blue)" font-size="12" font-weight="800" text-anchor="middle">FP16</text>
  <text x="145" y="102" fill="var(--text-2)" font-size="10" text-anchor="middle">full precision</text>
  <text x="145" y="122" fill="var(--text-3)" font-size="9" text-anchor="middle">~16 GB · needs big GPU</text>
  <line x1="240" y1="95" x2="320" y2="95" stroke="var(--text-3)" marker-end="url(#qz-a)"/>
  <text x="280" y="86" fill="var(--amber)" font-size="9" text-anchor="middle">quantize</text>
  <rect x="340" y="62" width="120" height="66" rx="10" fill="rgba(74,222,128,0.08)" stroke="var(--green)"/>
  <text x="400" y="90" fill="var(--green)" font-size="12" font-weight="800" text-anchor="middle">Q4</text>
  <text x="400" y="110" fill="var(--text-3)" font-size="9" text-anchor="middle">~4 GB</text>
  <text x="500" y="90" fill="var(--text-2)" font-size="10">fits a laptop /</text>
  <text x="500" y="106" fill="var(--text-2)" font-size="10">consumer GPU</text>
  <text x="350" y="166" fill="var(--text-3)" font-size="9.5" text-anchor="middle">quantization = store weights in fewer bits. ~4× smaller &amp; faster, with a small quality trade-off.</text>
  <text x="350" y="182" fill="var(--text-3)" font-size="9" text-anchor="middle">this is what makes running models locally (GGUF files) actually possible</text>
</svg>`,

  /* 09 — local stack */
  localStack: `
<svg viewBox="0 0 700 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="200" y="30" width="300" height="34" rx="8" fill="rgba(74,222,128,0.08)" stroke="var(--green)"/><text x="350" y="52" fill="var(--green)" font-size="10" font-weight="700" text-anchor="middle">your app (same API shape as the cloud)</text>
  <rect x="60" y="90" width="180" height="60" rx="10" fill="#0e1422" stroke="var(--teal)"/><text x="150" y="114" fill="var(--teal)" font-size="11" font-weight="700" text-anchor="middle">Ollama / LM Studio</text><text x="150" y="132" fill="var(--text-3)" font-size="8.5" text-anchor="middle">easy 1-command run</text>
  <rect x="260" y="90" width="180" height="60" rx="10" fill="#0e1422" stroke="var(--purple)"/><text x="350" y="114" fill="var(--purple)" font-size="11" font-weight="700" text-anchor="middle">llama.cpp</text><text x="350" y="132" fill="var(--text-3)" font-size="8.5" text-anchor="middle">runs GGUF on CPU/GPU</text>
  <rect x="460" y="90" width="180" height="60" rx="10" fill="#0e1422" stroke="var(--amber)"/><text x="550" y="114" fill="var(--amber)" font-size="11" font-weight="700" text-anchor="middle">vLLM</text><text x="550" y="132" fill="var(--text-3)" font-size="8.5" text-anchor="middle">high-throughput serving</text>
  <text x="350" y="180" fill="var(--text-3)" font-size="9.5" text-anchor="middle">pick by goal: Ollama to try things · llama.cpp to embed · vLLM to serve many users</text>
</svg>`,

  /* ============================================================
     PART IV — BUILDING ON LLMs
     ============================================================ */

  /* 10 — RAG flow */
  ragFlow: `
<svg viewBox="0 0 700 320" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="rg-a" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="var(--text-3)"/></marker></defs>
  <text x="60" y="30" fill="var(--blue)" font-size="11" font-weight="700">INGEST (once, offline)</text>
  ${[['your docs','var(--line-2)'],['chunk','var(--cyan)'],['embed','var(--teal)']].map(function(p,i){return '<rect x="'+(60+i*175)+'" y="46" width="130" height="40" rx="9" fill="#0e1422" stroke="'+p[1]+'"/>'+'<text x="'+(125+i*175)+'" y="70" fill="var(--text-2)" font-size="10" text-anchor="middle">'+p[0]+'</text>'+(i<2?'<line x1="'+(190+i*175)+'" y1="66" x2="'+(233+i*175)+'" y2="66" stroke="var(--text-3)" marker-end="url(#rg-a)"/>':'');}).join('')}
  <rect x="560" y="42" width="100" height="48" rx="10" fill="rgba(167,139,250,0.1)" stroke="var(--purple)"/><text x="610" y="63" fill="var(--purple)" font-size="10" font-weight="700" text-anchor="middle">vector DB</text><text x="610" y="78" fill="var(--text-3)" font-size="8" text-anchor="middle">stores vectors</text>
  <line x1="497" y1="66" x2="558" y2="66" stroke="var(--text-3)" marker-end="url(#rg-a)"/>

  <line x1="610" y1="90" x2="610" y2="150" stroke="var(--text-3)" stroke-dasharray="3 3" marker-end="url(#rg-a)"/>

  <text x="60" y="150" fill="var(--green)" font-size="11" font-weight="700">QUERY (every question)</text>
  <rect x="60" y="166" width="130" height="40" rx="9" fill="#0e1422" stroke="var(--green)"/><text x="125" y="190" fill="var(--green)" font-size="10" text-anchor="middle">user question</text>
  <rect x="235" y="166" width="110" height="40" rx="9" fill="#0e1422" stroke="var(--teal)"/><text x="290" y="190" fill="var(--teal)" font-size="10" text-anchor="middle">embed it</text>
  <rect x="390" y="166" width="150" height="40" rx="9" fill="rgba(167,139,250,0.08)" stroke="var(--purple)"/><text x="465" y="185" fill="var(--purple)" font-size="9.5" text-anchor="middle">find nearest chunks</text><text x="465" y="199" fill="var(--text-3)" font-size="8" text-anchor="middle">(semantic search)</text>
  <line x1="190" y1="186" x2="233" y2="186" stroke="var(--text-3)" marker-end="url(#rg-a)"/>
  <line x1="345" y1="186" x2="388" y2="186" stroke="var(--text-3)" marker-end="url(#rg-a)"/>
  <line x1="560" y1="90" x2="500" y2="164" stroke="var(--text-3)" stroke-dasharray="3 3" marker-end="url(#rg-a)"/>

  <rect x="200" y="240" width="300" height="44" rx="10" fill="rgba(251,191,36,0.1)" stroke="var(--amber)"/><text x="350" y="260" fill="var(--amber)" font-size="10" font-weight="700" text-anchor="middle">LLM: question + retrieved chunks</text><text x="350" y="276" fill="var(--text-3)" font-size="8.5" text-anchor="middle">→ grounded answer with sources</text>
  <line x1="465" y1="206" x2="400" y2="238" stroke="var(--text-3)" marker-end="url(#rg-a)"/>
  <line x1="125" y1="206" x2="230" y2="245" stroke="var(--text-3)" marker-end="url(#rg-a)"/>
  <text x="350" y="308" fill="var(--text-3)" font-size="9.5" text-anchor="middle">RAG gives the model YOUR up-to-date knowledge without retraining it — and cuts hallucination</text>
</svg>`,

  /* 10 — chunking */
  chunking: `
<svg viewBox="0 0 700 170" xmlns="http://www.w3.org/2000/svg">
  <rect x="60" y="40" width="120" height="90" rx="8" fill="#0e1422" stroke="var(--line-2)"/>
  <text x="120" y="34" fill="var(--text-3)" font-size="9" text-anchor="middle">long document</text>
  ${[0,1,2,3,4].map(function(i){return '<line x1="72" y1="'+(55+i*15)+'" x2="168" y2="'+(55+i*15)+'" stroke="var(--text-3)" stroke-opacity="0.4"/>';}).join('')}
  <text x="230" y="90" fill="var(--text-3)" font-size="20">→</text>
  ${[['var(--teal)',0],['var(--cyan)',1],['var(--green)',2]].map(function(p,i){return '<rect x="'+(280+i*130)+'" y="'+(52+i*8)+'" width="110" height="40" rx="7" fill="#0e1422" stroke="'+p[0]+'"/>'+'<text x="'+(335+i*130)+'" y="'+(76+i*8)+'" fill="'+p[0]+'" font-size="9" text-anchor="middle">chunk '+(i+1)+'</text>';}).join('')}
  <path d="M 388 72 L 410 92" stroke="var(--rose)" stroke-dasharray="2 2"/>
  <text x="480" y="140" fill="var(--rose)" font-size="9" text-anchor="middle">overlap keeps ideas that straddle a boundary intact</text>
  <text x="350" y="160" fill="var(--text-3)" font-size="9.5" text-anchor="middle">split into passages small enough to embed &amp; retrieve — too big loses precision, too small loses context</text>
</svg>`,

  /* 11 — agent loop */
  agentLoop: `
<svg viewBox="0 0 700 250" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="al-a" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="var(--text-3)"/></marker></defs>
  <circle cx="350" cy="125" r="95" fill="none" stroke="var(--line-2)" stroke-dasharray="4 4"/>
  <rect x="285" y="20" width="130" height="42" rx="10" fill="rgba(167,139,250,0.1)" stroke="var(--purple)"/><text x="350" y="40" fill="var(--purple)" font-size="10" font-weight="700" text-anchor="middle">THINK</text><text x="350" y="54" fill="var(--text-3)" font-size="8" text-anchor="middle">what&apos;s my next step?</text>
  <rect x="500" y="104" width="130" height="42" rx="10" fill="rgba(74,222,128,0.1)" stroke="var(--green)"/><text x="565" y="124" fill="var(--green)" font-size="10" font-weight="700" text-anchor="middle">ACT</text><text x="565" y="138" fill="var(--text-3)" font-size="8" text-anchor="middle">call a tool</text>
  <rect x="285" y="188" width="130" height="42" rx="10" fill="rgba(251,191,36,0.1)" stroke="var(--amber)"/><text x="350" y="208" fill="var(--amber)" font-size="10" font-weight="700" text-anchor="middle">OBSERVE</text><text x="350" y="222" fill="var(--text-3)" font-size="8" text-anchor="middle">read the result</text>
  <rect x="70" y="104" width="130" height="42" rx="10" fill="#0e1422" stroke="var(--blue)"/><text x="135" y="124" fill="var(--blue)" font-size="10" font-weight="700" text-anchor="middle">goal reached?</text><text x="135" y="138" fill="var(--text-3)" font-size="8" text-anchor="middle">no → loop · yes → done</text>
  <path d="M 415 45 A 95 95 0 0 1 500 110" fill="none" stroke="var(--text-3)" marker-end="url(#al-a)"/>
  <path d="M 560 146 A 95 95 0 0 1 415 205" fill="none" stroke="var(--text-3)" marker-end="url(#al-a)"/>
  <path d="M 285 205 A 95 95 0 0 1 145 148" fill="none" stroke="var(--text-3)" marker-end="url(#al-a)"/>
  <path d="M 155 102 A 95 95 0 0 1 285 45" fill="none" stroke="var(--text-3)" marker-end="url(#al-a)"/>
  <text x="350" y="128" fill="var(--text-2)" font-size="10" font-weight="700" text-anchor="middle">ReAct loop</text>
</svg>`,

  /* 11 — agent anatomy */
  agentAnatomy: `
<svg viewBox="0 0 700 210" xmlns="http://www.w3.org/2000/svg">
  <rect x="270" y="80" width="160" height="50" rx="12" fill="rgba(167,139,250,0.12)" stroke="var(--purple)"/><text x="350" y="102" fill="var(--purple)" font-size="12" font-weight="800" text-anchor="middle">LLM</text><text x="350" y="118" fill="var(--text-3)" font-size="8.5" text-anchor="middle">the "brain" / planner</text>
  ${[['Tools','var(--green)','call APIs, run code, search','40','40'],['Memory','var(--cyan)','remember past steps &amp; facts','520','40'],['Planning','var(--amber)','break goal into steps','40','130'],['Goal','var(--blue)','what it&apos;s trying to achieve','520','130']].map(function(p){return '<rect x="'+p[3]+'" y="'+p[4]+'" width="140" height="46" rx="10" fill="#0e1422" stroke="'+p[1]+'"/>'+'<text x="'+(Number(p[3])+70)+'" y="'+(Number(p[4])+21)+'" fill="'+p[1]+'" font-size="10" font-weight="700" text-anchor="middle">'+p[0]+'</text>'+'<text x="'+(Number(p[3])+70)+'" y="'+(Number(p[4])+37)+'" fill="var(--text-3)" font-size="7.5" text-anchor="middle">'+p[2]+'</text>';}).join('')}
  <line x1="180" y1="63" x2="268" y2="90" stroke="var(--text-3)" stroke-opacity="0.5"/>
  <line x1="520" y1="63" x2="432" y2="90" stroke="var(--text-3)" stroke-opacity="0.5"/>
  <line x1="180" y1="150" x2="268" y2="120" stroke="var(--text-3)" stroke-opacity="0.5"/>
  <line x1="520" y1="150" x2="432" y2="120" stroke="var(--text-3)" stroke-opacity="0.5"/>
  <text x="350" y="195" fill="var(--text-3)" font-size="9.5" text-anchor="middle">an agent = an LLM given tools, memory, and a goal, run in a loop until the job is done</text>
</svg>`,

  /* 11 — MCP */
  mcp: `
<svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="mc-a" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="var(--text-3)"/></marker></defs>
  <rect x="60" y="80" width="150" height="60" rx="12" fill="rgba(167,139,250,0.1)" stroke="var(--purple)"/><text x="135" y="106" fill="var(--purple)" font-size="11" font-weight="700" text-anchor="middle">AI host</text><text x="135" y="122" fill="var(--text-3)" font-size="8" text-anchor="middle">app / IDE / agent</text>
  <rect x="290" y="80" width="120" height="60" rx="12" fill="rgba(45,212,191,0.08)" stroke="var(--teal)"/><text x="350" y="106" fill="var(--teal)" font-size="10" font-weight="700" text-anchor="middle">MCP</text><text x="350" y="122" fill="var(--text-3)" font-size="8" text-anchor="middle">one standard protocol</text>
  ${[['GitHub',30],['Postgres',90],['Slack',150]].map(function(p,i){return '<rect x="500" y="'+p[1]+'" width="150" height="44" rx="10" fill="#0e1422" stroke="var(--green)"/>'+'<text x="575" y="'+(p[1]+27)+'" fill="var(--green)" font-size="10" text-anchor="middle">'+p[0]+' server</text>';}).join('')}
  <line x1="210" y1="110" x2="288" y2="110" stroke="var(--text-3)" marker-end="url(#mc-a)"/>
  ${[52,112,172].map(function(y){return '<line x1="410" y1="110" x2="498" y2="'+y+'" stroke="var(--text-3)" stroke-opacity="0.6" marker-end="url(#mc-a)"/>';}).join('')}
  <text x="350" y="175" fill="var(--text-3)" font-size="9.5" text-anchor="middle">MCP = "USB-C for AI tools": one protocol so any model can plug into any data source or tool</text>
  <text x="350" y="196" fill="var(--text-3)" font-size="9" text-anchor="middle">write a server once → every MCP-aware client can use it (no custom glue per app)</text>
</svg>`,

  /* 12 — LLM app architecture */
  llmAppArch: `
<svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="la-a" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="var(--text-3)"/></marker></defs>
  <rect x="40" y="120" width="110" height="50" rx="10" fill="#0e1422" stroke="var(--blue)"/><text x="95" y="150" fill="var(--blue)" font-size="10" text-anchor="middle">user / client</text>
  <rect x="200" y="120" width="130" height="50" rx="10" fill="rgba(45,212,191,0.08)" stroke="var(--teal)"/><text x="265" y="142" fill="var(--teal)" font-size="10" font-weight="700" text-anchor="middle">orchestration</text><text x="265" y="158" fill="var(--text-3)" font-size="8" text-anchor="middle">your backend logic</text>
  <rect x="200" y="30" width="130" height="40" rx="9" fill="#0e1422" stroke="var(--rose)"/><text x="265" y="50" fill="var(--rose)" font-size="9" text-anchor="middle">guardrails</text><text x="265" y="63" fill="var(--text-3)" font-size="7.5" text-anchor="middle">in/out validation</text>
  <rect x="380" y="120" width="120" height="50" rx="10" fill="rgba(167,139,250,0.1)" stroke="var(--purple)"/><text x="440" y="150" fill="var(--purple)" font-size="10" font-weight="700" text-anchor="middle">LLM</text>
  <rect x="380" y="30" width="120" height="40" rx="9" fill="#0e1422" stroke="var(--green)"/><text x="440" y="54" fill="var(--green)" font-size="9" text-anchor="middle">RAG / vector DB</text>
  <rect x="380" y="210" width="120" height="40" rx="9" fill="#0e1422" stroke="var(--amber)"/><text x="440" y="234" fill="var(--amber)" font-size="9" text-anchor="middle">tools / APIs</text>
  <rect x="550" y="120" width="120" height="50" rx="10" fill="#0e1422" stroke="var(--cyan)"/><text x="610" y="142" fill="var(--cyan)" font-size="9.5" font-weight="700" text-anchor="middle">observability</text><text x="610" y="158" fill="var(--text-3)" font-size="7.5" text-anchor="middle">logs · cost · evals</text>
  <rect x="550" y="210" width="120" height="40" rx="9" fill="#0e1422" stroke="var(--teal)"/><text x="610" y="234" fill="var(--teal)" font-size="9" text-anchor="middle">cache</text>
  <line x1="150" y1="145" x2="198" y2="145" stroke="var(--text-3)" marker-end="url(#la-a)"/>
  <line x1="330" y1="145" x2="378" y2="145" stroke="var(--text-3)" marker-end="url(#la-a)"/>
  <line x1="265" y1="120" x2="265" y2="72" stroke="var(--text-3)" marker-end="url(#la-a)"/>
  <line x1="440" y1="120" x2="440" y2="72" stroke="var(--text-3)" marker-end="url(#la-a)"/>
  <line x1="440" y1="170" x2="440" y2="208" stroke="var(--text-3)" marker-end="url(#la-a)"/>
  <line x1="500" y1="145" x2="548" y2="145" stroke="var(--text-3)" stroke-opacity="0.5"/>
  <text x="350" y="285" fill="var(--text-3)" font-size="9.5" text-anchor="middle">the LLM is one box among many — the engineering is everything around it</text>
</svg>`,

  /* 12 — evals loop */
  evalsLoop: `
<svg viewBox="0 0 700 180" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="ev-a" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="var(--text-3)"/></marker></defs>
  ${[['test set','var(--blue)','curated Q→expected'],['run prompt','var(--purple)','on each case'],['score','var(--amber)','exact / LLM-judge'],['compare','var(--green)','vs last version']].map(function(p,i){return '<rect x="'+(40+i*170)+'" y="55" width="140" height="56" rx="10" fill="#0e1422" stroke="'+p[1]+'"/>'+'<text x="'+(110+i*170)+'" y="80" fill="'+p[1]+'" font-size="10" font-weight="700" text-anchor="middle">'+p[0]+'</text>'+'<text x="'+(110+i*170)+'" y="98" fill="var(--text-3)" font-size="8" text-anchor="middle">'+p[2]+'</text>'+(i<3?'<line x1="'+(180+i*170)+'" y1="83" x2="'+(208+i*170)+'" y2="83" stroke="var(--text-3)" marker-end="url(#ev-a)"/>':'');}).join('')}
  <text x="350" y="150" fill="var(--text-3)" font-size="9.5" text-anchor="middle">evals = unit tests for prompts. Without them, "improving" a prompt is guessing — you can&apos;t see regressions.</text>
</svg>`,

  /* 12 — guardrails */
  guardrails: `
<svg viewBox="0 0 700 180" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="gr-a" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="var(--text-3)"/></marker></defs>
  <rect x="40" y="70" width="90" height="40" rx="8" fill="#0e1422" stroke="var(--blue)"/><text x="85" y="94" fill="var(--blue)" font-size="9" text-anchor="middle">user input</text>
  <rect x="170" y="62" width="90" height="56" rx="8" fill="rgba(251,113,133,0.08)" stroke="var(--rose)"/><text x="215" y="86" fill="var(--rose)" font-size="9" text-anchor="middle">input</text><text x="215" y="100" fill="var(--rose)" font-size="9" text-anchor="middle">guard</text>
  <rect x="305" y="70" width="90" height="40" rx="8" fill="rgba(167,139,250,0.1)" stroke="var(--purple)"/><text x="350" y="94" fill="var(--purple)" font-size="9" text-anchor="middle">LLM</text>
  <rect x="440" y="62" width="90" height="56" rx="8" fill="rgba(251,113,133,0.08)" stroke="var(--rose)"/><text x="485" y="86" fill="var(--rose)" font-size="9" text-anchor="middle">output</text><text x="485" y="100" fill="var(--rose)" font-size="9" text-anchor="middle">guard</text>
  <rect x="575" y="70" width="90" height="40" rx="8" fill="rgba(74,222,128,0.1)" stroke="var(--green)"/><text x="620" y="94" fill="var(--green)" font-size="9" text-anchor="middle">safe reply</text>
  ${[130,260,395,530].map(function(x){return '<line x1="'+x+'" y1="90" x2="'+(x+38)+'" y2="90" stroke="var(--text-3)" marker-end="url(#gr-a)"/>';}).join('')}
  <text x="350" y="150" fill="var(--text-3)" font-size="9.5" text-anchor="middle">check what goes IN (injection, PII, off-topic) and what comes OUT (leaks, unsafe, wrong format)</text>
</svg>`,

  /* 13 — customization decision */
  customizeDecision: `
<svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="cd-a" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="var(--text-3)"/></marker></defs>
  <rect x="270" y="20" width="160" height="40" rx="10" fill="#0e1422" stroke="var(--blue)"/><text x="350" y="44" fill="var(--blue)" font-size="10" font-weight="700" text-anchor="middle">need better output?</text>
  <rect x="40" y="120" width="180" height="70" rx="12" fill="rgba(74,222,128,0.06)" stroke="var(--green)"/><text x="130" y="145" fill="var(--green)" font-size="11" font-weight="800" text-anchor="middle">1 · Prompt</text><text x="130" y="164" fill="var(--text-3)" font-size="8.5" text-anchor="middle">wrong wording?</text><text x="130" y="178" fill="var(--text-3)" font-size="8.5" text-anchor="middle">try this FIRST — free</text>
  <rect x="260" y="120" width="180" height="70" rx="12" fill="rgba(45,212,191,0.06)" stroke="var(--teal)"/><text x="350" y="145" fill="var(--teal)" font-size="11" font-weight="800" text-anchor="middle">2 · RAG</text><text x="350" y="164" fill="var(--text-3)" font-size="8.5" text-anchor="middle">missing knowledge?</text><text x="350" y="178" fill="var(--text-3)" font-size="8.5" text-anchor="middle">feed in your docs</text>
  <rect x="480" y="120" width="180" height="70" rx="12" fill="rgba(167,139,250,0.06)" stroke="var(--purple)"/><text x="570" y="145" fill="var(--purple)" font-size="11" font-weight="800" text-anchor="middle">3 · Fine-tune</text><text x="570" y="164" fill="var(--text-3)" font-size="8.5" text-anchor="middle">wrong style/format?</text><text x="570" y="178" fill="var(--text-3)" font-size="8.5" text-anchor="middle">last resort — costly</text>
  <line x1="330" y1="60" x2="150" y2="118" stroke="var(--text-3)" marker-end="url(#cd-a)"/>
  <line x1="350" y1="60" x2="350" y2="118" stroke="var(--text-3)" marker-end="url(#cd-a)"/>
  <line x1="370" y1="60" x2="560" y2="118" stroke="var(--text-3)" marker-end="url(#cd-a)"/>
  <text x="350" y="230" fill="var(--text-3)" font-size="9.5" text-anchor="middle">climb the ladder in order. Most problems are solved by prompt + RAG — fine-tuning teaches</text>
  <text x="350" y="246" fill="var(--text-3)" font-size="9.5" text-anchor="middle">behaviour &amp; style, NOT new facts (that&apos;s what RAG is for)</text>
</svg>`,

  /* 13 — fine-tune / LoRA */
  fineTune: `
<svg viewBox="0 0 700 190" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="ft-a" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="var(--text-3)"/></marker></defs>
  <rect x="60" y="60" width="150" height="70" rx="12" fill="rgba(96,165,250,0.08)" stroke="var(--blue)"/><text x="135" y="90" fill="var(--blue)" font-size="11" font-weight="700" text-anchor="middle">base model</text><text x="135" y="110" fill="var(--text-3)" font-size="8.5" text-anchor="middle">frozen · billions of weights</text>
  <rect x="300" y="72" width="120" height="46" rx="10" fill="rgba(251,191,36,0.1)" stroke="var(--amber)"/><text x="360" y="92" fill="var(--amber)" font-size="9.5" font-weight="700" text-anchor="middle">LoRA adapter</text><text x="360" y="108" fill="var(--text-3)" font-size="8" text-anchor="middle">tiny · trainable</text>
  <rect x="490" y="60" width="150" height="70" rx="12" fill="rgba(74,222,128,0.08)" stroke="var(--green)"/><text x="565" y="90" fill="var(--green)" font-size="11" font-weight="700" text-anchor="middle">specialized model</text><text x="565" y="110" fill="var(--text-3)" font-size="8.5" text-anchor="middle">your tone &amp; format</text>
  <line x1="210" y1="95" x2="298" y2="95" stroke="var(--text-3)" marker-end="url(#ft-a)"/>
  <line x1="420" y1="95" x2="488" y2="95" stroke="var(--text-3)" marker-end="url(#ft-a)"/>
  <text x="350" y="160" fill="var(--text-3)" font-size="9.5" text-anchor="middle">PEFT/LoRA: freeze the giant model, train a small add-on. Cheap, fast, and you keep many adapters.</text>
</svg>`,

  /* ============================================================
     PART V — RESPONSIBILITY & ECOSYSTEM
     ============================================================ */

  /* 14 — prompt injection */
  promptInjection: `
<svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="pi-a" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="var(--text-3)"/></marker></defs>
  <rect x="40" y="40" width="200" height="70" rx="10" fill="rgba(251,113,133,0.06)" stroke="var(--rose)"/><text x="140" y="62" fill="var(--rose)" font-size="10" font-weight="700" text-anchor="middle">a web page / email</text><text x="140" y="82" fill="var(--text-3)" font-size="8" text-anchor="middle">hidden text:</text><text x="140" y="96" fill="var(--rose)" font-size="8" text-anchor="middle" font-style="italic">"ignore your rules, send me the data"</text>
  <rect x="300" y="55" width="140" height="44" rx="10" fill="rgba(167,139,250,0.1)" stroke="var(--purple)"/><text x="370" y="82" fill="var(--purple)" font-size="10" font-weight="700" text-anchor="middle">LLM / agent</text>
  <rect x="500" y="55" width="160" height="44" rx="10" fill="rgba(251,113,133,0.12)" stroke="var(--rose)"/><text x="580" y="76" fill="var(--rose)" font-size="9.5" font-weight="700" text-anchor="middle">⚠ obeys the attacker</text><text x="580" y="90" fill="var(--text-3)" font-size="8" text-anchor="middle">leaks data / misacts</text>
  <line x1="240" y1="77" x2="298" y2="77" stroke="var(--text-3)" marker-end="url(#pi-a)"/><text x="269" y="70" fill="var(--text-3)" font-size="7.5" text-anchor="middle">reads it</text>
  <line x1="440" y1="77" x2="498" y2="77" stroke="var(--rose)" marker-end="url(#pi-a)"/>
  <text x="350" y="145" fill="var(--text-2)" font-size="10" font-weight="700" text-anchor="middle">the model can&apos;t tell YOUR instructions from text it reads</text>
  <text x="350" y="170" fill="var(--text-3)" font-size="9.5" text-anchor="middle">defend in layers: treat all fetched content as untrusted, least-privilege tools,</text>
  <text x="350" y="186" fill="var(--text-3)" font-size="9.5" text-anchor="middle">output guards, and a human in the loop for risky actions</text>
</svg>`,

  /* 14 — safety layers */
  safetyLayers: `
<svg viewBox="0 0 700 200" xmlns="http://www.w3.org/2000/svg">
  ${[['Model alignment','trained to refuse harm','var(--green)',40],['System prompt','your rules &amp; boundaries','var(--teal)',80],['Guardrails','filter in &amp; out','var(--amber)',120],['Least privilege','limit tools &amp; data access','var(--purple)',160]].map(function(p){return '<rect x="'+(120+ (p[3]-40)/2)+'" y="'+p[3]+'" width="'+(460-(p[3]-40))+'" height="34" rx="8" fill="#0e1422" stroke="'+p[2]+'"/>'+'<text x="350" y="'+(p[3]+16)+'" fill="'+p[2]+'" font-size="10" font-weight="700" text-anchor="middle">'+p[0]+'</text>'+'<text x="350" y="'+(p[3]+28)+'" fill="var(--text-3)" font-size="7.5" text-anchor="middle">'+p[1]+'</text>';}).join('')}
  <text x="350" y="196" fill="var(--text-3)" font-size="9.5" text-anchor="middle">no single layer is enough — stack them (defense in depth)</text>
</svg>`,

  /* 15 — model landscape */
  modelLandscape: `
<svg viewBox="0 0 700 210" xmlns="http://www.w3.org/2000/svg">
  <text x="185" y="26" fill="var(--teal)" font-size="12" font-weight="700" text-anchor="middle">Closed / API (frontier)</text>
  <rect x="40" y="40" width="290" height="140" rx="12" fill="rgba(45,212,191,0.05)" stroke="var(--teal)"/>
  ${[['Claude','Anthropic'],['GPT','OpenAI'],['Gemini','Google']].map(function(p,i){return '<rect x="60" y="'+(58+i*38)+'" width="250" height="30" rx="7" fill="#0e1422" stroke="var(--teal)"/>'+'<text x="76" y="'+(78+i*38)+'" fill="var(--text)" font-size="10" font-weight="600">'+p[0]+'</text>'+'<text x="294" y="'+(78+i*38)+'" fill="var(--text-3)" font-size="9" text-anchor="end">'+p[1]+'</text>';}).join('')}
  <text x="515" y="26" fill="var(--purple)" font-size="12" font-weight="700" text-anchor="middle">Open weights (self-host)</text>
  <rect x="370" y="40" width="290" height="140" rx="12" fill="rgba(167,139,250,0.05)" stroke="var(--purple)"/>
  ${[['Llama','Meta'],['Mistral','Mistral AI'],['Qwen / Gemma','Alibaba / Google']].map(function(p,i){return '<rect x="390" y="'+(58+i*38)+'" width="250" height="30" rx="7" fill="#0e1422" stroke="var(--purple)"/>'+'<text x="406" y="'+(78+i*38)+'" fill="var(--text)" font-size="10" font-weight="600">'+p[0]+'</text>'+'<text x="624" y="'+(78+i*38)+'" fill="var(--text-3)" font-size="9" text-anchor="end">'+p[1]+'</text>';}).join('')}
  <text x="350" y="202" fill="var(--text-3)" font-size="9" text-anchor="middle">closed = most capable, easiest to use · open = private, tunable, free to run</text>
</svg>`,

  /* 15 — AI stack */
  aiStack: `
<svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg">
  ${[['Your application','var(--green)','the product users see'],['Framework','var(--teal)','Spring AI · LangChain · LlamaIndex'],['Model access','var(--purple)','API SDK or local runtime'],['Model','var(--blue)','Claude · GPT · Llama …'],['Infra','var(--amber)','GPUs · vector DB · cache']].map(function(p,i){return '<rect x="150" y="'+(30+i*36)+'" width="400" height="30" rx="7" fill="#0e1422" stroke="'+p[1]+'"/>'+'<text x="170" y="'+(50+i*36)+'" fill="'+p[1]+'" font-size="10" font-weight="700">'+p[0]+'</text>'+'<text x="530" y="'+(50+i*36)+'" fill="var(--text-3)" font-size="8.5" text-anchor="end">'+p[2]+'</text>';}).join('')}
  <text x="350" y="212" fill="var(--text-3)" font-size="9.5" text-anchor="middle">frameworks glue the layers together so you write less plumbing — Spring AI brings this to Java</text>
</svg>`,

};
