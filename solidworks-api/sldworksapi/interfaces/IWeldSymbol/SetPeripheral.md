---
type: method
interface: IWeldSymbol
member: SetPeripheral
returns: System.Boolean
parameters:
  -
    name: Peripheral
    type: System.Boolean
    description: True if a peripheral weld, false if not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - setperipheral
  - iweldsymbol
  - weld
  - symbol
  - peripheral
  - boolean
---

# IWeldSymbol.SetPeripheral

Sets the peripheral property of this weld symbol.

## Signature

```csharp
System.Boolean SetPeripheral( 
   System.Boolean
Peripheral
)
```
## Parameters

- `Peripheral` (System.Boolean): True if a peripheral weld, false if not

## Return Value

True if the peripheral weld setting is set successfully, false if not

## Remarks

To retrieve the peripheral property of a weld symbol, use
IWeldSymbol::GetPeripheral
.

## Examples

- IWeldSymbol (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IWeldSymbol)