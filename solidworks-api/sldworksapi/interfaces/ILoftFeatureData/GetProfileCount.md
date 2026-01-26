---
type: method
interface: ILoftFeatureData
member: GetProfileCount
returns: System.Int16
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILoftFeatureData.ISetProfiles
  - ILoftFeatureData.Profiles
keywords:
  - getprofilecount
  - iloftfeaturedata
  - loft
  - feature
  - data
  - profile
  - count
  - int16
---

# ILoftFeatureData.GetProfileCount

Gets the number of profiles associated with this loft feature.

## Signature

```csharp
System.Int16 GetProfileCount()
```
## Parameters

None.

## Return Value

Number of profiles

## Remarks

Call this method before calling
ILoftFeatureData::IGetProfiles
to determine the size of the array for that method.

## See Also

- `ILoftFeatureData.ISetProfiles`
- `ILoftFeatureData.Profiles`