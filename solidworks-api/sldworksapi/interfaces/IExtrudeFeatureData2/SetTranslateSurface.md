---
type: method
interface: IExtrudeFeatureData2
member: SetTranslateSurface
returns: void
parameters:
  -
    name: Fwd
    type: System.Boolean
    description: True makes the end of the extrusion a translation of the reference surface in the forward direction, false makes the end of the extrusion a translation of the reference surface in the reverse direction
  -
    name: ValIn
    type: System.Boolean
    description: True to enable the translate surface setting, false to disable it
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IExtrudeFeatureData2.FromOffsetDistance
  - IExtrudeFeatureData2.FromOffsetReverse
  - IExtrudeFeatureData2.GetReverseOffset
  - IExtrudeFeatureData2.GetTranslateSurface
  - IExtrudeFeatureData2.SetReverseOffset
keywords:
  - settranslatesurface
  - iextrudefeaturedata2
  - extrude
  - feature
  - data2
  - translate
  - surface
  - fwd
  - boolean
  - val
  - void
---

# IExtrudeFeatureData2.SetTranslateSurface

Sets the translate surface setting for this extrude feature.

## Signature

```csharp
void SetTranslateSurface( 
   System.Boolean
Fwd
,
   System.Boolean
ValIn
)
```
## Parameters

- `Fwd` (System.Boolean): True makes the end of the extrusion a translation of the reference surface in the forward direction, false makes the end of the extrusion a translation of the reference surface in the reverse direction
- `ValIn` (System.Boolean): True to enable the translate surface setting, false to disable it

## Return Value

Unknown.

## See Also

- `IExtrudeFeatureData2.FromOffsetDistance`
- `IExtrudeFeatureData2.FromOffsetReverse`
- `IExtrudeFeatureData2.GetReverseOffset`
- `IExtrudeFeatureData2.GetTranslateSurface`
- `IExtrudeFeatureData2.SetReverseOffset`