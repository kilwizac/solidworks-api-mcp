---
type: enum
name: swShowNotificationResult_e
description: User notification display return values.
member_count: 4
docset: swconst
categories:
  - constants
used_by: []
---

# swShowNotificationResult_e

User notification display return values.

## Values

| Member | Value | Description |
|---|---|---|
| `swShowNotificationResult_DontShowAgain` | 1 | = The user notification is not shown when "Don't show again" is selected |
| `swShowNotificationResult_FailedInvalidDefinition` | 2 | = The user notification could not be displayed due to an invalid definition (e.g., empty title/description) |
| `swShowNotificationResult_FailedInvalidHandler` | 3 | = The user notification could not be desiplayed because the Handler argument is NULL or does not support the expected interface |
| `swShowNotificationResult_Shown` | 0 | = The user notification is shown |