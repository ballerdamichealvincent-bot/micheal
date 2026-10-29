# Activity 4 — Prompt, Observe, Refine

**Project:** Pasyar Marinduque — Heritage & Island Guide  
**Innovation sector:** Tourism & Cultural Innovation  
**Student:** Micheal Vincent Ballerda

## Project concept — Task 1

| Item | Project |
|---|---|
| Local challenge | Information about local heritage and visitor experiences can be scattered or out of date, making discovery and simple trip planning harder. This is a prototype problem statement, not a finding from a local survey. |
| Target users | Marinduque residents, first-time visitors, families, and people interested in local heritage. |
| Proposed project | Pasyar Marinduque, a single-page guide to example island experiences. |
| Core features | Search/filter a small demonstration catalog; add/remove places in an on-page visit plan; show respectful-visit and verification reminders. |

## Evidence and prompt-record note

The HTML, CSS, JavaScript, and supporting records in this folder are actual artifacts created in this assistant session. The handout requires students to submit prompts and outputs from separate GitHub Copilot experiments. The initial request in this session did not submit each experiment prompt separately to Copilot Chat. Therefore, the prompts below are marked as **prepared, not independently submitted**, and the linked files are not falsely described as separate Copilot Chat transcripts. The finished prototype can be inspected and tested as the output produced here. If separate Copilot experiment evidence is required for grading, submit the prepared prompts in Copilot Chat and append its actual responses.

## Task 2 — Zero-shot prompting

**Technique:** Zero-shot prompt  
**Objective:** Generate a basic starting page without examples.

**Prepared prompt (not independently submitted):**

> Create a simple webpage that helps people discover tourism and cultural experiences in Marinduque.

**Output record:** [`outputs/zero-shot.html`](outputs/zero-shot.html) is a simple baseline page created in this assistant session for comparison. It is not a captured Copilot Chat response.

**Observation:** A broad prompt gives a quick headline and a few example stops, but it does not specify who the guide serves, how visitors find places, how to plan a visit, accessibility requirements, or which information should be treated as demonstration data.

**Next action:** Add local context, a small feature list, technical constraints, and criteria that can be checked in the browser.

## Task 3 — Structured prompt

**Technique:** Role · Task · Context · Constraints · Expected Output · Acceptance Criteria  
**Objective:** Improve relevance and make the result verifiable.

**Prepared prompt (not independently submitted):**

> Act as a frontend web developer. Build a responsive, single-page tourism and cultural guide for Marinduque residents and first-time visitors who want to discover local heritage, culture, and coastal experiences. Include a searchable and filterable set of example places and a simple visit planner where users can add and remove places. Add a short respectful-travel reminder. Use semantic HTML, CSS, and vanilla JavaScript only; do not use a backend, database, external API, or framework. Label all listings as demonstration content where appropriate and do not invent live schedules, availability, transport details, or travel times. Provide `index.html`, `styles.css`, and `app.js`. The page must work on mobile and desktop, use keyboard-operable native controls, provide visible focus states and accessible labels, and show clear empty states. Verify that search/filtering, add/remove, and clearing the plan work.

**Output record:** [`index.html`](index.html), [`styles.css`](styles.css), and [`app.js`](app.js) are the finished prototype created in this assistant session.

**Observation:** Compared with the baseline, the final page identifies the intended audience and Marinduque context, defines two interactive features, constrains the implementation to static frontend files, and labels information as illustrative. The finished prototype also includes a mobile layout, keyboard focus styling, and empty states.

**Next action:** Inspect the markup and test the controls at mobile and desktop widths; do not treat AI-generated content as verified local travel information.

## Task 4A — Few-shot prompting

**Technique:** Few-shot prompting with examples in a repeated data format  
**Objective:** Make sample experience content consistent.

**Prepared prompt (not independently submitted):**

> Create four tourism-guide entries for a Marinduque demonstration page using this format:  
> `Place: [name]`  
> `Category: [Heritage, Culture, or Coast & Nature]`  
> `Area: [town or island-wide]`  
> `Visitor note: [one concise, cautious sentence; do not invent schedules or availability]`  
> Example 1:  
> `Place: Boac Heritage District`  
> `Category: Heritage`  
> `Area: Boac`  
> `Visitor note: Explore the town's historic streets at a considerate pace and check local access details.`  
> Example 2:  
> `Place: Moriones Festival`  
> `Category: Culture`  
> `Area: Marinduque`  
> `Visitor note: Learn about this Holy Week tradition; dates and local programs vary.`  
> Generate two additional entries in the same format, then use the four examples as filterable guide cards.

**Output record:** [`outputs/few-shot-experiment.md`](outputs/few-shot-experiment.md) preserves the consistent example set created for this deliverable. The entries are demonstration content, not a separately captured Copilot response.

**Observation:** Giving a fixed field structure makes the category and visitor note more consistent than an unconstrained list. Cautious wording also avoids promising current schedules or services.

**Next action:** Confirm local names, access, and visitor guidance with reliable local sources before publishing this guide.

## Task 4B — Role assignment

**Technique:** Role assignment  
**Objective:** Review the same interface from an accessibility perspective.

**Prepared prompt (not independently submitted):**

> Act as a frontend accessibility reviewer. Examine the Pasyar Marinduque prototype for semantic structure, keyboard access, labels, focus visibility, status announcements, and mobile readability. Identify the most important issues and recommend small changes without adding a backend or expanding the project scope.

**Output record:** [`outputs/role-review.md`](outputs/role-review.md) contains the accessibility review notes made while preparing this prototype, not a separate Copilot Chat response.

**Observation:** A specialized review makes it easier to focus on native controls, visible keyboard focus, announced result/plan counts, and small-screen behavior instead of adding unrelated features.

**Next action:** Verify keyboard navigation and a narrow viewport in a browser; address any issues found.

## Task 5 — Structured analysis and refinement

**Technique:** Structured analysis and refinement  
**Objective:** Check the implementation against the requirements, make a targeted correction, and record how it was checked.

**Prepared prompt (not independently submitted):**

> Review the Pasyar Marinduque HTML, CSS, and JavaScript against the project requirements: responsive single page, semantic controls, searchable/category-filtered experiences, and an add/remove/clear visit plan. Identify concrete implementation risks, recommend the smallest corrections, and give a reproducible verification procedure. Do not claim a behavior is verified unless it has actually been tested.

**Output record:** [`outputs/structured-analysis.md`](outputs/structured-analysis.md) records the implementation review and the checks performed for this deliverable.

**Selected refinement:** Use native buttons and form controls, visible focus indicators, live result/plan counts, explicit no-results and empty-plan states, and a single `renderPlan` function to keep the planner display and count in sync.

**Verification evidence:** Browser interaction checks confirmed one Coast & Nature result, two results for “Boac,” a visible no-results message for a non-matching query, correct add/remove/clear counts, and a disabled clear button when the plan is empty. Keyboard Tab reached an add button; Enter added and removed an item. At a 390 px viewport, the cards stacked in one column and the document width was 375 px (no horizontal overflow). This does not substitute for screen-reader testing.

## Task 6 — Comparison and reflection

| Technique | Observation |
|---|---|
| Zero-shot | Quickly establishes a tourism page, but leaves audience, local context, usable features, and accuracy constraints unspecified. |
| Structured prompt | Gives a clearer audience, scope, technologies, output files, accessibility requirements, and acceptance checks. |
| Few-shot | Makes the sample experience entries follow a predictable format and keeps their notes cautious. |
| Role assignment | Directs attention to keyboard use, semantic controls, focus visibility, announcements, and responsive readability. |
| Structured analysis | Turns broad quality goals into specific checks and a small set of implementation decisions. |

**Final reflection:** The structured prompt is the strongest starting point because it specifies both what the page should do and how to keep it within the assignment's scope. Few-shot examples make the guide content more consistent, while an accessibility-focused role and a checklist-based review expose concerns that a general request might miss. AI-generated code still needs browser testing, and local listings need verification with appropriate local sources. The experience cards and planning list are demonstration content only.

## Final deliverable checklist

- [x] Single-page frontend prototype in HTML, CSS, and JavaScript
- [x] Search/filter and simple visit-planning interactions
- [x] Prepared prompt records, comparisons, and reflection
- [x] Supporting output records in `outputs/`
- [ ] Submit each prepared experiment prompt to Copilot Chat and append actual responses if the instructor requires separate experiment transcripts
- [x] Test filtering, planning controls, and a narrow viewport in a browser
- [x] Verify keyboard Tab/Enter for visit-plan add/remove
- [ ] Complete screen-reader testing in the submission environment
- [ ] Verify place information with local tourism sources before presenting it as current
