---
type: method
interface: IThickenFeatureData
member: AccessSelections
returns: System.Boolean
parameters:
  -
    name: TopDoc
    type: System.Object
    description: Top-level document
  -
    name: Component
    type: System.Object
    description: Component to which this feature is to be applied
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related:
  - IThickenFeatureData.IAccessSelections
keywords:
  - accessselections
  - ithickenfeaturedata
  - thicken
  - feature
  - data
  - access
  - selections
  - top
  - doc
  - object
  - component
  - boolean
  - create
  - vba
---

# IThickenFeatureData.AccessSelections

Gains access to the selections that define this thicken feature.

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

- `TopDoc` (System.Object): Top-level document
- `Component` (System.Object): Component to which this feature is to be applied

## Return Value

True if access is successful, false if not

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
IThickenFeatureData::ReleaseSelectionAccess
if you did not

## Examples

- Create Thicken Feature (VBA) (Create_Thicken_Feature_Example_VB.htm)

## See Also

- `IThickenFeatureData.IAccessSelections`