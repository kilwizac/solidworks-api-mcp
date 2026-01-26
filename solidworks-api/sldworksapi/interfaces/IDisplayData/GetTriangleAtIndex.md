---
type: method
interface: IDisplayData
member: GetTriangleAtIndex
returns: System.Object
parameters:
  -
    name: Index
    type: System.Int32
    description: Zero-based index of the desired triangle
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IDisplayData.GetTriangleCount
  - IDisplayData.IGetTriangleAtIndex
keywords:
  - gettriangleatindex
  - idisplaydata
  - display
  - data
  - triangle
  - index
  - int32
  - object
---

# IDisplayData.GetTriangleAtIndex

Gets the triangle at the specified index.

## Signature

```csharp
System.Object GetTriangleAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Zero-based index of the desired triangle

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
Boolean returned as a double that is True if the triangle is filled, false otherwise
lineType
Line type as defined in
swLineTypes_e

## See Also

- `IDisplayData.GetTriangleCount`
- `IDisplayData.IGetTriangleAtIndex`