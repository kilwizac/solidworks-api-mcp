---
type: method
interface: IPartingLineFeatureData
member: AccessSelections
returns: System.Boolean
parameters:
  -
    name: TopDoc
    type: ModelDoc2
    description: Top-level document (see Remarks )
  -
    name: Component
    type: Component2
    description: Component in which the feature is to be modified (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - parts
  - selections
related: []
keywords:
  - accessselections
  - ipartinglinefeaturedata
  - parting
  - line
  - feature
  - data
  - access
  - selections
  - top
  - doc
  - model
  - doc2
  - component
  - component2
  - boolean
  - options
  - vba
  - vb
  - net
---

# IPartingLineFeatureData.AccessSelections

Gains access to the selections that describe the parting line feature.

## Signature

```csharp
System.Boolean AccessSelections( 
   ModelDoc2
TopDoc
,
   Component2
Component
)
```
## Parameters

- `TopDoc` (ModelDoc2): Top-level document (see Remarks )
- `Component` (Component2): Component in which the feature is to be modified (see Remarks )

## Return Value

True if the selections were successfully accessed, false if not

## Remarks

To modify a feature in a...
Then...
Part
TopDoc argument is the
IModelDoc2
for the part
Component argument is Nothing or null
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
IPartingLineFeatureData::ReleaseSelectionAccess
if you did not

## Examples

- Set Options for Parting Line (VBA) (Set_Split_Faces_Option_for_Parting_Line_Example_VB.htm)
- Get and Set Parting Line Feature Data (C#) (Get_and_Set_Parting_Line_Feature_Data_Example_CSharp.htm)
- Get and Set Parting Line Feature Data (VB.NET) (Get_and_Set_Parting_Line_Feature_Data_Example_VBNET.htm)
- Get and Set Parting Line Feature Data (VBA) (Get_and_Set_Parting_Line_Feature_Data_Example_VB.htm)