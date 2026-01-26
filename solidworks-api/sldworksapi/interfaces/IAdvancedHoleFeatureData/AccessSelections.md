---
type: method
interface: IAdvancedHoleFeatureData
member: AccessSelections
returns: System.Boolean
parameters:
  -
    name: TopDoc
    type: System.Object
    description: IModelDoc2 for the part
  -
    name: Component
    type: System.Object
    description: Null or Nothing
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related: []
keywords:
  - accessselections
  - iadvancedholefeaturedata
  - advanced
  - hole
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

# IAdvancedHoleFeatureData.AccessSelections

Gains access to the selections used to define the Advanced Hole feature.

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

- `TopDoc` (System.Object): IModelDoc2 for the part
- `Component` (System.Object): Null or Nothing

## Return Value

True if the selections are successfully accessed, false if not

## Remarks

This method puts the model into a rollback state to allow access to the selections that define this feature.
You must use either of the following methods to restore the original state of the model:
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
, if you modified the feature
IAdvancedHoleFeatureData::ReleaseSelectionAccess
, if you did not modify the feature

## Examples

- IAdvancedHoleFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAdvancedHoleFeatureData)