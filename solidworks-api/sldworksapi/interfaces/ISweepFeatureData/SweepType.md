---
type: property
interface: ISweepFeatureData
member: SweepType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - sweeptype
  - isweepfeaturedata
  - sweep
  - feature
  - data
  - type
  - int32
readonly: true
---

# ISweepFeatureData.SweepType

Gets the type of this sweep feature.

## Signature

```csharp
System.Int32 SweepType {get;}
```
## Parameters

None.

## Return Value

Sweep type as defined in swFeatureNameID_e : swFmSweep (swept boss) swFmSweepCut (swept cut) swRefSurface (swept surface)