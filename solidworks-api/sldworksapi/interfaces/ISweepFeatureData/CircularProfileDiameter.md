---
type: property
interface: ISweepFeatureData
member: CircularProfileDiameter
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - circularprofilediameter
  - isweepfeaturedata
  - sweep
  - feature
  - data
  - circular
  - profile
  - diameter
  - double
readonly: null
---

# ISweepFeatureData.CircularProfileDiameter

Gets or sets the diameter of the circular profile for this sweep feature.

## Signature

```csharp
System.Double CircularProfileDiameter {get; set;}
```
## Parameters

None.

## Return Value

Diameter of the circular profile

## Remarks

This property is valid only if
ISweepFeatureData::CircularProfile
is set to true.

## Examples

- ISweepFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISweepFeatureData)