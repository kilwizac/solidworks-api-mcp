---
type: method
interface: ISFSymbol
member: GetSymbol
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - getsymbol
  - isfsymbol
  - isf
  - symbol
  - int32
---

# ISFSymbol.GetSymbol

Gets the type of symbol for this surface finish symbol.

## Signature

```csharp
System.Int32 GetSymbol()
```
## Parameters

None.

## Return Value

Type of symbol as defined in swSFSymType_e (see Remarks )

## Remarks

This method returns one of the following values from the
swSFSymType_e
enumeration: swSFBasic, swSFMachining_Req, swSFDont_Machine, swSFJIS_No_Machining, swSFJIS_Basic, or swSFJIS_Machining_Req.
If the symbol is...
Then use...
swSFJIS_No_Machining or swSFJIS_Basic
ISFSymbol::GetSymbolSurfaceTexture
to retrieve more information about the symbol.
It returns one of these values from the swSFSymType_e enumeration: swSFJIS_Surface_Texture_1, swSFJIS_Surface_Texture_2, swSFJIS_Surface_Texture_3, or swSFJIS_Surface_Texture_4.
swSFBasic, swSFMachining_Req, or swSFDont_Machine
ISFSymbol::GetSymbolAllAround
to retrieve more information about the symbol. This method returns a Boolean indicating whether this is an All Around or Local symbol.
To set the symbol type, use
ISFSymbol::SetSymbol
.