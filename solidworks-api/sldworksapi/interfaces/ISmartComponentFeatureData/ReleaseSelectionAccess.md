---
type: method
interface: ISmartComponentFeatureData
member: ReleaseSelectionAccess
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related: []
keywords:
  - releaseselectionaccess
  - ismartcomponentfeaturedata
  - smart
  - component
  - feature
  - data
  - release
  - selection
  - access
  - void
---

# ISmartComponentFeatureData.ReleaseSelectionAccess

Releases access to the selection lists of a Smart Component.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

ISmartComponentFeatureData::AccessSelections
opens the training assembly in which this Smart Component is defined and allows access to the selection lists on the PropertyManager page of the SmartComponent.
To close the training assembly:
Call this method if you did not insert or delete features and components.
Call
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
to rebuild the Smart Component if you inserted or deleted features and components.