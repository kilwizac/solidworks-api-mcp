---
type: method
interface: ISweepFeatureData
member: SetTwistAngle
returns: void
parameters:
  -
    name: Angle
    type: System.Double
    description: Angle of twist in radians
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISweepFeatureData.D1ReverseTwistDir
  - ISweepFeatureData.GetTwistAngle
  - ISweepFeatureData.SetD2TwistAngle
keywords:
  - sweeps
  - see
  - also
  - isweepfeaturedata
  - twist
  - settwistangle
  - sweep
  - feature
  - data
  - angle
  - double
  - void
---

# ISweepFeatureData.SetTwistAngle

Sets the angle at which to twist this sweep feature.

## Signature

```csharp
void SetTwistAngle( 
   System.Double
Angle
)
```
## Parameters

- `Angle` (System.Double): Angle of twist in radians

## Return Value

Unknown.

## Remarks

This method is valid only if
ISweepFeatureData::TwistControlType
is set to
swTwistControlType_e
.swTwistControlConstantTwistAlongPath.
In the Sweep PropertyManager, you can specify revolutions, degrees, or radians. To specify Angle, you must convert revolutions and degrees to radians:
1 revolution = 360 degrees = 2*pi = 6.28319 radians
This method sets the angle of twist in radians in Direction 1 of a bidirectional sweep.
See
Accessing Selections that Define Features
for additional details.

## Examples

- ISweepFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISweepFeatureData)

## See Also

- `ISweepFeatureData.D1ReverseTwistDir`
- `ISweepFeatureData.GetTwistAngle`
- `ISweepFeatureData.SetD2TwistAngle`