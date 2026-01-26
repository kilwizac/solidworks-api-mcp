---
type: property
interface: IBalloonOptions
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
  - iballoonoptions
  - balloon
  - options
  - quantity
  - override
  - value
  - string
readonly: null
---

# IBalloonOptions.QuantityOverrideValue

Gets and sets the override value for the BOM item quantity.

## Signature

```csharp
System.String QuantityOverrideValue {get; set;}
```
## Parameters

None.

## Return Value

BOM item quantity override value; valid only when IBalloonOptions::QuantityOverride is true

## Remarks

See the SOLIDWORKS Help for additional details about balloons.

## Examples

- IBalloonOptions (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBalloonOptions)