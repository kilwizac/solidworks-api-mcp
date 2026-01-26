---
type: property
interface: ISweepFeatureData
member: StartTangencyType
returns: System.Int16
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISweepFeatureData.EndTangencyType
  - ISweepFeatureData.MaintainTangency
keywords:
  - tangent
  - sweeps
  - see
  - also
  - isweepfeaturedata
  - tangency
  - starttangencytype
  - sweep
  - feature
  - data
  - start
  - type
  - int16
readonly: null
---

# ISweepFeatureData.StartTangencyType

Gets and sets the tangency at the start of the sweep path for this sweep feature.

## Signature

```csharp
System.Int16 StartTangencyType {get; set;}
```
## Parameters

None.

## Return Value

Tangency at start of sweep path as defined in swTangencyType_e : swTangencyNone (default) swTangencyNormalToProfile

## Remarks

This property is not valid if:
ISweepFeatureData::Direction
is set to
swSweepDirection_e
.swSweepBiDirectional.
- or -
ISweepFeatureData::TwistControlType
is set to
swTwistControlType_e
.swTwistControlConstantTwistAlongPath.
See
Accessing Selections that Define Features
for additional details.

## Examples

- ISweepFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISweepFeatureData)

## See Also

- `ISweepFeatureData.EndTangencyType`
- `ISweepFeatureData.MaintainTangency`