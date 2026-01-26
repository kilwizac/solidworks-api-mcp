---
type: method
interface: ISurfExtrudeFeatureData
member: GetTranslateSurface
returns: System.Boolean
parameters:
  -
    name: Fwd
    type: System.Boolean
    description: True gets the translate surface setting in the forward direction, false gets it in the reverse direction
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISurfExtrudeFeatureData.SetTranslateSurface
keywords:
  - gettranslatesurface
  - isurfextrudefeaturedata
  - surf
  - extrude
  - feature
  - data
  - translate
  - surface
  - fwd
  - boolean
---

# ISurfExtrudeFeatureData.GetTranslateSurface

Gets the translate surface setting for this extruded surface.

## Signature

```csharp
System.Boolean GetTranslateSurface( 
   System.Boolean
Fwd
)
```
## Parameters

- `Fwd` (System.Boolean): True gets the translate surface setting in the forward direction, false gets it in the reverse direction

## Return Value

True if the translate surface setting is enabled, false if it is disabled

## Remarks

See
Accessing Selections that Define Features
for additional details.

## Examples

- ISurfExtrudeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISurfExtrudeFeatureData)

## See Also

- `ISurfExtrudeFeatureData.SetTranslateSurface`