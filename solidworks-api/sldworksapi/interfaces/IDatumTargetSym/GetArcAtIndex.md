---
type: method
interface: IDatumTargetSym
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
  - IDatumTargetSym.GetArcCount
  - IDatumTargetSym.IGetArcAtIndex
keywords:
  - annotation
  - see
  - also
  - iannotation
  - datum
  - targets
  - getarcatindex
  - idatumtargetsym
  - target
  - sym
  - arc
  - index
  - int32
  - object
---

# IDatumTargetSym.GetArcAtIndex

Gets information for the specified arc for this datum target symbol.

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

The return value is the following array of doubles:
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
Boolean returned as a double and represents the rotation direction, where CCW = True and CW = false

## See Also

- `IDatumTargetSym.GetArcCount`
- `IDatumTargetSym.IGetArcAtIndex`