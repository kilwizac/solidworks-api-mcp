---
type: method
interface: ISweepFeatureData
member: GetTwistAngle
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISweepFeatureData.D1ReverseTwistDir
  - ISweepFeatureData.GetD2TwistAngle
  - ISweepFeatureData.SetTwistAngle
keywords:
  - sweeps
  - see
  - also
  - isweepfeaturedata
  - twist
  - gettwistangle
  - sweep
  - feature
  - data
  - angle
  - double
---

# ISweepFeatureData.GetTwistAngle

Gets the angle at which to twist this sweep feature.

## Signature

```csharp
System.Double GetTwistAngle()
```
## Parameters

None.

## Return Value

Angle of twist in radians

## Remarks

This method is valid only if
ISweepFeatureData::TwistControlType
is set to
swTwistControlType_e
.swTwistControlConstantTwistAlongPath.
This method gets the angle of twist in radians in Direction 1 of a bidirectional sweep.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISweepFeatureData.D1ReverseTwistDir`
- `ISweepFeatureData.GetD2TwistAngle`
- `ISweepFeatureData.SetTwistAngle`