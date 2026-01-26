---
type: method
interface: ISFSymbol
member: GetArrowHeadCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ISFSymbol.GetArrowHeadInfo
  - ISFSymbol.IGetArrowHeadInfo
keywords:
  - getarrowheadcount
  - isfsymbol
  - isf
  - symbol
  - arrow
  - head
  - count
  - int32
---

# ISFSymbol.GetArrowHeadCount

Gets the number of arrow heads in the surface finish symbol.

## Signature

```csharp
System.Int32 GetArrowHeadCount()
```
## Parameters

None.

## Return Value

Number of arrow heads

## Remarks

Call this method before calling
ISFSymbol::GetArrowHeadAtIndex
and
ISFSymbol::IGetArrowHeadAtIndex
to find out the number of arrow heads for this surface finish symbol.

## See Also

- `ISFSymbol.GetArrowHeadInfo`
- `ISFSymbol.IGetArrowHeadInfo`