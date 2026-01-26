---
type: method
interface: IPartingLineFeatureData
member: ISetEntitiesToSplit
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of entities
  -
    name: EntIn
    type: System.Object
    description: in-process, unmanaged C++: Pointer to an array of vertices or sketch segments VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - parts
related:
  - IPartingLineFeatureData.GetEntitiesToSplit
  - IPartingLineFeatureData.GetEntitiesToSplitCount
  - IPartingLineFeatureData.IGetEntitiesToSplit
  - IPartingLineFeatureData.SetEntitiesToSplit
  - IPartingLineFeatureData.SplitFaces
  - IPartingLineFeatureData.SplitFacesOption
keywords:
  - isetentitiestosplit
  - ipartinglinefeaturedata
  - parting
  - line
  - feature
  - data
  - entities
  - split
  - count
  - int32
  - ent
  - object
  - void
---

# IPartingLineFeatureData.ISetEntitiesToSplit

Sets the entities to use to split a face and add edges to the parting line feature.

## Signature

```csharp
void ISetEntitiesToSplit( 
   System.Int32
Count
,
   ref System.Object
EntIn
)
```
## Parameters

- `Count` (System.Int32): Number of entities
- `EntIn` (System.Object): in-process, unmanaged C++: Pointer to an array of vertices or sketch segments VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

If sketch segments and vertices are specified, then a pair of vertices appear together; for example, segment1, vtx11, vtx12, segment2, vtx21, vtx22, vtx31, vtx32, and so on.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IPartingLineFeatureData.GetEntitiesToSplit`
- `IPartingLineFeatureData.GetEntitiesToSplitCount`
- `IPartingLineFeatureData.IGetEntitiesToSplit`
- `IPartingLineFeatureData.SetEntitiesToSplit`
- `IPartingLineFeatureData.SplitFaces`
- `IPartingLineFeatureData.SplitFacesOption`