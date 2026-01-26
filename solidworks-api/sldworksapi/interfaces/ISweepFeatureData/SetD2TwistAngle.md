---
type: method
interface: ISweepFeatureData
member: SetD2TwistAngle
returns: void
parameters:
  -
    name: Angle
    type: System.Double
    description: Angle of twist in radians in Direction 2
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISweepFeatureData.D2ReverseTwistDir
  - ISweepFeatureData.GetD2TwistAngle
  - ISweepFeatureData.SetTwistAngle
keywords:
  - sweeps
  - see
  - also
  - isweepfeaturedata
  - twist
  - setd2twistangle
  - sweep
  - feature
  - data
  - d2
  - angle
  - double
  - void
---

# ISweepFeatureData.SetD2TwistAngle

Sets the twist angle in Direction 2 of this bidirectional sweep feature.

## Signature

```csharp
void SetD2TwistAngle( 
   System.Double
Angle
)
```
## Parameters

- `Angle` (System.Double): Angle of twist in radians in Direction 2

## Return Value

Unknown.

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
In the Sweep PropertyManager, you can specify revolutions, degrees, or radians. To specify Angle, you must convert revolutions and degrees to radians:
1 revolution = 360 degrees = 2*pi = 6.28319 radians
See
Accessing Selections that Define Features
for additional details.

## Examples

- ISweepFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISweepFeatureData)

## See Also

- `ISweepFeatureData.D2ReverseTwistDir`
- `ISweepFeatureData.GetD2TwistAngle`
- `ISweepFeatureData.SetTwistAngle`