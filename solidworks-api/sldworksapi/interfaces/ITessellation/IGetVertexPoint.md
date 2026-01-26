---
type: method
interface: ITessellation
member: IGetVertexPoint
returns: System.Double
parameters:
  -
    name: VertexId
    type: System.Int32
    description: Tessellation vertex ID of the vertex for which you want to get the X Y Z position values
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - ITessellation.GetVertexParams
keywords:
  - igetvertexpoint
  - itessellation
  - tessellation
  - vertex
  - point
  - id
  - int32
  - double
---

# ITessellation.IGetVertexPoint

Gets the X, Y and Z values that describe a tessellation vertex.

## Signature

```csharp
System.Double IGetVertexPoint( 
   System.Int32
VertexId
)
```
## Parameters

- `VertexId` (System.Int32): Tessellation vertex ID of the vertex for which you want to get the X Y Z position values

## Return Value

Array of 3 doubles that describe the tessellation vertex's X, Y, and Z position

## See Also

- `ITessellation.GetVertexParams`