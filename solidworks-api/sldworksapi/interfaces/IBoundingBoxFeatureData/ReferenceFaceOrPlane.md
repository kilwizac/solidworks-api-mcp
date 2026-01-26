---
type: property
interface: IBoundingBoxFeatureData
member: ReferenceFaceOrPlane
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IBoundingBoxFeatureData.PlanarEntity
keywords:
  - referencefaceorplane
  - iboundingboxfeaturedata
  - bounding
  - box
  - feature
  - data
  - reference
  - face
  - plane
  - int32
readonly: null
---

# IBoundingBoxFeatureData.ReferenceFaceOrPlane

Gets or sets how to create the bounding box.

## Signature

```csharp
System.Int32 ReferenceFaceOrPlane {get; set;}
```
## Parameters

None.

## Return Value

Fit type as defined in swGlobalBoundingBoxFitOptions_e

## Remarks

If this property is set to swGlobalBoundingBoxFitOptions_e.swBoundingBoxType_CustomPlane, then select a face or plane using
IModelDocExtension::SelectByRay
with TypeWanted set to
swSelectType_e
.swSelFACES before calling this method.

## Examples

- IBoundingBoxFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBoundingBoxFeatureData)

## See Also

- `IBoundingBoxFeatureData.PlanarEntity`