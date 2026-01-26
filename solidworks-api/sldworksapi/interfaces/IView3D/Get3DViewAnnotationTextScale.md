---
type: method
interface: IView3D
member: Get3DViewAnnotationTextScale
returns: void
parameters:
  -
    name: Scale1
    type: System.Double
    description: Numerator of the scale ratio ( n :n)
  -
    name: Scale2
    type: System.Double
    description: Denominator of the scale ratio (n: n )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - drawings
  - ui
related: []
keywords:
  - get3dviewannotationtextscale
  - iview3d
  - view3
  - get3
  - view
  - annotation
  - text
  - scale
  - scale1
  - double
  - scale2
  - void
---

# IView3D.Get3DViewAnnotationTextScale

Gets the annotation text scale for this 3D View.

## Signature

```csharp
void Get3DViewAnnotationTextScale( 
   out System.Double
Scale1
,
   out System.Double
Scale2
)
```
## Parameters

- `Scale1` (System.Double): Numerator of the scale ratio ( n :n)
- `Scale2` (System.Double): Denominator of the scale ratio (n: n )

## Return Value

Unknown.

## Remarks

This method gets the
Text scale
on the Annotation Properties dialog that appears when you RMB on the Annotations folder in the FeatureManager design tree.