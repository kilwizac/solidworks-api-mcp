---
type: enum
name: swAnnotationVisibilityState_e
description: Annotation visibility states.
member_count: 4
docset: swconst
categories:
  - constants
used_by: []
---

# swAnnotationVisibilityState_e

Annotation visibility states.

## Values

| Member | Value | Description |
|---|---|---|
| `swAnnotationHalfHidden` | 2 | = Annotation is half-hidden (grayed out) or hidden depending on the interactive user's actions. For example, if the annotation's visibility is set to swAnnotationHalfHidden by IAnnotation::Visible , then that annotation is in a half-hidden state, which is not a permanent state. During a Hide/Show Annotations operation in a drawing, a half-hidden annotation is displayed in gray if the interactive user selects to show all annotations. Any annotation set to swAnnotationHalfHidden is hidden when the interactive user finishes using Hide/Show Annotations. |
| `swAnnotationHidden` | 3 | = Annotation is hidden |
| `swAnnotationVisibilityUnknown` | 0 | = Annotation visibility is not known |
| `swAnnotationVisible` | 1 | = Annotation is visible |