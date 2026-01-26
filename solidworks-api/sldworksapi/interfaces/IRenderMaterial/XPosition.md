---
type: property
interface: IRenderMaterial
member: XPosition
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - xposition
  - irendermaterial
  - render
  - material
  - position
  - double
readonly: null
---

# IRenderMaterial.XPosition

Gets or sets the X offset direction for the appearance.

## Signature

```csharp
System.Double XPosition {get; set;}
```
## Parameters

None.

## Return Value

X offset direction

## Remarks

This property offsets the appearance from its original position.
Call
IRenderMaterial::YPosition
to set the Y offset direction for the appearance.