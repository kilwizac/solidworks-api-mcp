---
type: method
interface: ICoreFeatureData
member: AccessSelections
returns: System.Boolean
parameters:
  -
    name: PTopDoc
    type: ModelDoc2
    description: Top-level document
  -
    name: PComponent
    type: Component2
    description: Component in which the feature is to be modified
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related: []
keywords:
  - accessselections
  - icorefeaturedata
  - core
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
  - vb
  - net
  - vba
---

# ICoreFeatureData.AccessSelections

Gains access to the selections that describe this core feature.

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

- `PTopDoc` (ModelDoc2): Top-level document
- `PComponent` (Component2): Component in which the feature is to be modified

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
ICoreFeatureData::ReleaseSelectionAccess
if you did not

## Examples

- Get Core Feature Data (C#) (Get_Core_Feature_Example_CSharp.htm)
- Get Core Feature Data (VB.NET) (Get_Core_Feature_Example_VBNET.htm)
- Get Core Feature Data (VBA) (Get_Core_Feature_Example_VB.htm)