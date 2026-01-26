---
type: method
interface: ILoftFeatureData
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
  - ILoftedBendsFeatureData.IAccessSelections
keywords:
  - accessselections
  - iloftfeaturedata
  - loft
  - feature
  - data
  - access
  - selections
  - top
  - doc
  - object
  - component
  - boolean
  - guide
  - curves
  - vb
  - net
  - vba
---

# ILoftFeatureData.AccessSelections

Accesses the selections used to define the loft feature.

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
IFeature::ModifyDefinition
if you modified the feature
ILoftFeatureData::ReleaseSelectionAccess
if you did not

## Examples

- Get Guide Curves in Loft Feature (C#) (Get_Guide_Curves_in_Loft_Feature_Example_CSharp.htm)
- Get Guide Curves in Loft Feature (VB.NET) (Get_Guide_Curves_in_Loft_Feature_Example_VBNET.htm)
- Get Guide Curves in Loft Feature (VBA) (Get_Guide_Curves_in_Loft_Feature_Example_VB.htm)

## See Also

- `ILoftedBendsFeatureData.IAccessSelections`