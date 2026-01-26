---
type: method
interface: ISFSymbol
member: SetAngle
returns: System.Boolean
parameters:
  -
    name: Angle
    type: System.Double
    description: Angle in radians
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - setangle
  - isfsymbol
  - isf
  - symbol
  - angle
  - double
  - boolean
---

# ISFSymbol.SetAngle

Sets the angle for this surface finish symbol.

## Signature

```csharp
System.Boolean SetAngle( 
   System.Double
Angle
)
```
## Parameters

- `Angle` (System.Double): Angle in radians

## Return Value

True if the angle is set, false if it is not

## Remarks

This method automatically sets the orientation to swSFOrientation_UserDefined. See
ISFSymbol::Orientation
for details.
Use
ISFSymbol::GetAngle
to get the angle of the symbol.