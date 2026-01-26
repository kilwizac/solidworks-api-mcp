---
type: method
interface: ISFSymbol
member: GetSymbolAllAround
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - getsymbolallaround
  - isfsymbol
  - isf
  - symbol
  - all
  - around
  - boolean
---

# ISFSymbol.GetSymbolAllAround

Gets whether this symbol is All Around or Local for this surface finish symbol.

## Signature

```csharp
System.Boolean GetSymbolAllAround()
```
## Parameters

None.

## Return Value

True if All Around symbol, false if Local symbol

## Remarks

ISFSymbol::GetSymbol
returns one of the following values from the
swSFSymType_e
enumeration: swSFBasic, swSFMachining_Req, swSFDont_Machine, swSFJIS_No_Machining, swSFJIS_Basic, or swSFJIS_Machining_Req.
If the symbol is...
Then use...
swSFJIS_No_Machining or swSFJIS_Basic
ISFSymbol::GetSymbolSurfaceTexture
to retrieve more information about the symbol.
It returns one of these values from the swSFSymType_e enumeration: swSFJIS_Surface_Texture_1, swSFJIS_Surface_Texture_2, swSFJIS_Surface_Texture_3, or swSFJIS_Surface_Texture_4.
swSFBasic, swSFMachining_Req, or swSFDont_Machine
ISFSymbol::GetSymbolAllAround to retrieve more information about the symbol. This method returns a Boolean indicating whether this is an All Around or Local symbol.
To set the symbol type, use
ISFSymbol::SetSymbol
.