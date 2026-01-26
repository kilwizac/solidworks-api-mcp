---
type: method
interface: IDomeFeatureData2
member: AccessSelections
returns: System.Boolean
parameters:
  -
    name: TopDoc
    type: System.Object
    description: Top level document (see Remarks )
  -
    name: Component
    type: System.Object
    description: Component for the feature (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related:
  - IDomeFeatureData2.IAccessSelections
keywords:
  - accessselections
  - idomefeaturedata2
  - dome
  - feature
  - data2
  - access
  - selections
  - top
  - doc
  - object
  - component
  - boolean
  - change
  - height
  - vba
  - constraint
  - create
  - modify
  - vb
  - net
---

# IDomeFeatureData2.AccessSelections

Gains access to selections used to define the dome.

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

- `TopDoc` (System.Object): Top level document (see Remarks )
- `Component` (System.Object): Component for the feature (see Remarks )

## Return Value

True if the selections where successfully accessed, false if not

## Remarks

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
IDomeFeatureData2::ReleaseSelectionAccess
if you did not

## Examples

- Change Height of Dome Feature (VBA) (Change_Height_of_Dome_Feature_Example_VB.htm)
- Get and Set Constraint for Dome Feature (VBA) (Get_and_Set_Constraint_for_Dome_Feature_Example_VB.htm)
- Create and Modify Dome Feature (C#) (Create_and_Modify_Dome_Feature_Example_CSharp.htm)
- Create and Modify Dome Feature (VB.NET) (Create_and_Modify_Dome_Feature_Example_VBNET.htm)
- Create and Modify Dome Feature (VBA) (Create_and_Modify_Dome_Feature_Example_VB.htm)

## See Also

- `IDomeFeatureData2.IAccessSelections`