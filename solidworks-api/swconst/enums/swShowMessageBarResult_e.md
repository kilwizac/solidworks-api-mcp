---
type: enum
name: swShowMessageBarResult_e
description: Message bar display result codes.
member_count: 4
docset: swconst
categories:
  - constants
used_by: []
---

# swShowMessageBarResult_e

Message bar display result codes.

## Values

| Member | Value | Description |
|---|---|---|
| `swShowMessageBarResult_DontShowAgain` | 1 | = The message bar is not shown when "Don't show again" is selected |
| `swShowMessageBarResult_FailedInvalidDefinition` | 2 | = The message bar could not be displayed due to an invalid definition (e.g., empty title/description) |
| `swShowMessageBarResult_FailedInvalidHandler` | 3 | = The message bar could not be desiplayed because the Handler argument is NULL or does not support the expected interface |
| `swShowMessageBarResult_Shown` | 0 | = The modeless message bar is shown |