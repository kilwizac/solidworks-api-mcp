---
type: enum
name: swComponentResolveStatus_e
description: States for resolving components.
member_count: 4
docset: swconst
categories:
  - constants
used_by: []
---

# swComponentResolveStatus_e

States for resolving components.

## Values

| Member | Value | Description |
|---|---|---|
| `swResolveAbortedByUser` | 1 | = User aborted resolving the components |
| `swResolveError` | 3 | = Not used |
| `swResolveNotPerformed` | 2 | = Some of the components did not get resolved despite the user requesting it |
| `swResolveOk` | 0 | = Components resolved okay |