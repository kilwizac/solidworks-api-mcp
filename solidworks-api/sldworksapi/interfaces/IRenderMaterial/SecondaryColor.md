---
type: property
interface: IRenderMaterial
member: SecondaryColor
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - secondarycolor
  - irendermaterial
  - render
  - material
  - secondary
  - color
  - int32
readonly: null
---

# IRenderMaterial.SecondaryColor

Gets or sets the secondary color of the appearance.

## Signature

```csharp
System.Int32 SecondaryColor {get; set;}
```
## Parameters

None.

## Return Value

RGB value

## Remarks

This property corresponds to the
Current
Color 2
control on the Color/Image tab of the Appearances PropertyManager page.
To get or set:
Current Color 1
, call
IRenderMaterial::PrimaryColor
.
Current Color 3
, call
IRenderMaterial::TertiaryColor
.