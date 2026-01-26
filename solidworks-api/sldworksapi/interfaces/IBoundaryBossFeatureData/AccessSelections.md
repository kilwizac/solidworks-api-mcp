---
type: method
interface: IBoundaryBossFeatureData
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
    description: Component in which to modify the feature (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related: []
keywords:
  - accessselections
  - iboundarybossfeaturedata
  - boundary
  - boss
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

# IBoundaryBossFeatureData.AccessSelections

Gains access to the selections that define this boundary feature.

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
- `Component` (System.Object): Component in which to modify the feature (see Remarks )

## Return Value

True if the selections are successfully accessed, false if not

## Remarks

To modify a feature in a...
Then...
Part
TopDoc argument is the
ModelDoc2
object for the part
Component argument is Nothing or null
Assembly
TopDoc is the ModelDoc2 object for the assembly
Component argument is the
Component2
object in which to modify the feature
This method puts the model into a rollback state to allow access to the selections that define this feature. You must use either of the following methods to restore the rollback state:
IFeature::ModifyDefinition
if you modified the feature
IBoundaryBossFeatureData::ReleaseSelectionAccess
if you did not

## Examples

- Insert Boundary Feature (C#) (Insert_Boundary_Feature_Example_CSharp.htm)
- Insert Boundary Feature (VB.NET) (Insert_Boundary_Feature_Example_VBNET.htm)
- Insert Boundary Feature (VBA) (Insert_Boundary_Feature_Example_VB.htm)