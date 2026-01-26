---
type: method
interface: ISMNormalCutFeatureData2
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
  - ismnormalcutfeaturedata2
  - ism
  - normal
  - cut
  - feature
  - data2
  - access
  - selections
  - top
  - doc
  - object
  - component
  - boolean
---

# ISMNormalCutFeatureData2.AccessSelections

Gains access to the selections defining this sheet metal Normal Cut feature.

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
- `Component` (System.Object): Component for the feature

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
if you modified the feature
ISMNormalCutFeatureData2::ReleaseSelectionAccess
if you did not

## Examples

- ISMNormalCutFeatureData2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISMNormalCutFeatureData2)