---
type: method
interface: IDatumTag
member: IGetTriangleAtIndex
returns: System.Double
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of triangle; index begins at 0
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDatumTag.FilledTriangle
  - IDatumTag.GetTriangleAtIndex
  - IDatumTag.GetTriangleCount
keywords:
  - igettriangleatindex
  - idatumtag
  - datum
  - tag
  - triangle
  - index
  - int32
  - double
---

# IDatumTag.IGetTriangleAtIndex

Gets the triangle at the specified index of this datum tag.

## Signature

```csharp
System.Double IGetTriangleAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of triangle; index begins at 0

## Return Value

Array of doubles (see Remarks )

## Remarks

The return value is the following array of doubles:
[
vertexPt1
[3],
vertexPt2
[3],
vertexPt3
[3],
isFilled
,
lineType
]
where:
vertexPt1
[3]
First XYZ vertex point
vertexPt2
[3]
Second XYZ vertex point
vertexPt3
[3]
Third XYZ vertex point
isFilled
Boolean returned as a double that is True if the triangle is filled, false if it is not
lineType
Line type as defined in
swLineTypes_e

## See Also

- `IDatumTag.FilledTriangle`
- `IDatumTag.GetTriangleAtIndex`
- `IDatumTag.GetTriangleCount`