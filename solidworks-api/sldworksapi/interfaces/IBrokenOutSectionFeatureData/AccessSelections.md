---
type: method
interface: IBrokenOutSectionFeatureData
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
  - IBrokenOutSectionFeatureData.IAccessSelections
keywords:
  - accessselections
  - ibrokenoutsectionfeaturedata
  - broken
  - out
  - section
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

# IBrokenOutSectionFeatureData.AccessSelections

Gains access to the selections that define this broken-out section feature.

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
TopDoc argument is the IModelDoc2 object for the assembly
Component argument is the
IComponent2
object in which the feature is to be modified
This method puts the model into a rollback state to allow access to the selections that define this feature. You must use either of the following methods to restore the rollback state:
IFeature::ModifyDefinition
if you modified the feature
IBrokenOutSectionFeatureData::ReleaseSelectionAccess
if you did not

## Examples

- Get Broken-Out Section Feature Data (C#) (Get_Broken_Out_Section_Feature_Data_Example_CSharp.htm)
- Get Broken-Out Section Feature Data (VB.NET) (Get_Broken_Out_Section_Feature_Data_Example_VBNET.htm)
- Get Broken-Out Section Feature Data (VBA) (Get_Broken_Out_Section_Feature_Data_Example_VB.htm)

## See Also

- `IBrokenOutSectionFeatureData.IAccessSelections`