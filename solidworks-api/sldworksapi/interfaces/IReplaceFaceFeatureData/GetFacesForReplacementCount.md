---
type: method
interface: IReplaceFaceFeatureData
member: GetFacesForReplacementCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IReplaceFaceFeatureData.FacesForReplacement
  - IReplaceFaceFeatureData.ISetFacesForReplacement
keywords:
  - getfacesforreplacementcount
  - ireplacefacefeaturedata
  - replace
  - face
  - feature
  - data
  - faces
  - replacement
  - count
  - int32
---

# IReplaceFaceFeatureData.GetFacesForReplacementCount

Gets the number of faces to replace in this feature.

## Signature

```csharp
System.Int32 GetFacesForReplacementCount()
```
## Parameters

None.

## Return Value

Number of faces to replace

## Remarks

Call this method before calling
IReplaceFaceFeatureData::IGetFacesForReplacement
.

## Examples

- IReplaceFaceFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IReplaceFaceFeatureData)

## See Also

- `IReplaceFaceFeatureData.FacesForReplacement`
- `IReplaceFaceFeatureData.ISetFacesForReplacement`