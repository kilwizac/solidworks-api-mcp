---
type: method
interface: IGtol
member: GetTriangleAtIndex
returns: System.Object
parameters:
  -
    name: Index
    type: System.Int32
    description: 0-based index of the piece of text
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IGtol.GetTriangleCount
  - IGtol.IGetTriangleAtIndex
keywords:
  - gettriangleatindex
  - igtol
  - gtol
  - triangle
  - index
  - int32
  - object
---

# IGtol.GetTriangleAtIndex

Gets the triangle at the specified index.

## Signature

```csharp
System.Object GetTriangleAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): 0-based index of the piece of text

## Return Value

Array of doubles (see Remarks )

## Remarks

The return value is the following array of doubles:
[
vertexPt1[3], vertexPt2[3], vertexPt3[3], isFilled, lineType
]
where:
vertexPt1[3]
= First XYZ vertex point
vertexPt2[3]
= Second XYZ vertex point
vertexPt3[3]
= Third XYZ vertex point
isFilled
= Boolean returned as a double and is True if the triangle is filled, false if not
lineType
= Line type (see
swLineTypes_e
)

## See Also

- `IGtol.GetTriangleCount`
- `IGtol.IGetTriangleAtIndex`