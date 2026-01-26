---
type: property
interface: IRayTraceRendererOptions
member: BloomRadius
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IRayTraceRendererOptions.BloomEnabled
  - IRayTraceRendererOptions.BloomThreshold
keywords:
  - bloomradius
  - iraytracerendereroptions
  - ray
  - trace
  - renderer
  - options
  - bloom
  - radius
  - int32
  - render
  - model
  - vb
  - net
  - vba
readonly: null
---

# IRayTraceRendererOptions.BloomRadius

Gets or sets the the distance bloom radiates from source.

## Signature

```csharp
System.Int32 BloomRadius {get; set;}
```
## Parameters

None.

## Return Value

Distance bloom radiates from source

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
- `IRayTraceRendererOptions.BloomThreshold`