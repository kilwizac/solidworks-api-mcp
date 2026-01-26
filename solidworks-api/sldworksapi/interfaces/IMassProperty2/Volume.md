---
type: property
interface: IMassProperty2
member: Volume
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - volume
  - imassproperty2
  - mass
  - property2
  - double
readonly: true
---

# IMassProperty2.Volume

Gets the volume of selected components/bodies.

## Signature

```csharp
System.Double Volume {get;}
```
## Parameters

None.

## Return Value

Volume

## Remarks

If
IMassProperty2::IncludeHiddenBodiesOrComponents
is reset, then call
IMassProperty2::Recalculate
before using this property.

## Examples

- IMassProperty2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMassProperty2)