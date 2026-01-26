---
type: method
interface: IChamferFeatureData2
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
    description: Component in which the feature is to be modified
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related:
  - IChamferFeatureData2.IAccessSelections
keywords:
  - accessselections
  - ichamferfeaturedata2
  - chamfer
  - feature
  - data2
  - access
  - selections
  - top
  - doc
  - object
  - component
  - boolean
  - edge
  - distances
  - vb
  - net
  - vba
---

# IChamferFeatureData2.AccessSelections

Gains access to the selections that define this chamfer feature.

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
- `Component` (System.Object): Component in which the feature is to be modified

## Return Value

True if the selections were successfully accessed

## Remarks

Remarks
To modify a feature in a...
Then...
Part
TopDoc argument is the
IModelDoc2
for the part
Component argument is NULL
Assembly
TopDoc argument is the IModelDoc2 object for the assembly
Component argument is the
IComponent2
object in which the feature is to be modified
This method puts the model into a rollback state to allow access to the selections that define this feature. You must use either of the following methods to restore the rollback state:
IFeature::ModifyDefinition
if you modified the feature
IChamferFeatureData2::ReleaseSelectionAccess
if not

## Examples

- Get Edge Chamfer Distances (C#) (Get_Edge_Chamfer_Distances_Example_CSharp.htm)
- Get Edge Chamfer Distances (VB.NET) (Get_Edge_Chamfer_Distances_Example_VBNET.htm)
- Get Edge Chamfer Distances (VBA) (Get_Edge_Chamfer_Distances_Example_VB.htm)

## See Also

- `IChamferFeatureData2.IAccessSelections`