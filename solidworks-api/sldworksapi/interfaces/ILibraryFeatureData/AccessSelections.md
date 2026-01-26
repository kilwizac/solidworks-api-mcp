---
type: method
interface: ILibraryFeatureData
member: AccessSelections
returns: System.Boolean
parameters:
  -
    name: PTopDoc
    type: ModelDoc2
    description: Top-level document (see Remarks )
  -
    name: PComponent
    type: Component2
    description: Component in which the feature is to be modified (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related: []
keywords:
  - accessselections
  - ilibraryfeaturedata
  - library
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
  - vba
  - vb
  - net
---

# ILibraryFeatureData.AccessSelections

Gains access to selections that define this library feature.

## Signature

```csharp
System.Boolean AccessSelections( 
   ModelDoc2
PTopDoc
,
   Component2
PComponent
)
```
## Parameters

- `PTopDoc` (ModelDoc2): Top-level document (see Remarks )
- `PComponent` (Component2): Component in which the feature is to be modified (see Remarks )

## Return Value

True if the selections were successfully accessed, false if not

## Remarks

To modify a feature in a...
Then...
Part
PTopDoc argument is the
IModelDoc2
for the part
PComponent argument is NULL
Assembly
PTopDoc is the IModelDoc2 object for the assembly
PComponent argument is the
IComponent2
object in which the feature is to be modified
This method puts the model into a rollback state to allow access to the selections that define this feature. You must use either of the following methods to restore the rollback state:
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you modified the feature
ILibraryFeatureData::ReleaseSelectionAccess
if you did not

## Examples

- Get Library Feature Data (VBA) (Get_Library_Feature_Data_Example_VB.htm)
- Get Library Feature Data (VB.NET) (Get_Library_Feature_Data_Example_VBNET.htm)
- Get Library Feature Data (C#) (Get_Library_Feature_Data_Example_CSharp.htm)