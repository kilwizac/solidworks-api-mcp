---
type: method
interface: IFeatureManager
member: InsertSheetMetalLoftedBend2
returns: Feature
parameters:
  -
    name: ThickDirType
    type: System.Int32
    description: Toggles the thickening direction: 0 = outside 1 = inside (default value)
  -
    name: Thickness
    type: System.Double
    description: Thickness of the bend
  -
    name: BFormed
    type: System.Boolean
    description: True to insert a formed lofted bend; false to insert a bent lofted bend (default)
  -
    name: DRadius
    type: System.Double
    description: Bend radius; valid only if BFormed is false
  -
    name: BReferToEndPoint
    type: System.Boolean
    description: True to calculate facet transitions using theoretical vertexes, false to calculate facet transitions using the smallest possible arcs that avoid interference between bend areas; valid only if BFormed is false
  -
    name: EFacetOption
    type: System.Int32
    description: Faceting option as defined in swLoftedBendFacetOptions_e ; valid only if BFormed is false
  -
    name: DChordTol
    type: System.Double
    description: Chord tolerance or maximum distance between the arc and linear segment of a chord; valid only if EFacetOption is set to swLoftedBendFacetOptions_e.swChordTolerance and BFormed is false
  -
    name: INumBends
    type: System.Int32
    description: Maximum number of bends per transition segment; valid only if EFacetOption is set to swLoftedBendFacetOptions_e.swBendsPerTransitionSegment and BFormed is false
  -
    name: DSegLength
    type: System.Double
    description: Maximum length of the linear segment; valid only if EFacetOption is set to swLoftedBendFacetOptions_e.swSegmentLength and BFormed is false
  -
    name: DSegAngle
    type: System.Double
    description: Maximum angle between adjacent linear segments; valid only if EFacetOption is set to swLoftedBendFacetOptions_e.swSegmentAngle and BFormed is false
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILoftFeatureData
  - ILoftedBendsFeatureData
  - ISheetMetalFeatureData
keywords:
  - sheet
  - metal
  - see
  - also
  - isheetmetalfeaturedata
  - lofted
  - bends
  - feature
  - ifeature
  - iloftedbendsfeaturedata
  - insertsheetmetalloftedbend2
  - ifeaturemanager
  - manager
  - insert
  - bend2
  - thick
  - dir
  - type
  - int32
  - thickness
  - double
  - formed
  - boolean
  - radius
  - refer
  - end
  - point
  - facet
  - option
  - chord
  - tol
  - num
  - seg
  - length
  - angle
  - bend
  - vba
  - vb
  - net
---

# IFeatureManager.InsertSheetMetalLoftedBend2

Inserts a lofted bend in a sheet metal part.

## Signature

```csharp
Feature InsertSheetMetalLoftedBend2( 
   System.Int32
ThickDirType
,
   System.Double
Thickness
,
   System.Boolean
BFormed
,
   System.Double
DRadius
,
   System.Boolean
BReferToEndPoint
,
   System.Int32
EFacetOption
,
   System.Double
DChordTol
,
   System.Int32
INumBends
,
   System.Double
DSegLength
,
   System.Double
DSegAngle
)
```
## Parameters

- `ThickDirType` (System.Int32): Toggles the thickening direction: 0 = outside 1 = inside (default value)
- `Thickness` (System.Double): Thickness of the bend
- `BFormed` (System.Boolean): True to insert a formed lofted bend; false to insert a bent lofted bend (default)
- `DRadius` (System.Double): Bend radius; valid only if BFormed is false
- `BReferToEndPoint` (System.Boolean): True to calculate facet transitions using theoretical vertexes, false to calculate facet transitions using the smallest possible arcs that avoid interference between bend areas; valid only if BFormed is false
- `EFacetOption` (System.Int32): Faceting option as defined in swLoftedBendFacetOptions_e ; valid only if BFormed is false
- `DChordTol` (System.Double): Chord tolerance or maximum distance between the arc and linear segment of a chord; valid only if EFacetOption is set to swLoftedBendFacetOptions_e.swChordTolerance and BFormed is false
- `INumBends` (System.Int32): Maximum number of bends per transition segment; valid only if EFacetOption is set to swLoftedBendFacetOptions_e.swBendsPerTransitionSegment and BFormed is false
- `DSegLength` (System.Double): Maximum length of the linear segment; valid only if EFacetOption is set to swLoftedBendFacetOptions_e.swSegmentLength and BFormed is false
- `DSegAngle` (System.Double): Maximum angle between adjacent linear segments; valid only if EFacetOption is set to swLoftedBendFacetOptions_e.swSegmentAngle and BFormed is false

## Return Value

IFeature

## Remarks

Before calling this method, you must select at least two sketch profiles that are on parallel planes. You can either multi-select them in the graphics area or call
IModelDocExtension::SelectByID2
with Mark = 1 for each sketch profile you want to select.

## Examples

- Insert Lofted Bend Feature (VBA) (Insert_Lofted_Bend_Feature_Example_VB.htm)
- Insert Lofted Bend Feature (VB.NET) (Insert_Lofted_Bend_Feature_Example_VBNET.htm)
- Insert Lofted Bend Feature (C#) (Insert_Lofted_Bend_Feature_Example_CSharp.htm)

## See Also

- `ILoftFeatureData`
- `ILoftedBendsFeatureData`
- `ISheetMetalFeatureData`