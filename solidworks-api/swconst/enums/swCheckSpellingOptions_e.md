---
type: enum
name: swCheckSpellingOptions_e
description: Spell check options. Bitmask.
member_count: 6
docset: swconst
categories:
  - constants
used_by: []
---

# swCheckSpellingOptions_e

Spell check options. Bitmask.

## Values

| Member | Value | Description |
|---|---|---|
| `swSpellingIgnoreCapitalizedWords` | 8 | or 0x8; Capitalized words are not checked |
| `swSpellingIgnoreInternetAndFiles` | 16 | or 0x10; Words containing a web address are not checked |
| `swSpellingIgnoreMixedCase` | 2 | or 0x2; Words that are mixed-case (upper case and lowercase, e.g., eDrawings) are not checked |
| `swSpellingIgnoreUpperCase` | 1 | or 0x1; Words that are all uppercase are not checked |
| `swSpellingIgnoreWordsWithNumbers` | 4 | or 0x4; Words containing both letters and numbers are not checked |
| `swSpellingLeaveEngineRunning` | 32 | or 0x20; Do not stop Microsoft Word, which is the spell-check engine, after checking the first and any subsequent annotations if you have a significant number of annotations to spell check; however, on the last use of IAnnotation::CheckSpelling , you must disable this flag so that Microsoft Word is shut down after that call |