---
type: method
interface: IGtol
member: IGetArcAtIndex
returns: System.Double
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
  - IGtol.GetArcAtIndex
  - IGtol.GetArcCount
keywords:
  - arcs
  - geometric
  - tolerancing
  - igetarcatindex
  - igtol
  - gtol
  - arc
  - index
  - int32
  - double
---

# IGtol.IGetArcAtIndex

Gets information for the specified arc.

## Signature

```csharp
System.Double IGetArcAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): 0-based index of the arc

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

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

- `IGtol.GetArcAtIndex`
- `IGtol.GetArcCount`