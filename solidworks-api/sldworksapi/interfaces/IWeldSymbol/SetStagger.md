---
type: method
interface: IWeldSymbol
member: SetStagger
returns: System.Boolean
parameters:
  -
    name: Stagger
    type: System.Boolean
    description: True if this is a stagger weld, false if not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - setstagger
  - iweldsymbol
  - weld
  - symbol
  - stagger
  - boolean
---

# IWeldSymbol.SetStagger

Sets the stagger property of this weld symbol.

## Signature

```csharp
System.Boolean SetStagger( 
   System.Boolean
Stagger
)
```
## Parameters

- `Stagger` (System.Boolean): True if this is a stagger weld, false if not

## Return Value

True if the stagger weld setting is set successfully, false if not

## Remarks

To retrieve the stagger property of a weld symbol, use
IWeldSymbol::GetStagger
.

## Examples

- IWeldSymbol (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IWeldSymbol)