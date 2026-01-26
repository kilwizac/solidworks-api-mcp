---
type: enum
name: swPrompForFilenameCause_e
description: Reasons for opening or saving missing dependent documents.
member_count: 27
docset: swconst
categories:
  - constants
used_by: []
---

# swPrompForFilenameCause_e

Reasons for opening or saving missing dependent documents.

## Values

| Member | Value | Description |
|---|---|---|
| `swAddComponent` | 15 |  |
| `swAddVirtualComponent` | 24 |  |
| `swComponentPropsReplace` | 10 |  |
| `swCreateNamedViewFromFile` | 9 |  |
| `swDerivedPart` | 4 |  |
| `swDrawingAddViewFromFile` | 13 |  |
| `swDrawingInsert3ViewFromFile` | 14 |  |
| `swEditReadOnlyComponent` | 19 | = User attempted to edit a read-only component document in context. |
| `swFileReloadReplace` | 12 |  |
| `swFormNewSubAssembly` | 23 | = For use with ISldWorks PromptForFileNameNotify event handler, which fires the event when an interactive user wants to form a new sub-assembly. |
| `swGeneric` | 1 |  |
| `swInsertBlock` | 20 | = For use with ISldWorks PromptForFileNameNotify event handler, which fires the event when an interactive user clicks the Browse button on the Insert Block PropertyManager page. |
| `swInsertEnvelopeFromFile` | 7 |  |
| `swMakeComponentIndependent` | 25 |  |
| `swMirrorComponent` | 2 |  |
| `swMirrorComponentBrowse` | 8 |  |
| `swOpenAssociatedDrawing` | 11 |  |
| `swPromptForFilename_Cancelled` | 26 |  |
| `swSaveDefeaturedModel` | 22 | = For use with ISldWorks PromptForFileNameNotify event handler, which fires the event when an interactive user wants to save a de-featured model as a separate file. |
| `swSaveRoutePart` | 17 |  |
| `swSaveVirtualComponentExternally` | 18 | = For use with the ISldWorks PromptForMultipleFilenamesNotify event handler and ISldWorks::SetMultipleFilenamesPrompt to: Supply path names for virtual components to be saved externally. Suppress dialogs prompting user to select paths for virtual components. |
| `swSketchBlock` | 21 | = For use with ISldWorks PromptForFileNameNotify event handler, which fires the event when an interactive user clicks the Browse button on the Insert Block PropertyManager page. |
| `swSplitAssembly` | 5 |  |
| `swSplitPart` | 6 |  |
| `swStartRouteAssembly` | 16 |  |
| `swUnused` | 0 |  |
| `swWeldBead` | 3 |  |