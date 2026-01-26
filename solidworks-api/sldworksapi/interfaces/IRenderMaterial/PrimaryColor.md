---
type: property
interface: IRenderMaterial
member: PrimaryColor
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - primarycolor
  - irendermaterial
  - render
  - material
  - primary
  - color
  - int32
readonly: null
---

# IRenderMaterial.PrimaryColor

Gets or sets the primary color of the appearance.

## Signature

```csharp
System.Int32 PrimaryColor {get; set;}
```
## Parameters

None.

## Return Value

RGB value

## Remarks

This property corresponds to the
Current
Color 1
control on the Color/Image tab of the Appearances PropertyManager page.
To get or set:
Current Color 2
, call
IRenderMaterial::SecondaryColor
.
Current Color 3
, call
IRenderMaterial::TertiaryColor
.