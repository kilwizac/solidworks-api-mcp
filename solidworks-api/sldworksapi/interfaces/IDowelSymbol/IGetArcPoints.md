---
type: method
interface: IDowelSymbol
member: IGetArcPoints
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDowelSymbol.GetArcPoints
keywords:
  - igetarcpoints
  - idowelsymbol
  - dowel
  - symbol
  - arc
  - points
  - double
---

# IDowelSymbol.IGetArcPoints

Gets the start, mid, and end points (in 2D only) of the arc segment on which this dowel symbol is based.

## Signature

```csharp
System.Double IGetArcPoints()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of size 6 containing start, mid, and end point x and y coordinates VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

If the arc segment is a complete circle, the start and end points are the same, and the midpoint is at the 180 position.

## See Also

- `IDowelSymbol.GetArcPoints`