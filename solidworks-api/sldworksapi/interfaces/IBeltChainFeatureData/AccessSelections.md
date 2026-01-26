---
type: method
interface: IBeltChainFeatureData
member: AccessSelections
returns: System.Boolean
parameters:
  -
    name: TopDoc
    type: System.Object
    description: Top level document (see Remarks )
  -
    name: Component
    type: System.Object
    description: Component for the feature (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related: []
keywords:
  - accessselections
  - ibeltchainfeaturedata
  - belt
  - chain
  - feature
  - data
  - access
  - selections
  - top
  - doc
  - object
  - component
  - boolean
---

# IBeltChainFeatureData.AccessSelections

Gains access to selections used to define this belt/chain assembly feature.

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

- `TopDoc` (System.Object): Top level document (see Remarks )
- `Component` (System.Object): Component for the feature (see Remarks )

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
IBeltChainFeatureData::ReleaseSelectionAccess
if you did not

## Examples

- IBeltChainFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBeltChainFeatureData)