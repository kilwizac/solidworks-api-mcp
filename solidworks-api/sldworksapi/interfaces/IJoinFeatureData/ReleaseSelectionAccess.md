---
type: method
interface: IJoinFeatureData
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
  - ijoinfeaturedata
  - join
  - feature
  - data
  - release
  - selection
  - access
  - void
  - insert
  - vb
  - net
  - vba
---

# IJoinFeatureData.ReleaseSelectionAccess

Releases access to the selections that define this join feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IJoinFeatureData::AccessSelections
puts the model into a rollback state to allow access to the selections that define this feature.
Use this method to restore the rollback state if you did not modify the feature or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefintion2
if you did.

## Examples

- Insert Join Feature (C#) (Insert_Join_Feature_Example_CSharp.htm)
- Insert Join Feature (VB.NET) (Insert_Join_Feature_Example_VBNET.htm)
- Insert Join Feature (VBA) (Insert_Join_Feature_Example_VB.htm)