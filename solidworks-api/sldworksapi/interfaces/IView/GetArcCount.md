---
type: method
interface: IView
member: GetArcCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetArcs4
keywords:
  - arcs
  - drawing
  - views
  - view
  - see
  - also
  - iview
  - getarccount
  - arc
  - count
  - int32
  - polylines
  - information
  - vba
---

# IView.GetArcCount

Gets the number of arcs in this view.

## Signature

```csharp
System.Int32 GetArcCount()
```
## Parameters

None.

## Return Value

Number of arcs

## Remarks

Call this method before
IView::GetArcs4
to determine the size of the array for that method.

## Examples

- Get Polylines Information (VBA) (Get_Polylines_Information_Example_VB.htm)

## See Also

- `IView.GetArcs4`