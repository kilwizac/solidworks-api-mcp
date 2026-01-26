---
type: property
interface: IAppearanceSetting
member: Specular
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - specular
  - iappearancesetting
  - appearance
  - setting
  - double
readonly: null
---

# IAppearanceSetting.Specular

Gets or sets the intensity of highlights on surfaces.

## Signature

```csharp
System.Double Specular {get; set;}
```
## Parameters

None.

## Return Value

0 <= specular_value <= 1; valid only when IAppearanceSetting::SpecularSpread > 0

## Remarks

See SOLIDWORKS Help for more information about appearances.