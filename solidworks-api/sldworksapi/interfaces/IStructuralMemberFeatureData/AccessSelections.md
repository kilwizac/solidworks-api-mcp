---
type: method
interface: IStructuralMemberFeatureData
member: AccessSelections
returns: System.Boolean
parameters:
  -
    name: TopDoc
    type: ModelDoc2
    description: Top-level document
  -
    name: Component
    type: Component2
    description: Component for the feature
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related: []
keywords:
  - accessselections
  - istructuralmemberfeaturedata
  - structural
  - member
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
  - insert
  - weldment
  - vb
  - net
  - vba
  - profile
---

# IStructuralMemberFeatureData.AccessSelections

Gains access to the selections that define this structural member.

## Signature

```csharp
System.Boolean AccessSelections( 
   ModelDoc2
TopDoc
,
   Component2
Component
)
```
## Parameters

- `TopDoc` (ModelDoc2): Top-level document
- `Component` (Component2): Component for the feature

## Return Value

True if the selections where successfully accessed, false if not

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
IStructuralMemberFeatureData::ReleaseSelctionAccess
if you did not

## Examples

- Insert Structural Weldment (C#) (Insert_Structural_Weldment_Example_CSharp.htm)
- Insert Structural Weldment (VB.NET) (Insert_Structural_Weldment_Example_VBNET.htm)
- Insert Structural Weldment (VBA) (Insert_Structural_Weldment_Example_VB.htm)
- Set Profile for Structural Member (VBA) (Set_Profile_for_Structural_Member_Example_VB.htm)