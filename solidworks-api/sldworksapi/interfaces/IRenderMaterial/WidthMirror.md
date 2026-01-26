---
type: property
interface: IRenderMaterial
member: WidthMirror
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - widthmirror
  - irendermaterial
  - render
  - material
  - width
  - mirror
  - boolean
readonly: null
---

# IRenderMaterial.WidthMirror

Gets or sets whether to flip the appearance texture about the selected direction horizontally.

## Signature

```csharp
System.Boolean WidthMirror {get; set;}
```
## Parameters

None.

## Return Value

True to flip the appearance texture about the selected direction horizontally, false to not

## Remarks

Call
IRenderMaterial::HeightMirror
to flip the appearance texture about the selected direction vertically.