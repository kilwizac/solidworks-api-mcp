---
type: property
interface: IAppearanceSetting
member: SpecularColor
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - specularcolor
  - iappearancesetting
  - appearance
  - setting
  - specular
  - color
  - int32
readonly: null
---

# IAppearanceSetting.SpecularColor

Gets or sets the color of reflected highlights for a specular component.

## Signature

```csharp
System.Int32 SpecularColor {get; set;}
```
## Parameters

None.

## Return Value

Color of reflected highlights; valid only when IAppearanceSetting::SpecularSpread > 0 and IAppearanceSetting::Specular > 0 (see Remarks )

## Remarks

specular_color
= MAX(MIN(
red_rgb_value
,255),0) + MAX(MIN(
green_rgb_value
,255),0)*16*16 + MAX(MIN(
blue_rgb_value
,255),0)*16*16*16*16
See SOLIDWORKS Help for more information about appearances.