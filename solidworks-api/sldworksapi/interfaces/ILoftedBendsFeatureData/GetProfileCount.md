---
type: method
interface: ILoftedBendsFeatureData
member: GetProfileCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILoftedBendsFeatureData.ISetProfiles
  - ILoftedBendsFeatureData.Profiles
keywords:
  - getprofilecount
  - iloftedbendsfeaturedata
  - lofted
  - bends
  - feature
  - data
  - profile
  - count
  - int32
---

# ILoftedBendsFeatureData.GetProfileCount

Gets the number of profiles in this lofted bends feature.

## Signature

```csharp
System.Int32 GetProfileCount()
```
## Parameters

None.

## Return Value

Number of profiles

## Remarks

Call this method before calling
ILoftedBendsFeatureData::IGetProfiles
to determine the size of the array for that method.

## Examples

- ILoftedBendsFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ILoftedBendsFeatureData)

## See Also

- `ILoftedBendsFeatureData.ISetProfiles`
- `ILoftedBendsFeatureData.Profiles`