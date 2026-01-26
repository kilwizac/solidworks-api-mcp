---
type: property
interface: IRayTraceRendererOptions
member: BloomEnabled
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IRayTraceRendererOptions.BloomRadius
  - IRayTraceRendererOptions.BloomThreshold
keywords:
  - bloomenabled
  - iraytracerendereroptions
  - ray
  - trace
  - renderer
  - options
  - bloom
  - enabled
  - boolean
  - render
  - model
  - vb
  - net
  - vba
readonly: null
---

# IRayTraceRendererOptions.BloomEnabled

Gets or sets whether to enable bloom effect.

## Signature

```csharp
System.Boolean BloomEnabled {get; set;}
```
## Parameters

None.

## Return Value

True if bloom effect is enabled, false if not

## Remarks

Bloom effect is visible in the
final rendering
only, not in the
preview
. See the SOLIDWORKS Help for details about bloom effect.

## Examples

- Render Model (C#) (Render_Model_Example_CSharp.htm)
- Render Model (VB.NET) (Render_Model_Example_VBNET.htm)
- Render Model (VBA) (Render_Model_Example_VB.htm)

## See Also

- `IRayTraceRendererOptions.BloomRadius`
- `IRayTraceRendererOptions.BloomThreshold`