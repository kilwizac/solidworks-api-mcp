---
type: method
interface: ISFSymbol
member: IGetTriangleAtIndex
returns: System.Double
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
  - ISFSymbol.GetTriangleAtIndex
keywords:
  - igettriangleatindex
  - isfsymbol
  - isf
  - symbol
  - triangle
  - index
  - int32
  - double
---

# ISFSymbol.IGetTriangleAtIndex

Gets the triangle at the specified index.

## Signature

```csharp
System.Double IGetTriangleAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the triangle where the index begins at 0

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
ISFSymbol::GetTriangleCount
before calling this method to get the number of triangles in this surface finish symbol.
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
= First XYZ vertex point
vertexPt2
[3]
= Second XYZ vertex point
vertexPt3
[3]
= Third XYZ vertex point
isFilled
= BOOLEAN returned as a double; True if triangle is filled, false if not
lineType
= Line type as defined in
swLineTypes_e
.

## See Also

- `ISFSymbol.GetTriangleAtIndex`