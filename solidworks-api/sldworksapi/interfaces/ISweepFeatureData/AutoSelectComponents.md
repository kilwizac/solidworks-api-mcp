---
type: property
interface: ISweepFeatureData
member: AutoSelectComponents
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related: []
keywords:
  - autoselectcomponents
  - isweepfeaturedata
  - sweep
  - feature
  - data
  - auto
  - select
  - components
  - boolean
readonly: null
---

# ISweepFeatureData.AutoSelectComponents

Gets and sets whether to automatically select all assembly components to be affected by this swept-cutfeature.

## Signature

```csharp
System.Boolean AutoSelectComponents {get; set;}
```
## Parameters

None.

## Return Value

True to automatically select all affected assembly components, false to manually select components ( see Remarks )

## Remarks

Use this property,
ISweepFeatureData::AssemblyFeatureScope
, and
ISweepFeatureData::PropagateFeatureToParts
to insert sweep cuts into an assembly.
This API works with ISweepFeatureData::AssemblyFeatureScope to configure the scope of an assembly sweep feature. This API performs the same configuration that is done in the Feature Scope section of the PropertyManager page of the sweep feature:
AssemblyFeatureScope setting
AutoSelectComponents setting
PropertyManager page Feature Scope setting
False
Ignored
All components selected
Auto-select not visible
True
If true, affected components are automatically selected
If false, manually select the components before calling this API
Selected components selected
If Auto-select is not checked, then manually select components
See
Accessing Selections that Define Features
for additional details.

## Examples

- ISweepFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISweepFeatureData)