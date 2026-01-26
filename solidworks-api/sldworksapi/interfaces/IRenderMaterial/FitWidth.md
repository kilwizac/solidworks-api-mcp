---
type: property
interface: IRenderMaterial
member: FitWidth
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - fitwidth
  - irendermaterial
  - render
  - material
  - fit
  - width
  - boolean
  - filename
readonly: null
---

# IRenderMaterial.FitWidth

Gets or sets whether to stretch the width of the appearance texture to the selected entity when mapping the appearance.

## Signature

```csharp
System.Boolean FitWidth {get; set;}
```
## Parameters

None.

## Return Value

True to stretch the width of the appearance texture to the selected entity, false to not

## Remarks

Call
IRenderMaterial::FitHeight
to get or set whether to stretch the height of the appearance texture to the selected entity.
To stretch width and height of the appearance texture yourself, call
IRenderMaterial::Width
and
IRenderMaterial::Height
.

## Examples

- IRenderMaterial::FileName (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IRenderMaterial~FileName)