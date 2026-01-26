---
type: method
interface: ISFSymbol
member: GetDirectionOfLay
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - getdirectionoflay
  - isfsymbol
  - isf
  - symbol
  - direction
  - lay
  - int32
---

# ISFSymbol.GetDirectionOfLay

Gets the direction of lay value for this surface finish symbol.

## Signature

```csharp
System.Int32 GetDirectionOfLay()
```
## Parameters

None.

## Return Value

Direction of lay as defined in swSFLaySym_e

## Remarks

To set the direction of lay value, use
ISFSymbol::SetDirectionOfLay
.