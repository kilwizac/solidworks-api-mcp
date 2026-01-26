---
type: property
interface: ISweepFeatureData
member: ThinFeature
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISweepFeatureData.IsThinFeature
  - ISweepFeatureData.SetWallThickness
  - ISweepFeatureData.ThinWallType
keywords:
  - thinfeature
  - isweepfeaturedata
  - sweep
  - feature
  - data
  - thin
  - boolean
readonly: null
---

# ISweepFeatureData.ThinFeature

Gets or sets whether to make this sweep feature a thin-walled feature.

## Signature

```csharp
System.Boolean ThinFeature {get; set;}
```
## Parameters

None.

## Return Value

True to make a thin-walled sweep feature, false to not

## Remarks

To make a thin sweep, you must set this property before calling
IFeatureManager::CreateFeature
. You cannot make a thin-walled sweep feature after the sweep has been created, and you cannot edit a sweep feature to make it thin walled.
This property is not valid for swept-surface features.

## Examples

- ISweepFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISweepFeatureData)

## See Also

- `ISweepFeatureData.IsThinFeature`
- `ISweepFeatureData.SetWallThickness`
- `ISweepFeatureData.ThinWallType`