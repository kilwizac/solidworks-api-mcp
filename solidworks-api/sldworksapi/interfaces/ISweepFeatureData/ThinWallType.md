---
type: property
interface: ISweepFeatureData
member: ThinWallType
returns: System.Int16
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISweepFeatureData.GetWallThickness
  - ISweepFeatureData.IsThinFeature
  - ISweepFeatureData.SetWallThickness
  - ISweepFeatureData.ThinFeature
keywords:
  - sweeps
  - see
  - also
  - isweepfeaturedata
  - thin
  - feature
  - features
  - thinwalltype
  - sweep
  - data
  - wall
  - type
  - int16
readonly: null
---

# ISweepFeatureData.ThinWallType

Gets or sets the type of this thin-walled sweep feature.

## Signature

```csharp
System.Int16 ThinWallType {get; set;}
```
## Parameters

None.

## Return Value

0 = One Direction 1 = One Direction Reverse 2 = MidPlane 3 = Two Directions

## Remarks

This property is:
only valid if
ISweepFeatureData::IsThinFeature
is true.
not valid for swept-surface features.
See
Accessing Selections that Define Features
for additional details.

## Examples

- ISweepFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISweepFeatureData)

## See Also

- `ISweepFeatureData.GetWallThickness`
- `ISweepFeatureData.IsThinFeature`
- `ISweepFeatureData.SetWallThickness`
- `ISweepFeatureData.ThinFeature`