---
type: method
interface: IDatumTag
member: GetArcAtIndex
returns: System.Object
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
  - IDatumTag.GetArcCount
  - IDatumTag.IGetArcAtIndex
keywords:
  - getarcatindex
  - idatumtag
  - datum
  - tag
  - arc
  - index
  - int32
  - object
---

# IDatumTag.GetArcAtIndex

Gets information for the specified arc for this datum tag.

## Signature

```csharp
System.Object GetArcAtIndex( 
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
Before calling this method, call
IDatumTag::GetArcCount
to find out the number of arcs in this datum tag.

## See Also

- `IDatumTag.GetArcCount`
- `IDatumTag.IGetArcAtIndex`