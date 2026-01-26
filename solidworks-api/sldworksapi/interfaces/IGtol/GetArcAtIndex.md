---
type: method
interface: IGtol
member: GetArcAtIndex
returns: System.Object
parameters:
  -
    name: Index
    type: System.Int32
    description: 0-based index of the arc
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IGtol.GetArcCount
  - IGtol.IGetArcAtIndex
keywords:
  - arcs
  - geometric
  - tolerancing
  - getarcatindex
  - igtol
  - gtol
  - arc
  - index
  - int32
  - object
---

# IGtol.GetArcAtIndex

Gets information about the specified arc.

## Signature

```csharp
System.Object GetArcAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): 0-based index of the arc

## Return Value

Array of doubles (see Remarks )

## Remarks

The return value is the following array of doubles:
[
lineType, startPt[3], endPt[3], centerPt[3], rotationDir
]
where:
lineType
Line type
startPt[3]
XYZ arc start point
endPt[3]
XYZ arc end point
centerPt[3]
XYZ arc center point
rotationDir
Boolean returned as a double and represents the rotation direction, where CCW returns True and CW returns false

## See Also

- `IGtol.GetArcCount`
- `IGtol.IGetArcAtIndex`