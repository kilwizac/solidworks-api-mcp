---
type: property
interface: IMassProperty2
member: Density
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - density
  - imassproperty2
  - mass
  - property2
  - double
readonly: true
---

# IMassProperty2.Density

Gets the density of selected components/bodies.

## Signature

```csharp
System.Double Density {get;}
```
## Parameters

None.

## Return Value

Density

## Remarks

If the density varies across components in a model:
Density = ( Mass / Volume )
If
IMassProperty2::IncludeHiddenBodiesOrComponents
is reset, then call
IMassProperty2::Recalculate
before using this property.

## Examples

- IMassProperty2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMassProperty2)