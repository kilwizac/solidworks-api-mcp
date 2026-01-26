---
type: property
interface: IMassProperty2
member: SurfaceArea
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - surfacearea
  - imassproperty2
  - mass
  - property2
  - surface
  - area
  - double
readonly: true
---

# IMassProperty2.SurfaceArea

Gets the surface area of selected components/bodies.

## Signature

```csharp
System.Double SurfaceArea {get;}
```
## Parameters

None.

## Return Value

Surface area

## Remarks

If
IMassProperty2::IncludeHiddenBodiesOrComponents
is reset, then call
IMassProperty2::Recalculate
before using this property.

## Examples

- IMassProperty2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMassProperty2)