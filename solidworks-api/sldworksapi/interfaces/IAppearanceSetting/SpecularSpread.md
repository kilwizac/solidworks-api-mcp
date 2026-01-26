---
type: property
interface: IAppearanceSetting
member: SpecularSpread
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - specularspread
  - iappearancesetting
  - appearance
  - setting
  - specular
  - spread
  - double
readonly: null
---

# IAppearanceSetting.SpecularSpread

Gets or sets the blurriness of reflections on a surface.

## Signature

```csharp
System.Double SpecularSpread {get; set;}
```
## Parameters

None.

## Return Value

0 <= specular_spread <= 1; valid only when IAppearanceSetting::Specular > 0 and IAppearanceSetting::SpecularColor > 0 (not black)

## Remarks

See SOLIDWORKS Help for more information about appearances.