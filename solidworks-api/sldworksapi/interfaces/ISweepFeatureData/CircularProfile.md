---
type: property
interface: ISweepFeatureData
member: CircularProfile
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISweepFeatureData.GetProfileType
keywords:
  - circularprofile
  - isweepfeaturedata
  - sweep
  - feature
  - data
  - circular
  - profile
  - boolean
readonly: null
---

# ISweepFeatureData.CircularProfile

Gets or sets whether to use a circular profile for this sweep feature.

## Signature

```csharp
System.Boolean CircularProfile {get; set;}
```
## Parameters

None.

## Return Value

True to use a circular profile, false to use a sketch profile or tool body

## Remarks

If this property is set to false, call
ISweepFeatureData::GetCutSweepOption
to determine the type of profile.
To get or set the diameter of a circular profile, use
ISweepFeatureData::CircularProfileDiameter
.

## Examples

- ISweepFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISweepFeatureData)

## See Also

- `ISweepFeatureData.GetProfileType`