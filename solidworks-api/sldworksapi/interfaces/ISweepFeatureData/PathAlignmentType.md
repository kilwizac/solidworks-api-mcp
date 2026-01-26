---
type: property
interface: ISweepFeatureData
member: PathAlignmentType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISweepFeatureData.GetPathAlignmentDirectionVector
  - ISweepFeatureData.GetPathType
keywords:
  - sweeps
  - see
  - also
  - isweepfeaturedata
  - path
  - pathalignmenttype
  - sweep
  - feature
  - data
  - alignment
  - type
  - int32
readonly: null
---

# ISweepFeatureData.PathAlignmentType

Gets or sets the alignment of the sweep path in this sweep feature.

## Signature

```csharp
System.Int32 PathAlignmentType {get; set;}
```
## Parameters

None.

## Return Value

Sweep path alignment as defined in swTangencyType_e : swTangencyAllFaces swTangencyDirectionVector swTangencyNone

## Remarks

For user interface option...
Set...
Profile Orientation set to...
And Profile Twist set to...
ISweepFeatureData::TwistControlType
as defined in
swTwistControlType_e
to...
And
ISweepFeatureData::PathAlignmentType
as defined in swTangencyType_e to...
Follow Path
None
swTwistControlFollowPath
swTangencyNone
Specify Twist Value
swTwistControlConstantTwistAlongPath
swTangencyNone
Specify Direction Vector
swTwistControlFollowPath
swTangencyDirectionVector; call
ISweepFeatureData::SetPathAlignmentDirectionVector
to specify the direction vector
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
See
Accessing Selections that Define Features
for additional details.

## Examples

- ISweepFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISweepFeatureData)

## See Also

- `ISweepFeatureData.GetPathAlignmentDirectionVector`
- `ISweepFeatureData.GetPathType`