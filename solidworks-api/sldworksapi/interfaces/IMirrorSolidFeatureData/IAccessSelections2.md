---
type: method
interface: IMirrorSolidFeatureData
member: IAccessSelections2
returns: System.Boolean
parameters:
  -
    name: TopDoc
    type: ModelDoc2
    description: Top-level document (see Remarks )
  -
    name: Component
    type: Component2
    description: Top-level document (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related:
  - IMirrorSolidFeatureData.AccessSelections
keywords:
  - iaccessselections2
  - imirrorsolidfeaturedata
  - mirror
  - solid
  - feature
  - data
  - access
  - selections2
  - top
  - doc
  - model
  - doc2
  - component
  - component2
  - boolean
---

# IMirrorSolidFeatureData.IAccessSelections2

Gains access to the selections that define the mirror solid feature.

## Signature

```csharp
System.Boolean IAccessSelections2( 
   ModelDoc2
TopDoc
,
   Component2
Component
)
```
## Parameters

- `TopDoc` (ModelDoc2): Top-level document (see Remarks )
- `Component` (Component2): Top-level document (see Remarks )

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
IFeature::IModifyDefinition2
if you modified the feature
IMirrorSolidFeatureData::ReleaseSelectionAccess
if you did not

## See Also

- `IMirrorSolidFeatureData.AccessSelections`