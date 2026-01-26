---
type: method
interface: ISurfExtrudeFeatureData
member: SetTranslateSurface
returns: void
parameters:
  -
    name: Fwd
    type: System.Boolean
    description: True sets the translate surface setting in the forward direction, false sets it in the reverse direction
  -
    name: Trans
    type: System.Boolean
    description: True enables the translate surface setting, false disables it
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISurfExtrudeFeatureData.GetTranslateSurface
keywords:
  - settranslatesurface
  - isurfextrudefeaturedata
  - surf
  - extrude
  - feature
  - data
  - translate
  - surface
  - fwd
  - boolean
  - trans
  - void
---

# ISurfExtrudeFeatureData.SetTranslateSurface

Sets the translate surface setting for this extruded surface.

## Signature

```csharp
void SetTranslateSurface( 
   System.Boolean
Fwd
,
   System.Boolean
Trans
)
```
## Parameters

- `Fwd` (System.Boolean): True sets the translate surface setting in the forward direction, false sets it in the reverse direction
- `Trans` (System.Boolean): True enables the translate surface setting, false disables it

## Return Value

Unknown.

## See Also

- `ISurfExtrudeFeatureData.GetTranslateSurface`