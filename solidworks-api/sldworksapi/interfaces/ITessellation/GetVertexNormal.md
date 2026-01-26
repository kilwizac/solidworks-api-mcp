---
type: method
interface: ITessellation
member: GetVertexNormal
returns: System.Object
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
  - ITessellation.IGetVertexNormal
keywords:
  - getvertexnormal
  - itessellation
  - tessellation
  - vertex
  - normal
  - id
  - int32
  - object
---

# ITessellation.GetVertexNormal

Gets the information that describes the normal direction corresponding to vertex.

## Signature

```csharp
System.Object GetVertexNormal( 
   System.Int32
VertexId
)
```
## Parameters

- `VertexId` (System.Int32): ID of the vertex from which you want to return the normal information

## Return Value

Array of 3 doubles describing the normal vector direction of this vertex corresponding to the face to which it belongs

## See Also

- `ITessellation.IGetVertexNormal`