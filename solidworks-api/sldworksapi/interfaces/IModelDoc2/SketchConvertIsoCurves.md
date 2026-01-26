---
type: method
interface: IModelDoc2
member: SketchConvertIsoCurves
returns: void
parameters:
  -
    name: PercentRatio
    type: System.Double
    description: Value for percent ratio
  -
    name: VORuDir
    type: System.Boolean
    description: True for V direction, false for UDirection
  -
    name: DoConstrain
    type: System.Boolean
    description: True if you want to constrain these new sketch entities, false if not
  -
    name: SkipHoles
    type: System.Boolean
    description: True if you want to skip the holes in this surface, false if not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - sketches
  - ui
related: []
keywords:
  - constraints
  - relations
  - sketch
  - see
  - also
  - isketch
  - sketchconvertisocurves
  - imodeldoc2
  - model
  - doc2
  - convert
  - iso
  - curves
  - percent
  - ratio
  - double
  - vo
  - ru
  - dir
  - boolean
  - do
  - constrain
  - skip
  - holes
  - void
  - divide
  - surface
  - 3d
  - sketches
  - vba
  - vb
  - net
---

# IModelDoc2.SketchConvertIsoCurves

Converts ISO-parametric curves on a selected surface into a sketch entity.

## Signature

```csharp
void SketchConvertIsoCurves( 
   System.Double
PercentRatio
,
   System.Boolean
VORuDir
,
   System.Boolean
DoConstrain
,
   System.Boolean
SkipHoles
)
```
## Parameters

- `PercentRatio` (System.Double): Value for percent ratio
- `VORuDir` (System.Boolean): True for V direction, false for UDirection
- `DoConstrain` (System.Boolean): True if you want to constrain these new sketch entities, false if not
- `SkipHoles` (System.Boolean): True if you want to skip the holes in this surface, false if not

## Return Value

Unknown.

## Examples

- Divide Surface into 3D Sketches (VBA) (Divide_Surface_into_3D_Sketches_Example_VB.htm)
- Convert Curves into 3D Sketches (C#) (Convert_Curves_into_3D_Sketches_Example_CSharp.htm)
- Convert Curves into 3D Sketches (VB.NET) (Convert_Curves_into_3D_Sketches_Example_VBNET.htm)
- Convert Curves into 3D Sketches (VBA) (Convert_Curves_into_3D_Sketches_Example_VB.htm)