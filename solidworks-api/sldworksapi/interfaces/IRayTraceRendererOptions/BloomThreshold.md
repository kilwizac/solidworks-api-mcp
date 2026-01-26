---
type: property
interface: IRayTraceRendererOptions
member: BloomThreshold
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IRayTraceRendererOptions.BloomEnabled
  - IRayTraceRendererOptions.BloomRadius
keywords:
  - bloomthreshold
  - iraytracerendereroptions
  - ray
  - trace
  - renderer
  - options
  - bloom
  - threshold
  - int32
  - render
  - model
  - vb
  - net
  - vba
readonly: null
---

# IRayTraceRendererOptions.BloomThreshold

Gets or sets the level of brightness or emissiveness to which bloom effect is applied.

## Signature

```csharp
System.Int32 BloomThreshold {get; set;}
```
## Parameters

None.

## Return Value

Brightness or emissiveness to which bloom effect is applied

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

- `IRayTraceRendererOptions.BloomEnabled`
- `IRayTraceRendererOptions.BloomRadius`