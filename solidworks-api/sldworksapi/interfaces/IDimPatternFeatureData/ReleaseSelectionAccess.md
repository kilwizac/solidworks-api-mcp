---
type: method
interface: IDimPatternFeatureData
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
  - idimpatternfeaturedata
  - dim
  - pattern
  - feature
  - data
  - release
  - selection
  - access
  - void
  - insert
  - variable
  - vb
  - net
  - vba
---

# IDimPatternFeatureData.ReleaseSelectionAccess

Releases access to the selections used to define this variable pattern feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IDimPatternFeatureData::AccessSelections
puts the model into a rollback state to allow access to the selections that define this feature.
Use this method to restore the rollback state if you did not modify the feature or use
IFeature::ModifyDefinition
if you did.

## Examples

- Insert Variable Pattern Feature (C#) (Insert_Advanced_Variable_Pattern_Feature_Example_CSharp.htm)
- Insert Variable Pattern Feature (VB.NET) (Insert_Advanced_Variable_Pattern_Feature_Example_VBNET.htm)
- Insert Variable Pattern Feature (VBA) (Insert_Advanced_Variable_Pattern_Feature_Example_VB.htm)