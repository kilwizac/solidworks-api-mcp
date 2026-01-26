---
type: property
interface: IRenderMaterial
member: ColorForm
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - colorform
  - irendermaterial
  - render
  - material
  - color
  - form
  - int32
readonly: null
---

# IRenderMaterial.ColorForm

Gets or sets the number of colors required to describe the appearance .

## Signature

```csharp
System.Int32 ColorForm {get; set;}
```
## Parameters

None.

## Return Value

Number of colors as defined by swRenderMaterialColorForms_e

## Remarks

For example, blue glass is defined by two colors. To see the corresponding user-interface controls, open a model to which the blue glass appearance has been applied. Edit the blue glass appearance to open the Appearances PropertyManager page. Two color controls, Current Color1 and Current Color2, are displayed under Color.