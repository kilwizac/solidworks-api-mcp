---
type: method
interface: ISFSymbol
member: GetArcCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - getarccount
  - isfsymbol
  - isf
  - symbol
  - arc
  - count
  - int32
---

# ISFSymbol.GetArcCount

Gets the number of arcs in this surface finish symbol.

## Signature

```csharp
System.Int32 GetArcCount()
```
## Parameters

None.

## Return Value

Number of arcs

## Remarks

Call this method before calling
ISFSymbol::GetArcAtIndex
and
ISFSymbol::IGetArcAtIndex
to find out the number of arcs in this surface finish symbol.