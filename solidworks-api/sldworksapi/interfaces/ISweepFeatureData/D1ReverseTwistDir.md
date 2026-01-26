---
type: property
interface: ISweepFeatureData
member: D1ReverseTwistDir
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISweepFeatureData.D2ReverseTwistDir
  - ISweepFeatureData.GetTwistAngle
  - ISweepFeatureData.SetTwistAngle
keywords:
  - sweeps
  - see
  - also
  - isweepfeaturedata
  - twist
  - d1reversetwistdir
  - sweep
  - feature
  - data
  - d1
  - reverse
  - dir
  - boolean
readonly: null
---

# ISweepFeatureData.D1ReverseTwistDir

Gets or sets whether to reverse the twist of this sweep feature.

## Signature

```csharp
System.Boolean D1ReverseTwistDir {get; set;}
```
## Parameters

None.

## Return Value

True to reverse the twist, false to not

## Remarks

This property is valid only if
ISweepFeatureData::TwistControlType
is set to
swTwistControlType_e
.swTwistControlConstantTwistAlongPath.
This property reverses the twist in Direction 1 of a bidirectional sweep.

## Examples

- ISweepFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISweepFeatureData)

## See Also

- `ISweepFeatureData.D2ReverseTwistDir`
- `ISweepFeatureData.GetTwistAngle`
- `ISweepFeatureData.SetTwistAngle`