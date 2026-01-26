---
type: method
interface: IPartingLineFeatureData
member: IGetEntitiesToSplit
returns: System.Object
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of entities
  -
    name: TypeArr
    type: System.Int32
    description: in-process, unmanaged C++: Pointer to an array of these entities as defined in swSelectType_e : swSelVERTICES swSelSKETCHSEGS VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - parts
related:
  - IPartingLineFeatureData.GetEntitiesToSplit
  - IPartingLineFeatureData.ISetEntitiesToSplit
  - IPartingLineFeatureData.SetEntitiesToSplit
  - IPartingLineFeatureData.SplitFaces
  - IPartingLineFeatureData.SplitFacesOption
keywords:
  - igetentitiestosplit
  - ipartinglinefeaturedata
  - parting
  - line
  - feature
  - data
  - entities
  - split
  - count
  - int32
  - type
  - arr
  - object
---

# IPartingLineFeatureData.IGetEntitiesToSplit

Gets the entities that are used to split a face.

## Signature

```csharp
System.Object IGetEntitiesToSplit( 
   System.Int32
Count
,
   out System.Int32
TypeArr
)
```
## Parameters

- `Count` (System.Int32): Number of entities
- `TypeArr` (System.Int32): in-process, unmanaged C++: Pointer to an array of these entities as defined in swSelectType_e : swSelVERTICES swSelSKETCHSEGS VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

in-process, unmanaged C++: Pointer to an array of vertices or sketch segments VBA, VB.NET, C#, and C++/CLI: Not supported

## Remarks

The resulting edges are added to the parting line feature.
Call
IPartingLineFeatureData::GetEntitiesToSplitCount
before this method.
When two vertices are specified, then an edge is created between them for the parting line feature.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IPartingLineFeatureData.GetEntitiesToSplit`
- `IPartingLineFeatureData.ISetEntitiesToSplit`
- `IPartingLineFeatureData.SetEntitiesToSplit`
- `IPartingLineFeatureData.SplitFaces`
- `IPartingLineFeatureData.SplitFacesOption`