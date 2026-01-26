---
type: method
interface: IHoleSeriesFeatureData
member: IAccessSelections
returns: System.Boolean
parameters:
  -
    name: TopDoc
    type: ModelDoc
    description: Top-level document
  -
    name: Component
    type: Component
    description: Component in which the feature is to be modified
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
  - selections
related:
  - IHoleSeriesFeatureData.AccessSelections
keywords:
  - iaccessselections
  - iholeseriesfeaturedata
  - hole
  - series
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

# IHoleSeriesFeatureData.IAccessSelections

Obsolete. Superseded by IHoleSeriesFeatureData2::IAccessSelections.

## Signature

```csharp
System.Boolean IAccessSelections( 
   ModelDoc
TopDoc
,
   Component
Component
)
```
## Parameters

- `TopDoc` (ModelDoc): Top-level document
- `Component` (Component): Component in which the feature is to be modified

## Return Value

True if the selections are successfully accessed, false if not

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
IFeature::ModifyDefintion
or
IFeature::IModifyDefinition2
if you modified the feature
IHoleSeriesFeatureData::ReleaseSelectionAccess
if you did not

## See Also

- `IHoleSeriesFeatureData.AccessSelections`