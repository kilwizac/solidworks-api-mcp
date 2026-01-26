---
type: method
interface: ITessellation
member: GetEdgeFins
returns: System.Object
parameters:
  -
    name: EdgeDisp
    type: System.Object
    description: IEdge object
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - ITessellation.IGetEdgeFins
keywords:
  - getedgefins
  - itessellation
  - tessellation
  - edge
  - fins
  - disp
  - object
---

# ITessellation.GetEdgeFins

Gets all of the fin IDs corresponding to a edge.

## Signature

```csharp
System.Object GetEdgeFins( 
   System.Object
EdgeDisp
)
```
## Parameters

- `EdgeDisp` (System.Object): IEdge object

## Return Value

Array of long or integer values describing the unique fin ID of every fin shared by this edge

## See Also

- `ITessellation.IGetEdgeFins`