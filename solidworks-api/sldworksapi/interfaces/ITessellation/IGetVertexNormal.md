---
type: method
interface: ITessellation
member: IGetVertexNormal
returns: System.Double
parameters:
  -
    name: VertexId
    type: System.Int32
    description: ID of the vertex from which you want to return the normal information
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - ITessellation.GetVertexNormal
keywords:
  - igetvertexnormal
  - itessellation
  - tessellation
  - vertex
  - normal
  - id
  - int32
  - double
---

# ITessellation.IGetVertexNormal

Gets the information that describes the normal direction corresponding to vertex.

## Signature

```csharp
System.Double IGetVertexNormal( 
   System.Int32
VertexId
)
```
## Parameters

- `VertexId` (System.Int32): ID of the vertex from which you want to return the normal information

## Return Value

Array of 3 doubles describing the normal vector direction of this vertex corresponding to the face to which it belongs

## See Also

- `ITessellation.GetVertexNormal`