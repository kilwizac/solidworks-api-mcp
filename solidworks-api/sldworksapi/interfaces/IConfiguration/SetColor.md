---
type: method
interface: IConfiguration
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
  - documents
related: []
keywords:
  - setcolor
  - iconfiguration
  - configuration
  - color
  - int32
  - boolean
---

# IConfiguration.SetColor

Sets the color for this configuration.

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

True if the color is set, false if not