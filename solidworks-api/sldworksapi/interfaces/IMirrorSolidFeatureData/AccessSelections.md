---
type: method
interface: IMirrorSolidFeatureData
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
    description: Top-level document (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related:
  - IMirrorSolidFeatureData.IAccessSelections2
keywords:
  - accessselections
  - imirrorsolidfeaturedata
  - mirror
  - solid
  - feature
  - data
  - access
  - selections
  - top
  - doc
  - object
  - component
  - boolean
  - vb
  - net
  - vba
---

# IMirrorSolidFeatureData.AccessSelections

Gains access to the selections that define the mirror solid feature.

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
- `Component` (System.Object): Top-level document (see Remarks )

## Return Value

True if the selections were successfully accessed, false if not

## Remarks

To modify a feature in a...
Then...
Part
TopDoc argument is the
IModelDoc2
for the part
Component argument is Nothing or null
Assembly
TopDoc is the IModelDoc2 object for the assembly
Component argument is the
IComponent2
object in which the feature is to be modified
This method puts the model into a rollback state to allow access to the selections that define this feature. You must use either of the following methods to restore the rollback state:
IFeature::ModifyDefinition
if you modified the feature
IMirrorSolidFeatureData::ReleaseSelectionAccess
if you did not

## Examples

- Get Mirror Solid Feature Data (C#) (Get_Mirror_Solid_Feature_Data_Example_CSharp.htm)
- Get Mirror Solid Feature Data (VB.NET) (Get_Mirror_Solid_Feature_Data_Example_VBNET.htm)
- Get Mirror Solid Feature Data (VBA) (Get_Mirror_Solid_Data_Example_VB.htm)

## See Also

- `IMirrorSolidFeatureData.IAccessSelections2`