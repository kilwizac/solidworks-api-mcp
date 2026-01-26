---
type: method
interface: IPartingLineFeatureData
member: SetEntitiesToSplit
returns: void
parameters:
  -
    name: PVar
    type: System.Object
    description: Array of vertices or sketch segments
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
  - IPartingLineFeatureData.ISetEntitiesToSplit
  - IPartingLineFeatureData.SplitFaces
  - IPartingLineFeatureData.SplitFacesOption
keywords:
  - setentitiestosplit
  - ipartinglinefeaturedata
  - parting
  - line
  - feature
  - data
  - entities
  - split
  - var
  - object
  - void
---

# IPartingLineFeatureData.SetEntitiesToSplit

Sets the entities to use to split a face and add edges to the parting line feature.

## Signature

```csharp
void SetEntitiesToSplit( 
   System.Object
PVar
)
```
## Parameters

- `PVar` (System.Object): Array of vertices or sketch segments

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
- `IPartingLineFeatureData.ISetEntitiesToSplit`
- `IPartingLineFeatureData.SplitFaces`
- `IPartingLineFeatureData.SplitFacesOption`