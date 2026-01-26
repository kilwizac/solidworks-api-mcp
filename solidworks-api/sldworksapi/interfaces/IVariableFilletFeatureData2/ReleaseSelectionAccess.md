---
type: method
interface: IVariableFilletFeatureData2
member: ReleaseSelectionAccess
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related: []
keywords:
  - releaseselectionaccess
  - ivariablefilletfeaturedata2
  - variable
  - fillet
  - feature
  - data2
  - release
  - selection
  - access
  - void
---

# IVariableFilletFeatureData2.ReleaseSelectionAccess

Releases access to the selections used to define the variable fillet feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IVariableFilletFeatureData2::AccessSelections
and
IVariableFilletFeatureData2::IAccessSelections
put the model in a rollback state to allow access to the selections that define the feature.
Use this method to restore the rollback state if you did not modify the feature, or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did modify the feature.

## Examples

- IVariableFilletFeatureData2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IVariableFilletFeatureData2)