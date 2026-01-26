---
type: method
interface: ITessellation
member: GetFinEdge
returns: System.Object
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
related:
  - ITessellation.IGetFinEdge
keywords:
  - getfinedge
  - itessellation
  - tessellation
  - fin
  - edge
  - id
  - int32
  - object
---

# ITessellation.GetFinEdge

Gets the edge corresponding to a fin.

## Signature

```csharp
System.Object GetFinEdge( 
   System.Int32
FinId
)
```
## Parameters

- `FinId` (System.Int32): ID of the fin from which you want to return the edge

## Return Value

Edge with which this fin is shared

## See Also

- `ITessellation.IGetFinEdge`