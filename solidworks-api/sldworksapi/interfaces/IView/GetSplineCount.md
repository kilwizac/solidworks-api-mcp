---
type: method
interface: IView
member: GetSplineCount
returns: System.Int32
parameters:
  -
    name: PointCount
    type: System.Int32
    description: Number of doubles (see IView::GetSplines3 or IView::IGetSplines3 Remarks)
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related: []
keywords:
  - splines
  - drawing
  - views
  - see
  - also
  - iview
  - view
  - getsplinecount
  - spline
  - count
  - point
  - int32
---

# IView.GetSplineCount

Gets the number of splines in the view.

## Signature

```csharp
System.Int32 GetSplineCount( 
   out System.Int32
PointCount
)
```
## Parameters

- `PointCount` (System.Int32): Number of doubles (see IView::GetSplines3 or IView::IGetSplines3 Remarks)

## Return Value

Number of splines in the view