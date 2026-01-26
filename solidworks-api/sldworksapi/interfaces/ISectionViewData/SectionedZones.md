---
type: property
interface: ISectionViewData
member: SectionedZones
returns: System.Int32
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
  - sectionedzones
  - isectionviewdata
  - view
  - data
  - sectioned
  - zones
  - int32
  - selectively
  - transparently
  - vb
  - net
  - vba
readonly: null
---

# ISectionViewData.SectionedZones

Gets or sets the intersection zones that define how to section this section view.

## Signature

```csharp
System.Int32 SectionedZones {get; set;}
```
## Parameters

None.

## Return Value

Intersection zones as defined in swZonalSectionViewZones_e (see Remarks )

## Remarks

In the SOLIDWORKS API, zones are defined by the intersections of the sectioning planes. This table describes the intersection zones and the enumerators to which they correspond.
Number of sectioning planes
Zones
Intersection zones
swZonalSectionViewZones_e enumerators
1
1
Front side of sectioning plane 1
swZonalSectionViewZones_swZonalSectionViewZone_1
2
Back side of sectioning plane 2
swZonalSectionViewZones_swZonalSectionViewZone_2
2
1
Front side of sectioning plane 1
Front side of sectioning plane 2
swZonalSectionViewZones_swZonalSectionViewZone_1
2
Back side of sectioning plane 1
Front side of sectioning plane 2
swZonalSectionViewZones_swZonalSectionViewZone_2
3
Front side of sectioning plane 1
Back side of sectioning plane 2
swZonalSectionViewZones_swZonalSectionViewZone_3
4
Back side of sectioning plane 1
Back side of sectioning plane 2
swZonalSectionViewZones_swZonalSectionViewZone_4
3
1
Front side of sectioning plane 1
Front side of sectioning plane 2
Front side of sectioning plane 3
swZonalSectionViewZones_swZonalSectionViewZone_1
2
Back side of sectioning plane 1
Front side of sectioning plane 2
Front side of sectioning plane 3
swZonalSectionViewZones_swZonalSectionViewZone_2
3
Front side of sectioning plane 1
Back side of sectioning plane 2
Front side of sectioning plane 3
swZonalSectionViewZones_swZonalSectionViewZone_3
4
Back side of sectioning plane 1
Back side of sectioning plane 2
Front side of sectioning plane 3
swZonalSectionViewZones_swZonalSectionViewZone_4
5
Front side of sectioning plane 1
Front side of sectioning plane 2
Back side of sectioning plane 3
swZonalSectionViewZones_swZonalSectionViewZone_5
6
Back side of sectioning plane 1
Front side of sectioning plane 2
Back side of sectioning plane 3
swZonalSectionViewZones_swZonalSectionViewZone_6
7
Front side of sectioning plane 1
Back side of sectioning plane 2
Back side of sectioning plane 3
swZonalSectionViewZones_swZonalSectionViewZone_7
8
Back side of sectioning plane 1
Back side of sectioning plane 2
Back side of sectioning plane 3
swZonalSectionViewZones_swZonalSectionViewZone_8
This property is only available if
ISectionViewData::ZonalSection
is true.

## Examples

- Selectively and Transparently Section a Section View (C#) (Selectively_and_Transparently_Section_a_Section_View_Example_CSharp.htm)
- Selectively and Transparently Section a Section View (VB.NET) (Selectively_and_Transparently_Section_a_Section_View_Example_VBNET.htm)
- Selectively and Transparently Section a Section View (VBA) (Selectively_and_Transparently_Section_a_Section_View_Example_VB.htm)