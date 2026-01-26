---
type: method
interface: IDowelSymbol
member: GetArcPoints
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDowelSymbol.IGetArcPoints
keywords:
  - getarcpoints
  - idowelsymbol
  - dowel
  - symbol
  - arc
  - points
  - object
---

# IDowelSymbol.GetArcPoints

Gets the start, mid, and end points (in 2D only) of the arc segment on which this dowel symbol is based.

## Signature

```csharp
System.Object GetArcPoints()
```
## Parameters

None.

## Return Value

Array of start, mid, and end point x and y coordinates

## Remarks

If the arc segment is a complete circle, the start and end points are the same, and the midpoint is at the 180 position.

## See Also

- `IDowelSymbol.IGetArcPoints`