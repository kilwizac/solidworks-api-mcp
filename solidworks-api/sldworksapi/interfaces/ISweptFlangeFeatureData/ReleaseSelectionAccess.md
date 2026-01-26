---
type: method
interface: ISweptFlangeFeatureData
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
  - isweptflangefeaturedata
  - swept
  - flange
  - feature
  - data
  - release
  - selection
  - access
  - void
  - isheetmetalgaugetableparameters
---

# ISweptFlangeFeatureData.ReleaseSelectionAccess

Releases access to the selections for this swept flange feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

ISweptFlangeFeatureData::AccessSelections
puts the model in a rollback state to allow access to the selections that define the feature.
Use this method to restore the rollback state if you did not modify the feature, or use
IFeature::ModifyDefinition
if you did modify the feature.

## Examples

- ISheetMetalGaugeTableParameters (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISheetMetalGaugeTableParameters)