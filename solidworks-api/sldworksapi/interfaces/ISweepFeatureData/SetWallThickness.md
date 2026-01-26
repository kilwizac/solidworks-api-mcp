---
type: method
interface: ISweepFeatureData
member: SetWallThickness
returns: void
parameters:
  -
    name: Forward
    type: System.Boolean
    description: True for Direction 1, false for Direction 2 (see Remarks )
  -
    name: WallThickness
    type: System.Double
    description: Wall thickness
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISweepFeatureData.GetWallThickness
  - ISweepFeatureData.IsThinFeature
  - ISweepFeatureData.ThinFeature
keywords:
  - thin
  - features
  - sweeps
  - see
  - also
  - isweepfeaturedata
  - feature
  - setwallthickness
  - sweep
  - data
  - wall
  - thickness
  - forward
  - boolean
  - double
  - void
---

# ISweepFeatureData.SetWallThickness

Sets the wall thickness, forward (Direction 1) or reverse (Direction 2), of this thin-walled sweep feature.

## Signature

```csharp
void SetWallThickness( 
   System.Boolean
Forward
,
   System.Double
WallThickness
)
```
## Parameters

- `Forward` (System.Boolean): True for Direction 1, false for Direction 2 (see Remarks )
- `WallThickness` (System.Double): Wall thickness

## Return Value

Unknown.

## Remarks

This method:
is valid only if
ISweepFeatureData::IsThinFeature
is true.
sets the thickness in Direction 1 and Direction 2, depending on
ISweepFeaureData::ThinWallType
.
is not valid for swept-surface features.
See
Accessing Selections that Define Features
for additional details.

## Examples

- ISweepFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISweepFeatureData)

## See Also

- `ISweepFeatureData.GetWallThickness`
- `ISweepFeatureData.IsThinFeature`
- `ISweepFeatureData.ThinFeature`