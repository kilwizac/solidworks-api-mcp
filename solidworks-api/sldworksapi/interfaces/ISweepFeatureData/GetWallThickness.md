---
type: method
interface: ISweepFeatureData
member: GetWallThickness
returns: System.Double
parameters:
  -
    name: Forward
    type: System.Boolean
    description: True for Direction 1, false for Direction 2
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISweepFeatureData.IsThinFeature
  - ISweepFeatureData.SetWallThickness
  - ISweepFeatureData.ThinWallType
keywords:
  - getwallthickness
  - isweepfeaturedata
  - sweep
  - feature
  - data
  - wall
  - thickness
  - forward
  - boolean
  - double
---

# ISweepFeatureData.GetWallThickness

Gets the wall thickness, forward (Direction 1) or reverse (Direction 2), of this thin-walled sweep feature.

## Signature

```csharp
System.Double GetWallThickness( 
   System.Boolean
Forward
)
```
## Parameters

- `Forward` (System.Boolean): True for Direction 1, false for Direction 2

## Return Value

Wall thickness

## Remarks

This method is:
valid only if
ISweepFeatureData::IsThinFeature
is true.
not valid for swept-surface features.
See
Accessing Selections that Define Features
for additional details.

## Examples

- ISweepFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISweepFeatureData)

## See Also

- `ISweepFeatureData.IsThinFeature`
- `ISweepFeatureData.SetWallThickness`
- `ISweepFeatureData.ThinWallType`