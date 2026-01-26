---
type: property
interface: ILoftFeatureData
member: Profiles
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILoftFeatureData.GetProfileCount
  - ILoftFeatureData.IGetProfiles
  - ILoftFeatureData.ISetProfiles
keywords:
  - profiles
  - iloftfeaturedata
  - loft
  - feature
  - data
  - object
readonly: null
---

# ILoftFeatureData.Profiles

Gets and sets the profiles for this loft feature.

## Signature

```csharp
System.Object Profiles {get; set;}
```
## Parameters

None.

## Return Value

Profiles for this loft

## Remarks

Each profile returned is a
IFeature
object. A
ISketch
object can be extracted from this Feature object by using
IFeature::GetSpecificFeature2
.
See
Accessing Selections that Define Features
for additional details on using this property.

## See Also

- `ILoftFeatureData.GetProfileCount`
- `ILoftFeatureData.IGetProfiles`
- `ILoftFeatureData.ISetProfiles`