---
type: property
interface: ISweepFeatureData
member: AssemblyFeatureScope
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - features
related: []
keywords:
  - assemblyfeaturescope
  - isweepfeaturedata
  - sweep
  - feature
  - data
  - assembly
  - scope
  - boolean
readonly: null
---

# ISweepFeatureData.AssemblyFeatureScope

Gets and sets whether this swept-cut feature affects only selected components in the assembly.

## Signature

```csharp
System.Boolean AssemblyFeatureScope {get; set;}
```
## Parameters

None.

## Return Value

True if the swept-cutfeature affects only selected components in the assembly, false if affects all components in the assembly ( see Remarks )

## Remarks

Use this property,
ISweepFeatureData::AutoSelectComponents
, and
ISweepFeatureData::PropagateFeatureToParts
to insert sweep cuts into an assembly.
This API works with ISweepFeatureData::AutoSelectComponents to configure the scope of an assembly sweep feature. This API performs the same configuration that is done in the Feature Scope section of the PropertyManager page of the sweep feature:
AssemblyFeatureScope setting
AutoSelectComponents setting
PropertyManager page Feature Scope setting
False
Ignored
All components selected
Auto-select not visible
True
If true, affected components are automatically selected
If false, manually select the affected components before calling this API
Selected components selected
If Auto-select is not checked, then manually select components
See
Accessing Selections that Define Features
for additional details.

## Examples

- ISweepFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISweepFeatureData)