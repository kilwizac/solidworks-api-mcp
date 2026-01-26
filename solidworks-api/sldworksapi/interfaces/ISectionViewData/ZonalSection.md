---
type: property
interface: ISectionViewData
member: ZonalSection
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - ui
related: []
keywords:
  - section
  - views
  - see
  - also
  - idrsection
  - zonal
  - planar
  - zonalsection
  - isectionviewdata
  - view
  - data
  - boolean
  - selectively
  - transparently
  - vb
  - net
  - vba
readonly: null
---

# ISectionViewData.ZonalSection

Gets or sets whether the section method is zonal or planar.

## Signature

```csharp
System.Boolean ZonalSection {get; set;}
```
## Parameters

None.

## Return Value

True if the section method is zonal, false if it is planar

## Remarks

Call
ISectionViewData::SectionedZones
to specify the section zones.
ISectionViewData::ZonalSection must be true for
transparent sectioning
.
NOTE:
Zonal sectioning is only supported on graphics cards that support OpenGL 4.0; zonal sectioning is not supported in Software Only OpenGL.

## Examples

- Selectively and Transparently Section a Section View (C#) (Selectively_and_Transparently_Section_a_Section_View_Example_CSharp.htm)
- Selectively and Transparently Section a Section View (VB.NET) (Selectively_and_Transparently_Section_a_Section_View_Example_VBNET.htm)
- Selectively and Transparently Section a Section View (VBA) (Selectively_and_Transparently_Section_a_Section_View_Example_VB.htm)