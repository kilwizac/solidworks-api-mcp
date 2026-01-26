---
type: method
interface: IBendsFeatureData
member: IAccessSelections2
returns: System.Boolean
parameters:
  -
    name: TopDoc
    type: ModelDoc2
    description: Top-level document
  -
    name: Component
    type: Component2
    description: Allows you to gain access to the selections that describe this Flatten-Bends/Process-Bends feature
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related:
  - IBendsFeatureData.AccessSelections
keywords:
  - iaccessselections2
  - ibendsfeaturedata
  - bends
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

# IBendsFeatureData.IAccessSelections2

Allows access to the selections that describe this Flatten-Bends/Process-Bends feature.

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

- `TopDoc` (ModelDoc2): Top-level document
- `Component` (Component2): Allows you to gain access to the selections that describe this Flatten-Bends/Process-Bends feature

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
TopDoc argument is the ModelDoc2 object for the assembly
Component argument is the
IComponent2
object in which the feature is to be modified
This method puts the model into a rollback state to allow access to the selections that define this feature. You must use either of the following methods to restore the rollback state:
IFeature::IModifyDefinition2
if you modified the feature
IBendsFeatureData::ReleaseSelectionAccess
if you did not

## See Also

- `IBendsFeatureData.AccessSelections`