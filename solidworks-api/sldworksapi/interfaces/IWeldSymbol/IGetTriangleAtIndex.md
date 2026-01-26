---
type: method
interface: IWeldSymbol
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
  - IWeldSymbol.GetTriangleAtIndex
  - IWeldSymbol.GetTriangleCount
keywords:
  - igettriangleatindex
  - iweldsymbol
  - weld
  - symbol
  - triangle
  - index
  - int32
  - double
---

# IWeldSymbol.IGetTriangleAtIndex

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
vertexPt1[3]
= first XYZ vertex point
vertexPt2[3]
= second XYZ vertex point
vertexPt3[3]
= third XYZ vertex point
isFilled
= Boolean returned as a double; 1.0 if the triangle is filled, 0.0 if not
lineType
= line type as defined in
swLineTypes_e

## See Also

- `IWeldSymbol.GetTriangleAtIndex`
- `IWeldSymbol.GetTriangleCount`