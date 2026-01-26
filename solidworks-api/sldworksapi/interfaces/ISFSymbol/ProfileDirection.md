---
type: property
interface: ISFSymbol
member: ProfileDirection
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - profiledirection
  - isfsymbol
  - isf
  - symbol
  - profile
  - direction
  - int32
readonly: null
---

# ISFSymbol.ProfileDirection

Gets or sets the profile direction of this surface finish symbol.

## Signature

```csharp
System.Int32 ProfileDirection {get; set;}
```
## Parameters

None.

## Return Value

Profile direction as defined by swSFProfileDirection_e

## Remarks

If this property sets swSFProfileDirection_e.swSFProfileDirectionDefinedAngle, then use
ISFSymbol::ProfileAngle
to specify the angle.