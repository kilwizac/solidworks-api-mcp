---
type: method
interface: ILoftFeatureData
member: IGetProfiles
returns: System.Object
parameters:
  -
    name: Count
    type: System.Int16
    description: Number of profiles
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILoftFeatureData.ISetProfiles
  - ILoftFeatureData.Profiles
keywords:
  - igetprofiles
  - iloftfeaturedata
  - loft
  - feature
  - data
  - profiles
  - count
  - int16
  - object
---

# ILoftFeatureData.IGetProfiles

Gets the profiles associated with this loft feature.

## Signature

```csharp
System.Object IGetProfiles( 
   System.Int16
Count
)
```
## Parameters

- `Count` (System.Int16): Number of profiles

## Return Value

in-process, unmanaged C++: Pointer to an array of profiles of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
ILoftFeatureData::GetProfileCount
to get the size of Count.
Each profile returned is a
IFeature
object. A
ISketch
object can be extracted from this IFeature object by using
IFeature::GetSpecificFeature2
.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `ILoftFeatureData.ISetProfiles`
- `ILoftFeatureData.Profiles`