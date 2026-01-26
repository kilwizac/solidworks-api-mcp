---
type: method
interface: IReplaceFaceFeatureData
member: ISetFacesForReplacement
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of faces to replace
  -
    name: SurfDisp
    type: Face2
    description: in-process, unmanaged C++: Pointer to an array of faces to replace of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IReplaceFaceFeatureData.GetReplacementSurfacesCount
  - IReplaceFaceFeatureData.IGetReplacementSurfaces
  - IReplaceFaceFeatureData.ReplacementSurfaces
keywords:
  - isetfacesforreplacement
  - ireplacefacefeaturedata
  - replace
  - face
  - feature
  - data
  - faces
  - replacement
  - count
  - int32
  - surf
  - disp
  - face2
  - void
---

# IReplaceFaceFeatureData.ISetFacesForReplacement

Sets the faces to replace for this feature.

## Signature

```csharp
void ISetFacesForReplacement( 
   System.Int32
Count
,
   ref Face2
SurfDisp
)
```
## Parameters

- `Count` (System.Int32): Number of faces to replace
- `SurfDisp` (Face2): in-process, unmanaged C++: Pointer to an array of faces to replace of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IReplaceFaceFeatureData.GetReplacementSurfacesCount`
- `IReplaceFaceFeatureData.IGetReplacementSurfaces`
- `IReplaceFaceFeatureData.ReplacementSurfaces`