---
type: method
interface: ISheetMetalFeatureData
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
  - isheetmetalfeaturedata
  - sheet
  - metal
  - feature
  - data
  - release
  - selection
  - access
  - void
  - fixed
  - face
  - part
  - vba
---

# ISheetMetalFeatureData.ReleaseSelectionAccess

Releases access to selections used to define the sheet metal feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

To release access to sheet metal feature data in sheet metal models created in SOLIDWORKS 2013 or later, follow the examples of
IModelDocExtension::GetTemplateSheetMetal
.
ISheetMetalFeatureData::AccessSelections
and
ISheetMetalFeatureData::IAccessSelections2
put the model in a rollback state to allow access to the selections that define the feature.
Use this method to restore the rollback state if you did not modify the feature, or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did modify the feature.

## Examples

- Get Fixed Face of Sheet Metal Part (VBA) (Get_Fixed_Face_of_Sheet_Metal_Part_Example_VB.htm)