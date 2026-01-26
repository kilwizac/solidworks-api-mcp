---
type: method
interface: ISmartComponentFeatureData
member: AccessSelections
returns: System.Boolean
parameters:
  -
    name: ShowPMP
    type: System.Boolean
    description: True to display the PropertyManager page, false to not (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related: []
keywords:
  - accessselections
  - ismartcomponentfeaturedata
  - smart
  - component
  - feature
  - data
  - access
  - selections
  - show
  - pmp
  - boolean
  - delete
  - vb
  - net
  - vba
---

# ISmartComponentFeatureData.AccessSelections

Gains access to the selection lists on the PropertyManager page of a Smart Component.

## Signature

```csharp
System.Boolean AccessSelections( 
   System.Boolean
ShowPMP
)
```
## Parameters

- `ShowPMP` (System.Boolean): True to display the PropertyManager page, false to not (see Remarks )

## Return Value

True if the selections where successfully accessed, false if not

## Remarks

ShowPMP only controls the display of the PropertyManager page. This method allows access to the PropertyManager page selection lists regardless of whether the PropertyManager page is displayed. The selection lists have marks as defined in
swSmartComponentSelectionTypes_e
.
This method opens the training assembly in which this Smart Component is defined.
To delete a feature or component from a Smart Component:
Open the Smart Component in SOLIDWORKS.
Call
IFeature::GetDefinition
on the "Smart Feature" to get the
ISmartComponentFeatureData
object.
Call this method to open the training assembly of the Smart Component.
Call
ISldWorks::ActiveDoc
to set an assembly document variable.
To get a specific feature or component, call
ISelectionMgr::GetSelectedObject6
(index, mark), where mark is defined in
swSmartComponentSelectionTypes_e
and index is the position of the item in the selection list.
Select an already selected feature or component to delete it from its selection list. If the object returned by ISelectionMgr::GetSelectedObject6 is a:
feature, call
IFeature::Select2
to delete that feature from the feature selection list.
component, call
IComponent2::Select4
to delete that component from the component selection list.
Close the training assembly and release access to the selection lists.
To insert a feature or component into a Smart Component:
Open the Smart Component in SOLIDWORKS.
Call
IFeature::GetDefinition
on the "Smart Feature" to get the
ISmartComponentFeatureData
object.
Call this method to open the training assembly of the Smart Component.
Call
ISldWorks::ActiveDoc
to point to the training assembly.
Call
IModelDocExtension::SelectByID2
to specify the feature or component you want to insert, setting Mark to an option in
swSmartComponentSelectionTypes_e
.
Close the training assembly and release access to the selection lists.
To close the training assembly and release access to the selection lists on the PropertyManager page:
Call
ISmartComponentFeatureData::ReleaseSelectionAccess
if you did not insert or delete features and components.
Call
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
to rebuild the Smart Component if you inserted or deleted features and components.

## Examples

- Delete Smart Feature (C#) (Delete_Smart_Feature_Example_CSharp.htm)
- Delete Smart Feature (VB.NET) (Delete_Smart_Feature_Example_VBNET.htm)
- Delete Smart Feature (VBA) (Delete_Smart_Feature_Example_VB.htm)