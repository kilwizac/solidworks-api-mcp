---
type: method
interface: IReplaceFaceFeatureData
member: GetReplacementSurfacesCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IReplaceFaceFeatureData.ISetReplacementSurfaces
  - IReplaceFaceFeatureData.ReplacementSurfaces
keywords:
  - getreplacementsurfacescount
  - ireplacefacefeaturedata
  - replace
  - face
  - feature
  - data
  - replacement
  - surfaces
  - count
  - int32
---

# IReplaceFaceFeatureData.GetReplacementSurfacesCount

Gets the number of replacement surfaces for this feature.

## Signature

```csharp
System.Int32 GetReplacementSurfacesCount()
```
## Parameters

None.

## Return Value

Number of replacement surfaces

## Remarks

Call this method before calling
IReplaceFaceFeatureData::IGetReplacementSurfaces
.

## Examples

- IReplaceFaceFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IReplaceFaceFeatureData)

## See Also

- `IReplaceFaceFeatureData.ISetReplacementSurfaces`
- `IReplaceFaceFeatureData.ReplacementSurfaces`