---
type: method
interface: IClosedCornerFeatureData
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
  - IClosedCornerFeatureData.IAccessSelections2
keywords:
  - accessselections
  - iclosedcornerfeaturedata
  - closed
  - corner
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
  - modify
  - vb
  - net
  - vba
---

# IClosedCornerFeatureData.AccessSelections

Gains access to the selections that define this closed corner feature.

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
TopDoc is the IModelDoc2 object for the assembly
Component argument is the
IComponent2
object in which the feature is to be modified
This method puts the model into a rollback state to allow access to the selections that define this feature. You must use either of the following methods to restore the rollback state:
IFeature::ModifyDefinition
if you modified the feature
IClosedCornerFeatureData::ReleaseSelectionAccess
if you did not

## Examples

- Create and Modify Closed Corner Feature (C#) (Create_and_Modify_Closed_Corner_Feature_Example_CSharp.htm)
- Create and Modify Closed Corner Feature (VB.NET) (Create_and_Modify_Closed_Corner_Feature_Example_VBNET.htm)
- Create and Modify Closed Corner Feature (VBA) (Create_and_Modify_Closed_Corner_Feature_Example_VB.htm)

## See Also

- `IClosedCornerFeatureData.IAccessSelections2`