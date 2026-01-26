---
type: property
interface: ISweepFeatureData
member: PropagateFeatureToParts
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - parts
related: []
keywords:
  - propagatefeaturetoparts
  - isweepfeaturedata
  - sweep
  - feature
  - data
  - propagate
  - parts
  - boolean
readonly: null
---

# ISweepFeatureData.PropagateFeatureToParts

Gets and sets whether to extend the swept-cut feature to all affected parts in the assembly.

## Signature

```csharp
System.Boolean PropagateFeatureToParts {get; set;}
```
## Parameters

None.

## Return Value

True to extend the swept-cut feature to all affected parts in the assembly, false to not

## Remarks

Use this property,
ISweepFeatureData::AssemblyFeatureScope
, and
ISweepFeatureData::AutoSelectComponents
to insert sweep cuts into an assembly.
See
Accessing Selections that Define Features
for additional details.

## Examples

- ISweepFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISweepFeatureData)