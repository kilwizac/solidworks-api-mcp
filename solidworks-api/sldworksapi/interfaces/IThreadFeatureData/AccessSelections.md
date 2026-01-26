---
type: method
interface: IThreadFeatureData
member: AccessSelections
returns: System.Boolean
parameters:
  -
    name: TopDoc
    type: ModelDoc
    description: Top-level document
  -
    name: Component
    type: Component
    description: Component to which this feature is to be applied
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related: []
keywords:
  - accessselections
  - ithreadfeaturedata
  - thread
  - feature
  - data
  - access
  - selections
  - top
  - doc
  - model
  - component
  - boolean
---

# IThreadFeatureData.AccessSelections

Gains access to the selections that define this thread feature.

## Signature

```csharp
System.Boolean AccessSelections( 
   ModelDoc
TopDoc
,
   Component
Component
)
```
## Parameters

- `TopDoc` (ModelDoc): Top-level document
- `Component` (Component): Component to which this feature is to be applied

## Return Value

True if access is successful, false if not

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
IThreadFeatureData::ReleaseSelectionAccess
if you did not

## Examples

- IThreadFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IThreadFeatureData)