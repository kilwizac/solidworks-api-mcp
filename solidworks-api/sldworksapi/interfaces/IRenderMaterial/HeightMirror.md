---
type: property
interface: IRenderMaterial
member: HeightMirror
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - heightmirror
  - irendermaterial
  - render
  - material
  - height
  - mirror
  - boolean
readonly: null
---

# IRenderMaterial.HeightMirror

Gets or sets whether to flip the appearance texture about the selected direction vertically.

## Signature

```csharp
System.Boolean HeightMirror {get; set;}
```
## Parameters

None.

## Return Value

True to flip the appearance texture about the selected direction vertically, false to not

## Remarks

Call
IRenderMaterial::WidthMirror
to flip the appearance texture about the selected direction horizontally.