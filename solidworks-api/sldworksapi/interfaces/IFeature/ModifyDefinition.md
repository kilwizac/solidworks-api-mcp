---
type: method
interface: IFeature
member: ModifyDefinition
returns: System.Boolean
parameters:
  -
    name: Data
    type: System.Object
    description: Feature data object
  -
    name: TopDoc
    type: System.Object
    description: Top-level document (see Remarks )
  -
    name: Component
    type: System.Object
    description: Component for the feature (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeature.IGetDefinition
  - IFeature.IModifyDefinition2
keywords:
  - modify
  - feature
  - see
  - also
  - ifeature
  - definition
  - modifydefinition
  - data
  - object
  - top
  - doc
  - component
  - boolean
  - change
  - bend
  - radius
  - sheet
  - metal
  - part
  - vba
  - constraint
  - dome
  - plane
  - editing
  - its
  - insert
  - deleteface
  - vb
  - net
---

# IFeature.ModifyDefinition

Updates the definition of a feature with the new values in an associated feature data object obtained with IFeature::GetDefinition.

## Signature

```csharp
System.Boolean ModifyDefinition( 
   System.Object
Data
,
   System.Object
TopDoc
,
   System.Object
Component
)
```
## Parameters

- `Data` (System.Object): Feature data object
- `TopDoc` (System.Object): Top-level document (see Remarks )
- `Component` (System.Object): Component for the feature (see Remarks )

## Return Value

True if the feature definition modified successfully, false if not

## Remarks

If this method returns:
False, you may have specified invalid properties in the feature data modifier object. The feature definition was not modified, so the feature may have rolled back to its previous state.
True, the feature was updated using the feature data modifier object provided. This method will return true even if the feature data modifier object does not include any changed properties or references; some feature data modifier objects reject invalid changes before this method is called. For some feature modifications, this method applies the new properties, returns true, but results in a new rebuild error on the feature.
In either case, this method may leave the feature in an unpredictable state due to errors. After calling this method, call
IFeature::GetErrorCode2
to ascertain whether the feature has rebuild errors. If so, try again with valid feature data. To correct rebuild errors, call
IModelDoc2::ForceRebuild3
. You can also move the rollback bar in the FeatureManager design tree to before and after the feature to correct its state.
You should carefully read specific feature data interface documentation to learn how to correctly specify feature data properties and how this method works with specific features.
To modify a feature in...
Then TopDoc argument...
A part
Is the
IModelDoc2
object for the part and the Component argument should be Nothing or null
An assembly
Should be the assembly IModelDoc2 object and the Component argument should be the
IComponent2
object in which the feature is to be modified
When you modify a feature in an assembly, this method leaves the assembly in Editing Part mode. You can switch back to editing the assembly by calling
IAssemblyDoc::EditAssembly
.

## Examples

- Change Bend Radius of Sheet Metal Part (VBA) (Change_Bend_Radius_of_Sheet_Metal_Part_Example_VB.htm)
- Get and Set Constraint for Dome Feature (VBA) (Get_and_Set_Constraint_for_Dome_Feature_Example_VB.htm)
- Modify Plane By Editing its Definition (VBA) (Modify_Plane_by_Editing_Its_Definition_Example_VB.htm)
- Insert and Change DeleteFace Feature (C#) (Insert_and_Change_DeleteFace_Feature_Example_CSharp.htm)
- Insert and Change DeleteFace Feature (VB.NET) (Insert_and_Change_DeleteFace_Feature_Example_VBNET.htm)
- Insert and Change DeleteFace Feature (VBA) (Insert_and_Change_DeleteFace_Feature_Example_VB.htm)

## See Also

- `IFeature.IGetDefinition`
- `IFeature.IModifyDefinition2`