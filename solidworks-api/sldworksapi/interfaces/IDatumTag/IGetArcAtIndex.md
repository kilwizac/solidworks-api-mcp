---
type: method
interface: IDatumTag
member: IGetArcAtIndex
returns: System.Double
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the arc; index begins at 0
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDatumTag.GetArcAtIndex
  - IDatumTag.GetArcCount
keywords:
  - igetarcatindex
  - idatumtag
  - datum
  - tag
  - arc
  - index
  - int32
  - double
---

# IDatumTag.IGetArcAtIndex

Gets information for the specified arc.

## Signature

```csharp
System.Double IGetArcAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the arc; index begins at 0

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
Line type as defined in
swLineTypes_e
startPt
[3]
XYZ arc start point
endPt
[3]
XYZ arc end point
centerPt
[3]
XYZ arc center point
rotationDir
Boolean returned as a double that represents the rotation direction, where CCW = True and CW = false

## See Also

- `IDatumTag.GetArcAtIndex`
- `IDatumTag.GetArcCount`