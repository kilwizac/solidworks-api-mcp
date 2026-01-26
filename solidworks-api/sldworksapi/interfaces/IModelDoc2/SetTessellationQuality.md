---
type: method
interface: IModelDoc2
member: SetTessellationQuality
returns: void
parameters:
  -
    name: QualityNum
    type: System.Int32
    description: 0 < Shaded-display image quality number < 106 (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.GetTessellationQuality
keywords:
  - tessellation
  - see
  - also
  - itessellation
  - quality
  - image
  - settessellationquality
  - imodeldoc2
  - model
  - doc2
  - num
  - int32
  - void
---

# IModelDoc2.SetTessellationQuality

Sets the shaded-display image quality number for the current document.

## Signature

```csharp
void SetTessellationQuality( 
   System.Int32
QualityNum
)
```
## Parameters

- `QualityNum` (System.Int32): 0 < Shaded-display image quality number < 106 (see Remarks )

## Return Value

Unknown.

## Remarks

QualityNum is the degree of tessellation of curved surfaces for shaded rendering output.
Tools > Options > Document Properties > Image Quality
includes a field that sets the maximum chordal deviation. QualityNum and the maximum chordal deviation (in meters) are coupled and inversely proportional as follows:
var
=
TessMin
+
QualityNum
*((
TessMax
-
TessMin
)/100)
Deviation
= 0.025 * (
BodyDiameter
* 2) /
var
;
where:
TessMin
= 6
TessMax
= 166
0 <
QualityNum
< 106
BodyDiameter
is the diagonal distance across the bounds of the part box. See
IPartDoc::GetPartBox
or
IPartDoc::IGetPartBox
for more information.
There are two ways to set the image quality for assemblies using the API. You can either:
Call this method
- or -
Set
swUserPreferenceIntegerValue_e
.swImageQualityShaded
Set
swUserPreferenceDoubleValue_e
.swImageQualityShadedDeviation
Before doing either, you must set
swUserPreferenceToggle_e
.swImageQualityApplyToAllReferencedPartDoc to true in order to affect the image quality of the assembly.
Call
IModelView::GraphicsRedraw
after calling this method to update the part.
NOTE:
Setting the degree of tessellation to a higher value results in:
finer tessellation,
increased file size,
slower graphics performance, and
increased memory usage.

## See Also

- `IModelDoc2.GetTessellationQuality`