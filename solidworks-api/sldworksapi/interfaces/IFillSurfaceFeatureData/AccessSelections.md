---
type: method
interface: IFillSurfaceFeatureData
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
  - IFillSurfaceFeatureData.IAccessSelections
keywords:
  - accessselections
  - ifillsurfacefeaturedata
  - fill
  - surface
  - feature
  - data
  - access
  - selections
  - top
  - doc
  - object
  - component
  - boolean
  - insert
  - vb
  - net
  - vba
---

# IFillSurfaceFeatureData.AccessSelections

Gains access to the selections that define this fill-surface feature.

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

True if the selections are successfully accessed, false if not

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
if you modified the feature
IFillSurfaceFeatureData::ReleaseSelectionAccess
if you did not

## Examples

- Insert Fill-surface Feature (C#) (Insert_Fill-surface_Feature_Example_CSharp.htm)
- Insert Fill-surface Feature (VB.NET) (Insert_Fill-surface_Feature_Example_VBNET.htm)
- Insert Fill-surface Feature (VBA) (Insert_Fill-surface_Feature_Example_VB.htm)

## See Also

- `IFillSurfaceFeatureData.IAccessSelections`