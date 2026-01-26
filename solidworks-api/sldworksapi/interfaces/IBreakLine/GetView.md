---
type: method
interface: IBreakLine
member: GetView
returns: View
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related: []
keywords:
  - getview
  - ibreakline
  - break
  - line
  - view
---

# IBreakLine.GetView

Gets the drawing view for this break line.

## Signature

```csharp
View GetView()
```
## Parameters

None.

## Return Value

Pointer to the IView object

## Remarks

A drawing view can have several breaks. To get all of the breaks in a drawing view, use
IView::GetBreakLines
.