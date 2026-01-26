---
type: method
interface: ISurfaceExtendFeatureData
member: IAccessSelections
returns: System.Boolean
parameters:
  -
    name: TopDoc
    type: ModelDoc2
    description: Top-level document
  -
    name: Component
    type: Component2
    description: Component in which the feature is to be modified
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related:
  - ISurfaceExtendFeatureData.AccessSelections
keywords:
  - iaccessselections
  - isurfaceextendfeaturedata
  - surface
  - extend
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
---

# ISurfaceExtendFeatureData.IAccessSelections

Accesses the selections that define this surface-extend feature.

## Signature

```csharp
System.Boolean IAccessSelections( 
   ModelDoc2
TopDoc
,
   Component2
Component
)
```
## Parameters

- `TopDoc` (ModelDoc2): Top-level document
- `Component` (Component2): Component in which the feature is to be modified

## Return Value

True if the selections are accessed, false if not

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
ISurfaceExtendFeatureData::ReleaseSelectionAccess
if you did not

## See Also

- `ISurfaceExtendFeatureData.AccessSelections`