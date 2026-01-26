---
type: property
interface: IBoundingBoxFeatureData
member: PlanarEntity
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - planarentity
  - iboundingboxfeaturedata
  - bounding
  - box
  - feature
  - data
  - planar
  - entity
  - object
readonly: null
---

# IBoundingBoxFeatureData.PlanarEntity

Gets or sets the reference face or plane for this bounding box feature.

## Signature

```csharp
System.Object PlanarEntity {get; set;}
```
## Parameters

None.

## Return Value

Planar face or plane

## Remarks

This property is valid only if
IBoundingBoxFeatureData::ReferenceFaceOrPlane
is set to
swGlobalBoundingBoxFitOptions_e
.swBoundingBoxType_CustomPlane.

## Examples

- IBoundingBoxFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBoundingBoxFeatureData)