---
type: enum
name: swRebuildOnActivation_e
description: Rebuild options during document activation.
member_count: 3
docset: swconst
categories:
  - constants
used_by: []
---

# swRebuildOnActivation_e

Rebuild options during document activation.

## Values

| Member | Value | Description |
|---|---|---|
| `swDontRebuildActiveDoc` | 1 | = do not rebuild the activated document |
| `swRebuildActiveDoc` | 2 | = rebuild the activated document |
| `swUserDecision` | 0 | = prompt the user whether to rebuild the activated document |