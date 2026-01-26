---
type: method
interface: ISweepFeatureData
member: GetD2TwistAngle
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISweepFeatureData.D2ReverseTwistDir
  - ISweepFeatureData.GetTwistAngle
  - ISweepFeatureData.SetD2TwistAngle
keywords:
  - sweeps
  - see
  - also
  - isweepfeaturedata
  - twist
  - getd2twistangle
  - sweep
  - feature
  - data
  - d2
  - angle
  - double
---

# ISweepFeatureData.GetD2TwistAngle

Gets the twist angle in Direction 2 of this bidirectional sweep feature.

## Signature

```csharp
System.Double GetD2TwistAngle()
```
## Parameters

None.

## Return Value

Angle of twist in radians in Direction 2

## Remarks

This property is valid only if:
ISweepFeatureData::TwistControlType
is set to
swTwistControlType_e
.swTwistControlConstantTwistAlongPath.
ISweepFeatureData::Direction
is set to
swSweepDirection_e
.swSweepBidirectional.

## See Also

- `ISweepFeatureData.D2ReverseTwistDir`
- `ISweepFeatureData.GetTwistAngle`
- `ISweepFeatureData.SetD2TwistAngle`