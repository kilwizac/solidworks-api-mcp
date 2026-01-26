---
type: method
interface: IFillPatternFeatureData
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
  - ifillpatternfeaturedata
  - fill
  - pattern
  - feature
  - data
  - release
  - selection
  - access
  - void
---

# IFillPatternFeatureData.ReleaseSelectionAccess

Releases access to selections that define this fill pattern feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IFillPatternFeatureData::AccessSelections
puts the model into a rollback state to allow access to the selections that define the fill pattern feature.
Use this method to restore the rollback state if you did not modify the fill pattern feature, or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did modify the fill pattern feature.