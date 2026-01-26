---
type: method
interface: IModelDoc2
member: GetTessellationQuality
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related: []
keywords:
  - image
  - quality
  - tessellation
  - see
  - also
  - itessellation
  - gettessellationquality
  - imodeldoc2
  - model
  - doc2
  - int32
---

# IModelDoc2.GetTessellationQuality

Gets the shaded-display image quality number for the current document.

## Signature

```csharp
System.Int32 GetTessellationQuality()
```
## Parameters

None.

## Return Value

0 < Shaded-display image quality number < 106 (see Remarks )

## Remarks

This method returns a number (
QualityNum
) that corresponds to the degree of tessellation of curved surfaces for shaded rendering output.
Tools > Options > Document Properties > Image Quality
includes a field that sets the maximum chordal deviation.
QualityNum
and the maximum chordal deviation (in meters) are coupled and inversely proportional as follows:
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
(returned by this method) < 106
BodyDiameter
is the diagonal distance across the bounds of the part box. See
IPartDoc::GetPartBox
or
IPartDoc::IGetPartBox
for more information.
You can also get the maximum chordal deviation using
swUserPreferencesDouble_e
.swImageQualityShadedDeviation.
To get the image quality number, use
swUserPreferenceInteger_e
.swImageQualityShaded.
NOTE:
Setting the degree of tessellation
to a higher value results in:
finer tessellation,
increased file size,
slower graphics performance, and
increased memory usage.