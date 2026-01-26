---
type: method
interface: IPartingLineFeatureData
member: GetEntitiesToSplit
returns: System.Object
parameters:
  -
    name: TypeArr
    type: System.Object
    description: Array of these entities as defined in swSelectType_e : swSelVERTICES swSelSKETCHSEGS
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - parts
related:
  - IPartingLineFeatureData.GetEntitiesToSplitCount
  - IPartingLineFeatureData.ISetEntitiesToSplit
  - IPartingLineFeatureData.SetEntitiesToSplit
  - IPartingLineFeatureData.SplitFaces
  - IPartingLineFeatureData.SplitFacesOption
keywords:
  - getentitiestosplit
  - ipartinglinefeaturedata
  - parting
  - line
  - feature
  - data
  - entities
  - split
  - type
  - arr
  - object
---

# IPartingLineFeatureData.GetEntitiesToSplit

Gets the entities that are used to split a face.

## Signature

```csharp
System.Object GetEntitiesToSplit( 
   out System.Object
TypeArr
)
```
## Parameters

- `TypeArr` (System.Object): Array of these entities as defined in swSelectType_e : swSelVERTICES swSelSKETCHSEGS

## Return Value

Array of vertices or sketch segments

## Remarks

The resulting edges are added to the parting line feature.
When two vertices are specified, then an edge is created between them for the parting line feature.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IPartingLineFeatureData.GetEntitiesToSplitCount`
- `IPartingLineFeatureData.ISetEntitiesToSplit`
- `IPartingLineFeatureData.SetEntitiesToSplit`
- `IPartingLineFeatureData.SplitFaces`
- `IPartingLineFeatureData.SplitFacesOption`