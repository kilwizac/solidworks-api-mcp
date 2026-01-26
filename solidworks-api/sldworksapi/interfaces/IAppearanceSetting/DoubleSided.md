---
type: property
interface: IAppearanceSetting
member: DoubleSided
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - doublesided
  - iappearancesetting
  - appearance
  - setting
  - double
  - sided
  - boolean
readonly: null
---

# IAppearanceSetting.DoubleSided

Gets or sets whether to enable shading from both sides of a surface when rendering a model using a ray-trace rendering engine.

## Signature

```csharp
System.Boolean DoubleSided {get; set;}
```
## Parameters

None.

## Return Value

True to enable shading from both sides, false to not

## Remarks

This method is only available when a ray-trace rendering engine is loaded.
NOTES:
When this property is disabled, surfaces that do not face the camera seem invisible.
Double-sided surfaces can cause rendering errors. Use sparingly.