---
type: property
interface: IRenderMaterial
member: TertiaryColor
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - tertiarycolor
  - irendermaterial
  - render
  - material
  - tertiary
  - color
  - int32
readonly: null
---

# IRenderMaterial.TertiaryColor

Gets or sets the tertiary color of the appearance.

## Signature

```csharp
System.Int32 TertiaryColor {get; set;}
```
## Parameters

None.

## Return Value

RGB value

## Remarks

This property corresponds to the
Current
Color 3
control on the Color/Image tab of the Appearances PropertyManager page.
To get or set:
Current Color 1
, call
IRenderMaterial::PrimaryColor
.
Current Color 2
, call
IRenderMaterial::SecondaryColor
.