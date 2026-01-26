---
type: enum
name: swHandleWindowFromHandleCreationFailure_e
description: Actions on failure to create a .NET control on a PropertyManager page.
member_count: 3
docset: swconst
categories:
  - constants
used_by: []
---

# swHandleWindowFromHandleCreationFailure_e

Actions on failure to create a .NET control on a PropertyManager page.

## Values

| Member | Value | Description |
|---|---|---|
| `swHandleWindowFromHandleCreationFailure_Cancel` | 1 | = Create the PropertyManager page without the .NET control. (default) |
| `swHandleWindowFromHandleCreationFailure_Continue` | 3 | = Cancel the creation of the PropertyManager page. |
| `swHandleWindowFromHandleCreationFailure_Retry` | 2 | = Try to create the .NET control again. |