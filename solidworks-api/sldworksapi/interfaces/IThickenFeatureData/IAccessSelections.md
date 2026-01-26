---
type: method
interface: IThickenFeatureData
member: IAccessSelections
returns: System.Boolean
parameters:
  -
    name: TopDoc
    type: ModelDoc2
    description: Top-level document
  -
    name: Component
    type: Component2
    description: Component to which this feature is to be applied
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related:
  - IThickenFeatureData.AccessSelections
keywords:
  - iaccessselections
  - ithickenfeaturedata
  - thicken
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
---

# IThickenFeatureData.IAccessSelections

Gains access to the selections that define this thicken feature.

## Signature

```csharp
System.Boolean IAccessSelections( 
   ModelDoc2
TopDoc
,
   Component2
Component
)
```
## Parameters

- `TopDoc` (ModelDoc2): Top-level document
- `Component` (Component2): Component to which this feature is to be applied

## Return Value

TRUE if access is successful, FALSE if not

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

## See Also

- `IThickenFeatureData.AccessSelections`