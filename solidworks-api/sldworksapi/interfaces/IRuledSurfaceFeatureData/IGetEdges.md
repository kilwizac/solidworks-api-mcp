---
type: method
interface: IRuledSurfaceFeatureData
member: IGetEdges
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of edges
  -
    name: Entities
    type: System.Object
    description: Array of edges
  -
    name: SideFlags
    type: System.Int32
    description: in-process, unmanaged C++: Pointer to an array of flags indicating which side of each edge to create the ruled-surface feature VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IRuledSurfaceFeatureData.GetEdges
  - IRuledSurfaceFeatureData.ISetEdges
  - IRuledSurfaceFeatureData.SetEdges
keywords:
  - igetedges
  - iruledsurfacefeaturedata
  - ruled
  - surface
  - feature
  - data
  - edges
  - count
  - int32
  - entities
  - object
  - side
  - flags
  - void
---

# IRuledSurfaceFeatureData.IGetEdges

Gets the edges to used as the base for this ruled-surface feature.

## Signature

```csharp
void IGetEdges( 
   System.Int32
Count
,
   out System.Object
Entities
,
   out System.Int32
SideFlags
)
```
## Parameters

- `Count` (System.Int32): Number of edges
- `Entities` (System.Object): Array of edges
- `SideFlags` (System.Int32): in-process, unmanaged C++: Pointer to an array of flags indicating which side of each edge to create the ruled-surface feature VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

Call
IRuledSurfaceFeatureData::GetEdgesCount
before calling this method to get the value for Count.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IRuledSurfaceFeatureData.GetEdges`
- `IRuledSurfaceFeatureData.ISetEdges`
- `IRuledSurfaceFeatureData.SetEdges`