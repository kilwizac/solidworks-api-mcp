---
type: method
interface: ISFSymbol
member: GetLineCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - getlinecount
  - isfsymbol
  - isf
  - symbol
  - line
  - count
  - int32
---

# ISFSymbol.GetLineCount

Gets number of line items in this surface finish symbol.

## Signature

```csharp
System.Int32 GetLineCount()
```
## Parameters

None.

## Return Value

Number of lines

## Remarks

Call this method before calling
ISFSymbol::GetLineAtIndex
and
ISFSymbol::IGetLineAtIndex
to get the number of lines in this surface finish symbol.