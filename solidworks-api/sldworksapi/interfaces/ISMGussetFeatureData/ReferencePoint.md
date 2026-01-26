---
type: property
interface: ISMGussetFeatureData
member: ReferencePoint
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISMGussetFeatureData.ReferenceLine
  - ISMGussetFeatureData.SupportingFaces
keywords:
  - referencepoint
  - ismgussetfeaturedata
  - ism
  - gusset
  - feature
  - data
  - reference
  - point
  - object
  - ifeaturemanager
  - insertsheetmetalgussetfeature3
readonly: null
---

# ISMGussetFeatureData.ReferencePoint

Gets or sets a position reference for this gusset.

## Signature

```csharp
System.Object ReferencePoint {get; set;}
```
## Parameters

None.

## Return Value

Point (e.g., vertex , sketch point , or reference point ) where to position this gusset

## Remarks

If you do not set this property, you must set
ISMGussetFeatureData::UseOffset
and
ISMGussetFeatureData::OffsetDistance
to offset the gusset from an assumed reference point. For insertion of the first gusset, the assumed reference point is on the end of the sheet metal bend. For second and subsequent gusset insertions, the assumed reference point is on the edge of the gusset last inserted.
See the
ISMGussetFeatureData
Remarks.

## Examples

- IFeatureManager::InsertSheetMetalGussetFeature3 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IFeatureManager~InsertSheetMetalGussetFeature3)

## See Also

- `ISMGussetFeatureData.ReferenceLine`
- `ISMGussetFeatureData.SupportingFaces`