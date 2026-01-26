---
type: method
interface: ITessellation
member: GetVertexParams
returns: System.Object
parameters:
  -
    name: VertexId
    type: System.Int32
    description: ID of the tessellation vertex for which you want to the parameters
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - ITessellation.IGetVertexParams
keywords:
  - getvertexparams
  - itessellation
  - tessellation
  - vertex
  - params
  - id
  - int32
  - object
---

# ITessellation.GetVertexParams

Gets the parameters corresponding to a tessellation vertex.

## Signature

```csharp
System.Object GetVertexParams( 
   System.Int32
VertexId
)
```
## Parameters

- `VertexId` (System.Int32): ID of the tessellation vertex for which you want to the parameters

## Return Value

Array of 17 doubles (see Remarks )

## Remarks

The following parameters returned from this method are formatted as an array of 17 doubles:
u, v - location of the vertex on the face (return value position [0-1])
du - tangent vector at u (return value [2-4])
dv - tangent vector at v (return value [5-7])
d2u, dudv, d2v - curvature vectors for u and v (return value [8-16])

## See Also

- `ITessellation.IGetVertexParams`