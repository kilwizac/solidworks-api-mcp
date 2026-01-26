---
type: method
interface: IHoleSeriesFeatureData2
member: IAccessSelections
returns: System.Boolean
parameters:
  -
    name: TopDoc
    type: ModelDoc
    description: Top-level document (see Remarks )
  -
    name: Component
    type: Component
    description: Component in which the feature is to be modified (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related:
  - IHoleSeriesFeatureData2.AccessSelections
keywords:
  - iaccessselections
  - iholeseriesfeaturedata2
  - hole
  - series
  - feature
  - data2
  - access
  - selections
  - top
  - doc
  - model
  - component
  - boolean
---

# IHoleSeriesFeatureData2.IAccessSelections

Gains access to the selections that define this hole series feature.

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

- `TopDoc` (ModelDoc): Top-level document (see Remarks )
- `Component` (Component): Component in which the feature is to be modified (see Remarks )

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
IFeature::IModifyDefinition2
if you modified the feature
IHoleSeriesFeatureData2::ReleaseSelectionAccess
if you did not

## See Also

- `IHoleSeriesFeatureData2.AccessSelections`