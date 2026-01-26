---
type: property
interface: ISweepFeatureData
member: D2ReverseTwistDir
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISweepFeatureData.D1ReverseTwistDir
  - ISweepFeatureData.GetD2TwistAngle
  - ISweepFeatureData.SetD2TwistAngle
keywords:
  - sweeps
  - see
  - also
  - isweepfeaturedata
  - twist
  - d2reversetwistdir
  - sweep
  - feature
  - data
  - d2
  - reverse
  - dir
  - boolean
readonly: null
---

# ISweepFeatureData.D2ReverseTwistDir

Gets or sets whether to reverse the twist in Direction 2 of this bidirectional sweep feature.

## Signature

```csharp
System.Boolean D2ReverseTwistDir {get; set;}
```
## Parameters

None.

## Return Value

True to reverse the twist in Direction 2, false to not

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

## Examples

- ISweepFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISweepFeatureData)

## See Also

- `ISweepFeatureData.D1ReverseTwistDir`
- `ISweepFeatureData.GetD2TwistAngle`
- `ISweepFeatureData.SetD2TwistAngle`