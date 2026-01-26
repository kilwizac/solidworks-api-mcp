---
type: property
interface: ISweepFeatureData
member: Direction
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - direction
  - isweepfeaturedata
  - sweep
  - feature
  - data
  - int32
readonly: null
---

# ISweepFeatureData.Direction

Gets or sets the direction type of this sweep feature.

## Signature

```csharp
System.Int32 Direction {get; set;}
```
## Parameters

None.

## Return Value

Sweep path direction type as defined in swSweepDirection_e ; -1 if not valid

## Remarks

This property is valid only if the profile is a
sketch profile
, and the
sweep path
extends through both sides of the sketch profile.

## Examples

- ISweepFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISweepFeatureData)