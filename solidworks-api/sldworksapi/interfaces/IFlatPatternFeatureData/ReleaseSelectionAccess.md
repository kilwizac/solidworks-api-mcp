---
type: method
interface: IFlatPatternFeatureData
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
  - iflatpatternfeaturedata
  - flat
  - pattern
  - feature
  - data
  - release
  - selection
  - access
  - void
  - fixed
  - face
  - vba
---

# IFlatPatternFeatureData.ReleaseSelectionAccess

Releases access to selections that describe this Flat-Pattern feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IFlatPatternFeatureData::AccessSelections
and
IFlatPatternFeatureData::IAccessSelections2
put the model into a rollback state to allow access to the selections that define this feature.
Use this method to restore the rollback state if you did not modify the feature or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefintion2
if you did.

## Examples

- Get Fixed Face of Flat-Pattern Feature (VBA) (Get_Fixed_Face_of_Flat-Pattern_Feature_Example_VB.htm)