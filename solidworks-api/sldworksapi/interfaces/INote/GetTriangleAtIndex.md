---
type: method
interface: INote
member: GetTriangleAtIndex
returns: System.Object
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the triangle where the index begins at 0
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - INote.GetTriangleCount
  - INote.IGetTriangleAtIndex
keywords:
  - note
  - see
  - also
  - inote
  - triangle
  - gettriangleatindex
  - index
  - int32
  - object
---

# INote.GetTriangleAtIndex

Gets the triangle at the specified index.

## Signature

```csharp
System.Object GetTriangleAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the triangle where the index begins at 0

## Return Value

Array of doubles (see Remarks )

## Remarks

The return value is the following array of doubles :
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
= first XYZ vertex point
vertexPt2
[3]
= second XYZ vertex point
vertexPt3
[3]
= third XYZ vertex point
isFilled
= BOOLEAN returned as a double and is True if the triangle is filled, false otherwise
lineType
= line type; see
swLineTypes_e

## See Also

- `INote.GetTriangleCount`
- `INote.IGetTriangleAtIndex`