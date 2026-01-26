---
type: method
interface: ISheetMetalFeatureData
member: AccessSelections
returns: System.Boolean
parameters:
  -
    name: TopDoc
    type: System.Object
    description: Top-level document (see Remarks )
  -
    name: Component
    type: System.Object
    description: Component in which the feature is to be modified (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related:
  - ISheetMetalFeatureData.IAccessSelections2
keywords:
  - accessselections
  - isheetmetalfeaturedata
  - sheet
  - metal
  - feature
  - data
  - access
  - selections
  - top
  - doc
  - object
  - component
  - boolean
  - change
  - bend
  - radius
  - part
  - vba
  - fixed
  - face
---

# ISheetMetalFeatureData.AccessSelections

Gains access to the selections that define this sheet metal feature.

## Signature

```csharp
System.Boolean AccessSelections( 
   System.Object
TopDoc
,
   System.Object
Component
)
```
## Parameters

- `TopDoc` (System.Object): Top-level document (see Remarks )
- `Component` (System.Object): Component in which the feature is to be modified (see Remarks )

## Return Value

True if the selections were successfully accessed, false if not

## Remarks

To access sheet metal feature data in sheet metal models created in SOLIDWORKS 2013 or later, follow the examples of
IModelDocExtension::GetTemplateSheetMetal
.
To modify a feature in a...
Then...
Part
TopDoc argument is the
IModelDoc2
for the part
Component argument is NULL
Assembly
TopDoc is the IModelDoc2 object for the assembly
Component argument is the
IComponent2
object in which the feature is to be modified
This method puts the model into a rollback state to allow access to the selections that define this feature. You must use either of the following methods to restore the rollback state:
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you modified the feature
ISheetMetalFeatureData::ReleaseSelectionAccess
if you did not

## Examples

- Change Bend Radius of Sheet Metal Part (VBA) (Change_Bend_Radius_of_Sheet_Metal_Part_Example_VB.htm)
- Get Fixed Face of Sheet Metal Part (VBA) (Get_Fixed_Face_of_Sheet_Metal_Part_Example_VB.htm)

## See Also

- `ISheetMetalFeatureData.IAccessSelections2`