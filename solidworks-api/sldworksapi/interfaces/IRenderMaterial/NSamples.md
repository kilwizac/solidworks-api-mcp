---
type: property
interface: IRenderMaterial
member: NSamples
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - nsamples
  - irendermaterial
  - render
  - material
  - samples
  - double
readonly: null
---

# IRenderMaterial.NSamples

Gets or sets the number of samples used to calculate the contribution of the glossy component for illuminating the appearance.

## Signature

```csharp
System.Double NSamples {get; set;}
```
## Parameters

None.

## Return Value

Number of samples used to calculate the contribution of the glossy component

## Remarks

Increasing the sampling rate reduces artifacts but reduces performance. This property is available when the type of material is Satin Finish, Accurate reflections is selected, and Glossy is non-zero.