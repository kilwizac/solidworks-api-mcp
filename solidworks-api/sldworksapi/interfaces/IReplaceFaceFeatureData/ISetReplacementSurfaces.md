---
type: method
interface: IReplaceFaceFeatureData
member: ISetReplacementSurfaces
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of replacement surfaces
  -
    name: SurfDisp
    type: Feature
    description: in-process, unmanaged C++: Pointer to an array of replacement surfaces of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
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
  - isetreplacementsurfaces
  - ireplacefacefeaturedata
  - replace
  - face
  - feature
  - data
  - replacement
  - surfaces
  - count
  - int32
  - surf
  - disp
  - void
---

# IReplaceFaceFeatureData.ISetReplacementSurfaces

Sets the replacement surfaces for this feature.

## Signature

```csharp
void ISetReplacementSurfaces( 
   System.Int32
Count
,
   ref Feature
SurfDisp
)
```
## Parameters

- `Count` (System.Int32): Number of replacement surfaces
- `SurfDisp` (Feature): in-process, unmanaged C++: Pointer to an array of replacement surfaces of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

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