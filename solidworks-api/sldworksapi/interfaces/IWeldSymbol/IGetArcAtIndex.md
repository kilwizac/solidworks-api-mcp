---
type: method
interface: IWeldSymbol
member: IGetArcAtIndex
returns: System.Double
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the arc where the index begins at 0
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IWeldSymbol.GetArcAtIndex
  - IWeldSymbol.GetArcCount
keywords:
  - igetarcatindex
  - iweldsymbol
  - weld
  - symbol
  - arc
  - index
  - int32
  - double
---

# IWeldSymbol.IGetArcAtIndex

Gets information for the specified arc.

## Signature

```csharp
System.Double IGetArcAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the arc where the index begins at 0

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

The return value is the following array of doubles :
[
lineType
,
startPt
[3],
endPt
[3],
centerPt
[3],
rotationDir
]
where:
lineType
= line type as defined in
swLineTypes_e
.
startPt[3]
= XYZ arc start point.
endPt[3]
= XYZ arc end point.
centerPt[3]
= XYZ arc center point.
rotationDir
= value is a boolean returned as a double and represents the rotation direction, where CCW = 1.0 and CW = 0.0.

## See Also

- `IWeldSymbol.GetArcAtIndex`
- `IWeldSymbol.GetArcCount`