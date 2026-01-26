---
type: property
interface: IStackedBalloonOptions
member: QuantityOverrideValue
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - quantityoverridevalue
  - istackedballoonoptions
  - stacked
  - balloon
  - options
  - quantity
  - override
  - value
  - string
readonly: null
---

# IStackedBalloonOptions.QuantityOverrideValue

Gets and sets the override value for BOM item quantities.

## Signature

```csharp
System.String QuantityOverrideValue {get; set;}
```
## Parameters

None.

## Return Value

BOM item quantity override value; valid only when IStackedBalloonOptions::QuantityOverride is true

## Remarks

See the SOLIDWORKS Help for additional details about stacked balloons.

## Examples

- IStackedBalloonOptions (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IStackedBalloonOptions)