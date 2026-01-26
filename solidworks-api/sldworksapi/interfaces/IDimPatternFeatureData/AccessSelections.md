---
type: method
interface: IDimPatternFeatureData
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
    description: Component in which to modify the feature
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related: []
keywords:
  - accessselections
  - idimpatternfeaturedata
  - dim
  - pattern
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
  - variable
  - vb
  - net
  - vba
---

# IDimPatternFeatureData.AccessSelections

Allows access to the selections that describe this variable pattern feature.

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
- `Component` (Component2): Component in which to modify the feature

## Return Value

True if the selections are successfully accessed, false if not

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
object in which to modify the feature
This method puts the model into a rollback state to allow access to the selections that define this feature. You must use either of the following methods to restore the rollback state:
IFeature::ModifyDefinition
if you modified the feature
IDimPatternFeatureData::ReleaseSelectionAccess
if you did not

## Examples

- Insert Variable Pattern Feature (C#) (Insert_Advanced_Variable_Pattern_Feature_Example_CSharp.htm)
- Insert Variable Pattern Feature (VB.NET) (Insert_Advanced_Variable_Pattern_Feature_Example_VBNET.htm)
- Insert Variable Pattern Feature (VBA) (Insert_Advanced_Variable_Pattern_Feature_Example_VB.htm)