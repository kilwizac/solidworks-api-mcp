---
type: property
interface: ISFSymbol
member: Orientation
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - orientation
  - isfsymbol
  - isf
  - symbol
  - int32
readonly: null
---

# ISFSymbol.Orientation

Gets whether the orientation of this surface finish symbol is relative to the model or entity to which it is attached.

## Signature

```csharp
System.Int32 Orientation {get; set;}
```
## Parameters

None.

## Return Value

Orientation as defined in swSurfaceFinishSymbolOrientation_e

## Remarks

If setting the value to swSFOrientation_UserDefined, then the angle at which the symbol is displayed does not change. Instead, use
ISFSymbol::SetAngle
to set the symbol to a user-specified angle, which automatically sets the orientation to swSFOrientation_UserDefined.
Use
ISFSymbol::GetAngle
to get the angle of the symbol.