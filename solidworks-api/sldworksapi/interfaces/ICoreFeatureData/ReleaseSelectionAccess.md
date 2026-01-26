---
type: method
interface: ICoreFeatureData
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
  - feature
  - see
  - also
  - ifeature
  - core
  - mold
  - tools
  - cores
  - releaseselectionaccess
  - icorefeaturedata
  - data
  - release
  - selection
  - access
  - void
  - vb
  - net
  - vba
---

# ICoreFeatureData.ReleaseSelectionAccess

Releases access to the selections that describe this core feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

ICoreFeatureData::AccessSelections
puts the model into a rollback state to allow access to the selections that define this feature.
Use this method to restore the rollback state if you did not modify the feature or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did.

## Examples

- Get Core Feature Data (C#) (Get_Core_Feature_Example_CSharp.htm)
- Get Core Feature Data (VB.NET) (Get_Core_Feature_Example_VBNET.htm)
- Get Core Feature Data (VBA) (Get_Core_Feature_Example_VB.htm)