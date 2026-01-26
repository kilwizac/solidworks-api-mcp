---
type: method
interface: ITessellation
member: IGetEdgeFinsCount
returns: System.Int32
parameters:
  -
    name: EdgeObj
    type: Edge
    description: IEdge object of which to get the number
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - igetedgefinscount
  - itessellation
  - tessellation
  - edge
  - fins
  - count
  - obj
  - int32
---

# ITessellation.IGetEdgeFinsCount

Gets the number of fins corresponding to an edge.

## Signature

```csharp
System.Int32 IGetEdgeFinsCount( 
   Edge
EdgeObj
)
```
## Parameters

- `EdgeObj` (Edge): IEdge object of which to get the number

## Return Value

Number of fins corresponding to the specified edge