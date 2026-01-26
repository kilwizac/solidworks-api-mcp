---
type: property
interface: ISMGussetFeatureData
member: SupportingFaces
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - ISMGussetFeatureData.ReferenceLine
  - ISMGussetFeatureData.ReferencePoint
keywords:
  - supportingfaces
  - ismgussetfeaturedata
  - ism
  - gusset
  - feature
  - data
  - supporting
  - faces
  - object
  - ifeaturemanager
  - insertsheetmetalgussetfeature3
readonly: null
---

# ISMGussetFeatureData.SupportingFaces

Gets or sets the legs of this gusset.

## Signature

```csharp
System.Object SupportingFaces {get; set;}
```
## Parameters

None.

## Return Value

Array of one or two faces to which this gusset is attached

## Remarks

See the
ISMGussetFeatureData
Remarks.

## Examples

- IFeatureManager::InsertSheetMetalGussetFeature3 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IFeatureManager~InsertSheetMetalGussetFeature3)

## See Also

- `ISMGussetFeatureData.ReferenceLine`
- `ISMGussetFeatureData.ReferencePoint`