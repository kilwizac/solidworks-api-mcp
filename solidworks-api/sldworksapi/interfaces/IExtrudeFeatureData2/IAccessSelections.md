---
type: method
interface: IExtrudeFeatureData2
member: IAccessSelections
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
  - selections
related:
  - IExtrudeFeatureData2.AccessSelections
keywords:
  - iaccessselections
  - iextrudefeaturedata2
  - extrude
  - feature
  - data2
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

# IExtrudeFeatureData2.IAccessSelections

Gains access to the selections used to define the extrusion feature.

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

- `TopDoc` (ModelDoc2): Top-level document (see Remarks )
- `Component` (Component2): Component in which the feature is to be modified (see Remarks )

## Return Value

True if the selections were accessed successfully, false if not

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
IFeature::IModifyDefintion2
if you modified the feature
IExtrudeFeatureData2::ReleaseSelectionAccess
if you did not

## See Also

- `IExtrudeFeatureData2.AccessSelections`