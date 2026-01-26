---
type: method
interface: IView
member: IGetOutline
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetOutline
keywords:
  - bounding
  - box
  - drawing
  - views
  - view
  - see
  - also
  - iview
  - igetoutline
  - outline
  - double
---

# IView.IGetOutline

Gets the bounding box for a view (sheet or drawing) in meters on the drawing page.

## Signature

```csharp
System.Double IGetOutline()
```
## Parameters

None.

## Return Value

Array of doubles (see Remarks )

## Remarks

The return value is an array of 4 doubles with the following format:
0, X min
1, Y min
2, X max
3, Y max

## See Also

- `IView.GetOutline`