# TODO 🚀

## ✅ Add FLASHCARDS FEATURE

- Add a **new dialog window** accessible via a new item in the menu panel called **"Flashcards"**.

---

### 🛠️ In the Flashcards dialog, enable the following options:

#### 1. Choose **Language Mode** (language shown first):
- **PL** (Polish)
- **UA** (Ukrainian)

#### 2. Choose **Repetition Mode**:
- **"Mastered"**  
  - Displays random rows where the third column value is `1` (true), and the row number is **not yet stored in session memory** (JavaScript side).
- **"Practicing"**  
  - Displays random rows where the third column value is `0` (false) or empty, and the row number is **not yet stored in session memory**.

---

### 🧠 Flashcard View (within the same modal):

After selecting a mode, show a flashcard interface that includes:

#### 🔤 Flashcard Content:
- A word or phrase in the selected language:
  - **Column 1 = PL**, **Column 2 = UA**

#### 🧮 Chosen Modes Progress Indicator:
- Show session progress, e.g.  
  `🔢 Practicing UA: 12 / 300`

#### 🧰 Action Buttons:
- 🔁 **Flip** – Show the word in the other language
- ✅ **Correct** – Mark the word as recalled:
  - Set the third column to `1`
  - Store the row number in session memory
- ❌ **Incorrect** – Mark the word as not recalled:
  - Set the third column to `0`
  - Store the row number in session memory
- ✏️ **Edit** – Allow in-place editing of the word pair directly in the flashcard before submission (use input fields bound to row)
- ⏭️ **Next** – Load the next eligible flashcard (only after ❌ or ✅ button was clicked)

---

### 📢 Completion Notice:
- When all matching rows (e.g. all "Practicing" in UA) have been reviewed, **notify the user** with a message like:
  > ✅ You've completed all "Practicing" words in Ukrainian for this session!

- Allow the user to **select another language or repetition mode** to continue.