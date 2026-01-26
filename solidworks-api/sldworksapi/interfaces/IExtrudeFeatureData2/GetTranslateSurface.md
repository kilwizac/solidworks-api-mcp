---
type: method
interface: IExtrudeFeatureData2
member: GetTranslateSurface
returns: System.Boolean
parameters:
  -
    name: Fwd
    type: System.Boolean
    description: True makes the end of the extrusion a translation of the reference surface in the forward direction, false makes the end of the extrusion a translation of the reference surface in the reverse direction
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IExtrudeFeatureData2.FromOffsetDistance
  - IExtrudeFeatureData2.FromOffsetReverse
  - IExtrudeFeatureData2.GetReverseOffset
  - IExtrudeFeatureData2.SetReverseOffset
  - IExtrudeFeatureData2.SetTranslateSurface
keywords:
  - gettranslatesurface
  - iextrudefeaturedata2
  - extrude
  - feature
  - data2
  - translate
  - surface
  - fwd
  - boolean
---

# IExtrudeFeatureData2.GetTranslateSurface

Gets the translate surface setting for this extrude feature.

## Signature

```csharp
System.Boolean GetTranslateSurface( 
   System.Boolean
Fwd
)
```
## Parameters

- `Fwd` (System.Boolean): True makes the end of the extrusion a translation of the reference surface in the forward direction, false makes the end of the extrusion a translation of the reference surface in the reverse direction

## Return Value

True if the translate surface setting is enabled, false if it is disabled

## See Also

- `IExtrudeFeatureData2.FromOffsetDistance`
- `IExtrudeFeatureData2.FromOffsetReverse`
- `IExtrudeFeatureData2.GetReverseOffset`
- `IExtrudeFeatureData2.SetReverseOffset`
- `IExtrudeFeatureData2.SetTranslateSurface`