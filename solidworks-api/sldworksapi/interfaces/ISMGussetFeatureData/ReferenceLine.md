---
type: property
interface: ISMGussetFeatureData
member: ReferenceLine
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISMGussetFeatureData.ReferencePoint
keywords:
  - referenceline
  - ismgussetfeaturedata
  - ism
  - gusset
  - feature
  - data
  - reference
  - line
  - object
  - ifeaturemanager
  - insertsheetmetalgussetfeature3
readonly: null
---

# ISMGussetFeatureData.ReferenceLine

Gets or sets the orientation reference for this gusset's section plane.

## Signature

```csharp
System.Object ReferenceLine {get; set;}
```
## Parameters

None.

## Return Value

Line (e.g., edge, co-Edge , or sketch segment ) that is perpendicular to this gusset's section plane

## Remarks

If you do not set this property, the assumed reference line is the bend line adjacent to the entities in
ISMGussetFeatureData::SupportingFaces
.
See the
ISMGussetFeatureData
Remarks.

## Examples

- IFeatureManager::InsertSheetMetalGussetFeature3 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IFeatureManager~InsertSheetMetalGussetFeature3)

## See Also

- `ISMGussetFeatureData.ReferencePoint`