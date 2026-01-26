---
type: method
interface: IRefPlaneFeatureData
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
  - IRefPlaneFeatureData.IAccessSelections
keywords:
  - accessselections
  - irefplanefeaturedata
  - ref
  - plane
  - feature
  - data
  - access
  - selections
  - top
  - doc
  - object
  - component
  - boolean
  - modify
  - editing
  - its
  - definition
  - vba
---

# IRefPlaneFeatureData.AccessSelections

Gains access to the selections that define a reference plane feature.

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

Reference planes created in SOLIDWORKS 2010 or later are constraint based; reference planes created in SOLIDWORKS 2009 or earlier are not. See the
Remarks
section in the
IRefPlaneFeatureData interface
topic for details about reference planes and the methods and properties belonging to this interface.
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
IRefPlaneFeatureData::ReleaseSelectionAccess
if you did not
IMPORTANT:
Reference planes created in SOLIDWORKS 2010 or later are constraint based; reference planes created in SOLIDWORKS 2009 or earlier are not. See the
Remarks
section in the
IRefPlaneFeatureData interface
topic for details about reference planes and this interface.

## Examples

- Modify Plane by Editing Its Definition (VBA) (Modify_Plane_by_Editing_Its_Definition_Example_VB.htm)

## See Also

- `IRefPlaneFeatureData.IAccessSelections`