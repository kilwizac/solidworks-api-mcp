---
type: method
interface: ISFSymbol
member: SetSymbol
returns: System.Boolean
parameters:
  -
    name: Symbol
    type: System.Int32
    description: Type of symbol as defined in swSFSymType_e
  -
    name: SurfaceTexture
    type: System.Int32
    description: Symbol surface text type as defined in swSFSymType_e
  -
    name: AllAround
    type: System.Boolean
    description: True if symbol is All Around, false if symbol is Local
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - setsymbol
  - isfsymbol
  - isf
  - symbol
  - int32
  - surface
  - texture
  - all
  - around
  - boolean
---

# ISFSymbol.SetSymbol

Sets the type of symbol for this surface finish symbol.

## Signature

```csharp
System.Boolean SetSymbol( 
   System.Int32
Symbol
,
   System.Int32
SurfaceTexture
,
   System.Boolean
AllAround
)
```
## Parameters

- `Symbol` (System.Int32): Type of symbol as defined in swSFSymType_e
- `SurfaceTexture` (System.Int32): Symbol surface text type as defined in swSFSymType_e
- `AllAround` (System.Boolean): True if symbol is All Around, false if symbol is Local

## Return Value

True if symbol is set, false if it is not

## Remarks

The Symbol argument must be one of the following values from the
swSFSymType_e
enumeration: swSFBasic, swSFMachining_Req, swSFDont_Machine, swSFJIS_No_Machining, swSFJIS_Basic, or swSFJIS_Machining_Req.
ISFSymbol::GetSymbol
will get this value.
If the symbol is...
Then...
swSFJIS_No_Machining or swSFJIS_Basic
SurfaceTexture argument must be one of these values from the swSFSymType enumeration:
swSFJIS_Surface_Texture_1, swSFJIS_Surface_Texture_2, swSFJIS_Surface_Texture_3,
or swSFJIS_Surface_Texture_4.
For any other symbol types, this argument is ignored, and 0 should be passed in. The
ISFSymbol::GetSymbolSurfaceTexture
method will get this value.
swSFBasic, swSFMachining_Req, or swSFDont_Machine
AllAround argument indicates whether this is an All Around or Local symbol.
Use
ISFSymbol::GetSymbolAllAround
to get this value.