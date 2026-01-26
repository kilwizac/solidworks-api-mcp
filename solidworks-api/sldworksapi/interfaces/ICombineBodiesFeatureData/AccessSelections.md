---
type: method
interface: ICombineBodiesFeatureData
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
  - icombinebodiesfeaturedata
  - combine
  - bodies
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

# ICombineBodiesFeatureData.AccessSelections

Gains access to the selections that define this combine feature.

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
or
IFeature::IModifiyDefinition2
if you modified the feature
ICombineBodiesFeatureData::ReleaseSelectionAccess
if you did not

## Examples

- Combine Bodies (C#) (Combine_Bodies_Example_CSharp.htm)
- Combine Bodies (VB.NET) (Combine_Bodies_Example_VBNET.htm)
- Combine Bodies (VBA) (Combine_Bodies_Example_VB.htm)