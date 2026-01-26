---
type: enum
name: swPropertyManagerPageStatus_e
description: PropertyManager page statuses.
member_count: 4
docset: swconst
categories:
  - constants
used_by: []
---

# swPropertyManagerPageStatus_e

PropertyManager page statuses.

## Values

| Member | Value | Description |
|---|---|---|
| `swPropertyManagerPage_CreationFailure` | -1 |  |
| `swPropertyManagerPage_NoDocument` | -2 | = A PropertyManager page can only be shown in a SOLIDWORKS document window; you can create and set up the page without a document being active, but there must be a document active when you try to show the page; if there is no active document window, then swPropertyManagerPage_NoDocument is returned |
| `swPropertyManagerPage_Okay` | 0 |  |
| `swPropertyManagerPage_UnsupportedHandler` | 1 | = The PropertyManager page is created and shown; however, a problem exists; for example, you must specify the handler when you create the PropertyManager page; your add-in must implement IPropertyManagerPage2Handler4 so that SOLIDWORKS can call back certain methods when operations, such as clicking a button, occur on the PropertyManager page;if the interface that is passed in does not support PropertyManagerPage2Handler4, then swPropertyManagerPage_UnsupportedHandler is returned |