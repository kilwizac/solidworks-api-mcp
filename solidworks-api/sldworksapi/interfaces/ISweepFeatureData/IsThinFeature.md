---
type: method
interface: ISweepFeatureData
member: IsThinFeature
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISweepFeatureData.GetWallThickness
  - ISweepFeatureData.SetWallThickness
  - ISweepFeatureData.ThinWallType
keywords:
  - thin
  - features
  - sweeps
  - see
  - also
  - isweepfeaturedata
  - feature
  - isthinfeature
  - sweep
  - data
  - boolean
---

# ISweepFeatureData.IsThinFeature

Gets whether this is a thin-walled sweep feature.

## Signature

```csharp
System.Boolean IsThinFeature()
```
## Parameters

None.

## Return Value

True if a thin-walled sweep feature, false if not

## Remarks

Note that you can make a sweep feature thin-walled only by setting
ISweepFeatureData::ThinFeature
at the time of creation.
This method is not valid for swept-surface features.
See
Accessing Selections that Define Features
for additional details.

## Examples

- ISweepFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISweepFeatureData)

## See Also

- `ISweepFeatureData.GetWallThickness`
- `ISweepFeatureData.SetWallThickness`
- `ISweepFeatureData.ThinWallType`