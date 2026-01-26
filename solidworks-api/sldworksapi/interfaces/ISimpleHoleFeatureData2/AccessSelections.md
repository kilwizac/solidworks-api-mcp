---
type: method
interface: ISimpleHoleFeatureData2
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
  - ISimpleHoleFeatureData2.IAccessSelections
keywords:
  - accessselections
  - isimpleholefeaturedata2
  - simple
  - hole
  - feature
  - data2
  - access
  - selections
  - top
  - doc
  - object
  - component
  - boolean
---

# ISimpleHoleFeatureData2.AccessSelections

Gains access to the selections used to define the simple hole feature.

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
ISimpleHoleFeatureData2::ReleaseSelectionAccess
if you did not

## Examples

- ISimpleHoleFeatureData2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISimpleHoleFeatureData2)

## See Also

- `ISimpleHoleFeatureData2.IAccessSelections`