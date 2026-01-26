---
type: method
interface: ITessellation
member: IGetEdgeFins
returns: System.Int32
parameters:
  -
    name: EdgeObj
    type: Edge
    description: IEdge object
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - ITessellation.GetEdgeFins
keywords:
  - igetedgefins
  - itessellation
  - tessellation
  - edge
  - fins
  - obj
  - int32
---

# ITessellation.IGetEdgeFins

Gets all of the fin IDs corresponding to a edge.

## Signature

```csharp
System.Int32 IGetEdgeFins( 
   Edge
EdgeObj
)
```
## Parameters

- `EdgeObj` (Edge): IEdge object

## Return Value

in-process, unmanaged C++: Pointer to an array of long or integer values describing the unique fin ID of every fin shared by this edge VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## See Also

- `ITessellation.GetEdgeFins`