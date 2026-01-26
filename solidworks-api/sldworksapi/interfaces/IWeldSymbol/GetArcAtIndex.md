---
type: method
interface: IWeldSymbol
member: GetArcAtIndex
returns: System.Object
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
  - IWeldSymbol.GetArcCount
  - IWeldSymbol.IGetArcAtIndex
keywords:
  - getarcatindex
  - iweldsymbol
  - weld
  - symbol
  - arc
  - index
  - int32
  - object
---

# IWeldSymbol.GetArcAtIndex

Gets information for the specified arc.

## Signature

```csharp
System.Object GetArcAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the arc where the index begins at 0

## Return Value

Array of doubles (see Remarks )

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
= value is a BOOLEAN returned as a double and represents the rotation direction, where CCW = TRUE and CW = FALSE.

## See Also

- `IWeldSymbol.GetArcCount`
- `IWeldSymbol.IGetArcAtIndex`