---
type: method
interface: IReferenceCurve
member: SetColor
returns: System.Boolean
parameters:
  -
    name: ColorIn
    type: System.Int32
    description: COLORREF value of the color
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - setcolor
  - ireferencecurve
  - reference
  - curve
  - color
  - int32
  - boolean
---

# IReferenceCurve.SetColor

Sets the color of the reference curve feature.

## Signature

```csharp
System.Boolean SetColor( 
   System.Int32
ColorIn
)
```
## Parameters

- `ColorIn` (System.Int32): COLORREF value of the color

## Return Value

True if the color was set, false if not