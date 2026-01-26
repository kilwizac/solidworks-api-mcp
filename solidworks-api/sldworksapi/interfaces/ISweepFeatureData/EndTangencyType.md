---
type: property
interface: ISweepFeatureData
member: EndTangencyType
returns: System.Int16
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISweepFeatureData.MaintainTangency
  - ISweepFeatureData.StartTangencyType
keywords:
  - tangent
  - sweeps
  - see
  - also
  - isweepfeaturedata
  - tangency
  - endtangencytype
  - sweep
  - feature
  - data
  - end
  - type
  - int16
readonly: null
---

# ISweepFeatureData.EndTangencyType

Gets or sets tangency at the end of the sweep path of this sweep feature.

## Signature

```csharp
System.Int16 EndTangencyType {get; set;}
```
## Parameters

None.

## Return Value

Tangency at end of sweep path as defined in swTangencyType_e : swTangencyNone (default) swTangencyNormalToProfile

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

- `ISweepFeatureData.MaintainTangency`
- `ISweepFeatureData.StartTangencyType`