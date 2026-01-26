---
type: property
interface: IStackedBalloonOptions
member: QuantityPlacement
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - quantityplacement
  - istackedballoonoptions
  - stacked
  - balloon
  - options
  - quantity
  - placement
  - int32
readonly: null
---

# IStackedBalloonOptions.QuantityPlacement

Gets and sets the placement of a BOM item quantity with respect to its balloon.

## Signature

```csharp
System.Int32 QuantityPlacement {get; set;}
```
## Parameters

None.

## Return Value

Placement of BOM item quantity value as defined in swBalloonQuantityPlacement_e ; only swBalloonQuantityPlacement_e.swBalloonQuantityPlacement_Top and swBalloonQuantityPlacement_e.swBalloonQuantityPlacement_Bottom are valid options for stacked balloons

## Remarks

See the SOLIDWORKS Help for additional details about stacked balloons.

## Examples

- IStackedBalloonOptions (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IStackedBalloonOptions)