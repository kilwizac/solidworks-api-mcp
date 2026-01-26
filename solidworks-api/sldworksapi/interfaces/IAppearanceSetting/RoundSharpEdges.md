---
type: property
interface: IAppearanceSetting
member: RoundSharpEdges
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - geometry
  - ui
related: []
keywords:
  - roundsharpedges
  - iappearancesetting
  - appearance
  - setting
  - round
  - sharp
  - edges
  - double
readonly: null
---

# IAppearanceSetting.RoundSharpEdges

Gets or sets the value by which to round sharp edges when rendering a model using a ray-trace rendering engine.

## Signature

```csharp
System.Double RoundSharpEdges {get; set;}
```
## Parameters

None.

## Return Value

Value by which to round sharp edges

## Remarks

This method:
is only available when a ray-trace rendering engine is loaded.
does not change model geometry.