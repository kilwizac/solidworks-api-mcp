---
type: property
interface: ISweepFeatureData
member: TwistControlType
returns: System.Int16
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISweepFeatureData.D1ReverseTwistDir
  - ISweepFeatureData.D2ReverseTwistDir
  - ISweepFeatureData.GetD2TwistAngle
  - ISweepFeatureData.GetTwistAngle
  - ISweepFeatureData.SetD2TwistAngle
  - ISweepFeatureData.SetTwistAngle
keywords:
  - sweeps
  - see
  - also
  - isweepfeaturedata
  - twist
  - twistcontroltype
  - sweep
  - feature
  - data
  - control
  - type
  - int16
readonly: null
---

# ISweepFeatureData.TwistControlType

Gets or sets the type of twist control for this sweep feature.

## Signature

```csharp
System.Int16 TwistControlType {get; set;}
```
## Parameters

None.

## Return Value

Twist control as defined in swTwistControlType_e (see Remarks )

## Remarks

For user interface options...
Set...
Profile Orientation set to...
And Profile Twist set to...
ISweepFeatureData::TwistControlType as defined in swTwistControlType_e to...
And
ISweepFeatureData::PathAlignmentType
as defined in
swTangencyType_e
to...
Follow Path
None
swTwistControlFollowPath
swTangencyNone
Specify Twist Value
swTwistControlConstantTwistAlongPath
swTangencyNone
Specify Direction Vector
swTwistControlFollowPath
swTangencyDirectionVector
Follow Path and First Guide Curve (option appears with at least one guide curve)
swTwistControlFollowPathFirstGuideCurve
swTangencyNone
Follow Path and First and Second Guide Curves (option appears with at least two guide curves)
swTwistControlFollowFirstSecondGuideCurves
swTangencyNone
Tangent to Adjacent Faces
swTwistControlFollowPath
swTangencyAllFaces
Minimum Twist (available only with a 3D path)
swTwistControlFollowPath
swMinimumTwist
Natural
swTwistControlFollowPath
swTangencyNone
Keep Normal Constant
None
swTwistControlKeepNormalConstant
swTangencyNone
Specify Twist Value
swTwistControlConstantTwistAlongPath + swTwistControlKeepNormalConstant
swTangencyNone
If you specify this property with swTwistControlType_e.swTwistControlConstantTwistAlongPath to specify profile twist values, you must set
ISweepFeatureData::AlignWithEndFaces
to false.
See
Accessing Selections that Define Features
for additional details.

## Examples

- ISweepFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISweepFeatureData)

## See Also

- `ISweepFeatureData.D1ReverseTwistDir`
- `ISweepFeatureData.D2ReverseTwistDir`
- `ISweepFeatureData.GetD2TwistAngle`
- `ISweepFeatureData.GetTwistAngle`
- `ISweepFeatureData.SetD2TwistAngle`
- `ISweepFeatureData.SetTwistAngle`