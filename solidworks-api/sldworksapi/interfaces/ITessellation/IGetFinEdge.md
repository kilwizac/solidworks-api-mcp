---
type: method
interface: ITessellation
member: IGetFinEdge
returns: Edge
parameters:
  -
    name: FinId
    type: System.Int32
    description: ID of the fin from which you want to return the edge
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - igetfinedge
  - itessellation
  - tessellation
  - fin
  - edge
  - id
  - int32
---

# ITessellation.IGetFinEdge

Gets the edge corresponding to a fin.

## Signature

```csharp
Edge IGetFinEdge( 
   System.Int32
FinId
)
```
## Parameters

- `FinId` (System.Int32): ID of the fin from which you want to return the edge

## Return Value

Edge with which this fin is shared