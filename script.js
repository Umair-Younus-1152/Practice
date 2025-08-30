/* script.js
 - This script parses the textual table (exactly as you provided),
 - builds the quiz, evaluates answers on Submit, shows per-question feedback,
 - and computes the score.
*/

const rawTable = `| Sr# | Question                                                                       | A          | B       | C         | D           | Answer |
| --- | ------------------------------------------------------------------------------ | ---------- | ------- | --------- | ----------- | ------ |
| 1 | Books are a great source ______ happiness. | of | for | on | with | A |
| 2 | This flying coach is bound______Karachi. | For | From | To | None | A |
| 3 | Green pepper is very rich ______ vitamin C? | of | in | about | on | B |
| 4 | I am worried ______ the exam? | in | about | on | of | B |
| 5 | Please wait for me. I will be finished ______ five or ten minutes. | at | in | by | from | B |
| 6 | I’m getting late ______ office. | From | For | To | In | B |
| 7 | The club usually empties ______ about two in the morning? | off | on | in | out | D |
| 8 | Usman was broken______from his old friends. | with | of | away | in | C |
| 9 | I am not acquainted ______ her father. | of | at | with | to | C |
| 10 | Sana is not known ______ me. | to | on | at | with | A |
| 11 | Do not bother me 3 o’ clock ______ night. | in | at | on | along | B |
| 12 | My sister is bad ______ maths. | in | with | at | from | C |
| 13 | He is accustomed ______ hot weather. | with | of | to | by | C |
| 14 | I was amazed ______ his misbehavior. | In | At | For | With | B |
| 15 | He is superior ______ me? | To | than | With | from | A |
| 16 | I would like to thank you ______ behalf of all of us? | of | on | about | in | B |
| 17 | Please do not interfere ______ my personal affairs? | of | in | about | on | B |
| 18 | Nafeesa is afraid ______ spiders? | from | in | about | of | D |
| 19 | The railway track runs ______ the river. | over | across | by | on | B |
| 20 | She’s angry ______ you. | On | For | With | To | C |
| 21 | Danish came out ______ his office, looking tired and worried. | to | from | at | of | D |
| 22 | His people built many memorials ______ his greatness. | for | of | to | with | C |
| 23 | I saw you dancing ______ party. | in the | at a | at the | in | C |
| 24 | I am proud ______ my brother. | on | of | to | at | B |
| 25 | The candidates shall abide ______ all directions. | on | with | by | to | C |
| 26 | Usman is afraid ______ dog. | from | of | with | to | B |
| 27 | The man was charged ______ murder. | on | of | with | at | C |
| 28 | He is responsible ______ the president for his decisions. | for | of | to | with | C |
| 29 | He looks upset, I think he took the criticism ______ heart? | to | in | about | of | A |
| 30 | He is jealous ______ her success? | of | on | about | in | A |
| 31 | He is interested ______ history? | of | in | about | on | B |
| 32 | He is good ______ Football. | At | Of | With | In | A |
| 33 | Is this is the bus, ______ goes to the Sadar Bazar? | that | who | which | To arrive | C |
| 34 | The public were deeply sceptical ______ some of the proposals? | For | With | About | From | C |
| 35 | We are sensible ______ the difficulties he faces? | to | of | with | on | B |
| 36 | The wheels of the truck press ______ the road. | on | against | upon | over | B |
| 37 | I told the tailor to put red buttons ______ the dress. | in | at | on | none | C |
| 38 | Head is covered ______ hair. | of | with | at | from | B |
| 39 | I am used ______ speaking English. | with | of | to | Both B & C | C |
| 40 | The Jar was full ______ oil. | with | from | by | of | D |
| 41 | He is fully contented ______ his life. | of | with | for | in | B |
| 42 | Aqsa is travelling ______ the school. | off | to | towards | through | C |
| 43 | You can’t always pass ______ appearance. | Down | By | Into | Of | B |
| 44 | As ______ me; I will be happy to lend a hand? | of | in | about | for | D |
| 45 | We arrived ______ the station an hour late? | of | in | about | at | D |
| 46 | She is jealous ______ my friend? | From | With | Of | By | C |
| 47 | The book is______the mug and pen. | In | Among | Between | Of | C |
| 48 | The same considerations are equally applicable ______ accident claims? | with | To | on | of | B |
| 49 | He was upbraided ______ his slovenly appearance? | from | for | with | to | B |
| 50 | Translate this passage ______ English. | to | in | into | on | C |
| 51 | Either Sana or her friends ______ present there. | was | were | is | none | B |
| 52 | Do you mean to say you exchanged that lovely car ______ this? | with | on | by | for | D |
| 53 | Sana is different ______ other girls. | than | with | from | to | C |
| 54 | He always insisted ______ his opinion. | to | in | on | over | C |
| 55 | The shopkeeper has charged me ten rupees ______ this book. | at | with | for | of | C |
| 56 | He is getting out ______ the car. | from | to | of | through | C |
| 57 | Both parties must adhere ______ the terms of the contract. | In | By | On | To | D |
| 58 | He was accused ______ theft? | of | in | about | on | A |
| 59 | I am good ______ tennis? | of | in | about | at | D |
| 60 | Turn left______the traffic lights. | At | In | On | Of | A |
| 61 | A good judge never jumps ______ the conclusion. | In | To | on | At | B |
| 62 | Parents expect more ______ their children? | with | of | from | to | B |
| 63 | He took his brother ______ the hand. | from | with | on | by | D |
| 64 | He succeeded ______ killing the tiger. | by | with | of | in | D |
| 65 | We congratulate you ______ your achievement. | for | to | on | at | C |
| 66 | When the meeting had finished, they went ______ the plan once again. | down | on | up | over | D |
| 67 | I am going ______ home. | at | to | towards | None | D |
| 68 | He accused the man ______ stealing. | for | on | with | of | D |
| 69 | Mother was aware ______ her children. | at | of | over | on | B |
| 70 | He is fond ______ drawing. | to | of | with | on | B |
| 71 | I was alarmed______his death. | by | at | upon | from | B |
| 72 | What did you make ______ the lecture? | of | in | about | on | A |
| 73 | The teacher set some homework ______ the end of the lesson? | of | in | about | at | D |
| 74 | He writes ______ ink. | WITH | IN | FOR | ON | B |
| 75 | If ______ the match, I will go to Peshawar. | I will win | I win | I wins | I shall win | B |
| 76 | I have been working here ______ ten years? | from | since | for | with | C |
| 77 | I suspect him ______ stealing the pen. | for | of | over | on | B |
| 78 | My brother was trembling ______ cold. | from | with | of | by | B |
| 79 | He is worried ______ his future. | for | of | about | with | C |
| 80 | They are anxious ______ his health. | for | at | about | on | C |
| 81 | She is thankful to you for being so patient ______ her. | for | of | with | at | C |
| 82 | He is weak ______ grammar. | at | in | from | with | B |
| 83 | I have had problems similar ______ yours. | from | with | of | to | D |
| 84 | I am sick ______ job. | from | with | of | by | C |
| 85 | He is averse______hard work. | on | to | at | from | B |
| 86 | Unfortunately, we had to cancel it owing ______ the bad weather? | of | in | about | to | D |
| 87 | She suffers ______ a heart disease? | from | in | about | on | A |
| 88 | The food is very good______that restaurant. | at | of | in | with | C |
| 89 | You must bear______his pranks. | with | In | some of | All | A |
| 90 | There is no point ______ arguing? | to | from | in | on | C |
| 91 | The prisoner was bound ______ the stake. | with | on | to | at | C |
| 92 | Prime Minister has arrived ______ London. | at | none | in | from | C |
| 93 | She is interested ______ drawing and painting. | of | on | in | with | C |
| 94 | There is still no cure ______ AIDS. | of | to | for | with | C |
| 95 | Sana was starring ______ me. | to | towards | at | on | C |
| 96 | Sana is popular ______ her friends. | among | by | over | with | D |
| 97 | The training session has been changed from 9:00 ______ 10:00. | at | to | in | by | B |
| 98 | Amna was engaged ______ Asim. | with | from | to | None | C |
| 99 | I’m ______ sure of it as you are. | Quite | As | Perfectly | Very | B |
| 100 | It was kind ______ you to help? | of | in | about | on | A |
| 101 | They decided ______ the grey sofa? | of | in | about | on | D |
| 102 | The words in these books will be of value______you. | To | For | On | None | A |
| 103 | He is serious______visiting Islamabad. | Of | For | To | On | A |
| 104 | Fakhar Zaman appeared settled ______ the crease? | on | at | in | none | B |
| 105 | He got ______ his illness in two weeks. | over | on | at | by | A |
| 106 | He is now ashamed ______ his conduct. | at | with | of | by | C |
| 107 | Please do not get angry ______ me. | with | on | at | towards | A |
| 108 | We arrived ______ the village at night. | to | in | at | of | C |
| 109 | I will be glad to get rid ______ him. | from | with | of | by | C |
| 110 | My book is different ______ yours. | than | with | from | by | C |
| 111 | Admin is capable ______ doing anything. | about | of | on | in | B |
| 113 | What is the cause ______ the problem? | of | on | about | in | A |
| 114 | She cares ______ the environment? | of | in | about | on | C |
| 115 | He confided ______ me? | of | in | about | on | B |
| 116 | He belongs______ a noble family. | with | to | among | in | B |
| 117 | We are accountable ______God for our actions. | with | on | in | to | D |
| 118 | I don’t want to argue ______you? | at | to | from | with | D |
| 119 | There was no heir ______ the throne. | to | with | him | over | A |
| 120 | I am shy ______ my teacher. | with | from | of | to | C |
| 121 | ______ the night mysterious creatures prowl. | in | at | on | along | A |
| 122 | He has been swimming ______ one hour. | from | with | Since | For | D |
| 123 | Bananas are selling ______ Rs250 per dozen. | on | over | with | at | D |
| 124 | Sana filled the glass ______ water. | with | of | from | by | A |
| 125 | Asim has been fully cured ______ the chronic pain in his legs. | from | by | of | with | C |
| 127 | It differs ______ their last suggestion? | about | in | from | of | C |
| 128 | He was embarrassed because everybody was laughing ______ him? | of | in | about | at | D |
| 129 | I am envious ______ them? | of | in | about | on | A |
| 130 | I prefer tea______ coffee. | to | than | then | of | A |
| 131 | I am famous ______honesty where Javed is notorious for dishonesty. | for | to | upon | in | A |
| 132 | I was aware ______ the problems parents were facing? | of | with | to | from | A |
| 133 | The rains have set ______. | In | Of | On | Out | A |
| 134 | I looked ______ you at the party, but I didn’t see you. | none | at | for | on | C |
| 135 | You should not jest ______ his poverty. | on | with | at | of | C |
| 136 | My friend amused us ______ funny jokes. | from | at | on | with | D |
| 137 | He persisted ______ silly ideas. | on | to | in | none | C |
| 138 | Nelson Mandela was deprived ______ his freedom. | from | in | with | of | D |
| 139 | I was astonished ______ his failure. | In | At | On | For | B |
`;

/* --- Parser --- */
function parseTable(text) {
  const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
  const rows = [];
  for (const line of lines) {
    if (!line.startsWith('|')) continue;
    // skip header sep line
    if (/^\|\s*-+\s*\|/.test(line)) continue;
    // split by | and trim
    const parts = line.split('|').map(s => s.trim());
    // parts[1] = Sr#, [2]=Question, [3]=A, [4]=B, [5]=C, [6]=D, [7]=Answer (may exist)
    if (parts.length < 7) continue;
    const sr = parts[1];
    const question = parts[2];
    const A = parts[3];
    const B = parts[4];
    const C = parts[5];
    const D = parts[6];
    // answer sometimes contains trailing pipes/spaces
    const answerPart = parts[7] ? parts[7].replace(/\|/g,'').trim() : '';
    const answer = (answerPart || '').toUpperCase().replace(/[^A-D]/g,'').trim();
    // only include real numbered rows
    if (/^\d+/.test(sr)) {
      rows.push({
        id: parseInt(sr,10),
        question: question,
        options: { A: A, B: B, C: C, D: D },
        answer: answer || ''
      });
    }
  }
  // sort by id to ensure order
  rows.sort((a,b) => a.id - b.id);
  return rows;
}

/* --- Rendering --- */
const questions = parseTable(rawTable);
const container = document.getElementById('questionsContainer');
const totalSpan = document.getElementById('total');

totalSpan.textContent = questions.length;

function createQuestionBlock(q) {
  const wrap = document.createElement('div');
  wrap.className = 'question';
  wrap.id = `q${q.id}`;

  const header = document.createElement('div');
  header.className = 'q-header';
  header.innerHTML = `<div class="q-number">${q.id}</div><div class="q-text">${escapeHtml(q.question)}</div>`;
  wrap.appendChild(header);

  const optionsWrap = document.createElement('div');
  optionsWrap.className = 'options';

  ['A','B','C','D'].forEach(letter => {
    const opt = document.createElement('label');
    opt.className = 'option';
    opt.htmlFor = `q${q.id}_${letter}`;

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = `q${q.id}`;
    input.id = `q${q.id}_${letter}`;
    input.value = letter;

    const span = document.createElement('span');
    span.innerText = `${letter}. ${q.options[letter] || ''}`;

    opt.appendChild(input);
    opt.appendChild(span);
    optionsWrap.appendChild(opt);
  });

  wrap.appendChild(optionsWrap);

  const feedback = document.createElement('div');
  feedback.className = 'feedback muted';
  feedback.id = `feedback_${q.id}`;
  wrap.appendChild(feedback);

  return wrap;
}

function escapeHtml(s){
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

questions.forEach(q => {
  container.appendChild(createQuestionBlock(q));
});

/* --- Submit / scoring --- */
const submitBtn = document.getElementById('submitBtn');
const resetBtn = document.getElementById('resetBtn');
const scoreEl = document.getElementById('score');
const finalScoreEl = document.getElementById('finalScore');

submitBtn.addEventListener('click', evaluate);
resetBtn.addEventListener('click', resetQuiz);

function evaluate(){
  let score = 0;
  // For each question
  questions.forEach(q => {
    const chosen = document.querySelector(`input[name="q${q.id}"]:checked`);
    const feedback = document.getElementById(`feedback_${q.id}`);
    feedback.innerHTML = ''; feedback.className='feedback';
    const correct = q.answer || ''; // might be blank; treat as wrong if blank

    if (chosen && chosen.value === correct) {
      score++;
      feedback.classList.add('correct');
      feedback.innerHTML = `<span class="tick">✅</span> Your answer is correct.`;
    } else {
      feedback.classList.add('wrong');
      const chosenText = chosen ? chosen.value : 'No answer';
      const correctText = correct ? `${correct}. ${q.options[correct] || ''}` : '(no answer provided in source)';
      feedback.innerHTML = `<span class="tick">❌</span> Your answer is wrong. Correct answer is: <strong>${escapeHtml(correctText)}</strong>`;
    }
  });

  scoreEl.textContent = score;
  finalScoreEl.textContent = `Final score: ${score} out of ${questions.length}`;
  // Scroll to top so user can see their score
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetQuiz(){
  document.querySelectorAll('input[type=radio]').forEach(i => i.checked = false);
  document.querySelectorAll('.feedback').forEach(f => { f.textContent = ''; f.className='feedback muted'; });
  scoreEl.textContent = '0';
  finalScoreEl.textContent = '';
}

/* --- accessibility: allow pressing Enter on last radio to trigger submit --- */
document.addEventListener('keydown', e => {
  if (e.key === 'Enter' && document.activeElement && document.activeElement.type === 'radio') {
    e.preventDefault();
    evaluate();
  }
});
