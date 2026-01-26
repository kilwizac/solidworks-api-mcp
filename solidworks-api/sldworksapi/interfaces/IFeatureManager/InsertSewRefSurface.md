---
type: method
interface: IFeatureManager
member: InsertSewRefSurface
returns: Feature
parameters:
  -
    name: UseGapFilters
    type: System.Boolean
    description: True to use gap filters, false to not
  -
    name: TryToFormSolid
    type: System.Boolean
    description: True to form a solid body, false to no
  -
    name: MergeEntities
    type: System.Boolean
    description: True to merge edges and faces by removing redundant vertices and edges, false to not
  -
    name: KnitTolerance
    type: System.Double
    description: Knit tolerance (see Remarks )
  -
    name: MaxValueForGapRange
    type: System.Double
    description: Maximum value of gap range for gap filters
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISurfaceKnitFeatureData
keywords:
  - knit
  - surfaces
  - surface
  - see
  - also
  - isurface
  - insertsewrefsurface
  - ifeaturemanager
  - feature
  - manager
  - insert
  - sew
  - ref
  - use
  - gap
  - filters
  - boolean
  - try
  - form
  - solid
  - merge
  - entities
  - tolerance
  - double
  - max
  - value
  - range
  - create
  - vb
  - net
  - vba
---

# IFeatureManager.InsertSewRefSurface

Creates a surface by knitting the selected surfaces together.

## Signature

```csharp
Feature InsertSewRefSurface( 
   System.Boolean
UseGapFilters
,
   System.Boolean
TryToFormSolid
,
   System.Boolean
MergeEntities
,
   System.Double
KnitTolerance
,
   System.Double
MaxValueForGapRange
)
```
## Parameters

- `UseGapFilters` (System.Boolean): True to use gap filters, false to not
- `TryToFormSolid` (System.Boolean): True to form a solid body, false to no
- `MergeEntities` (System.Boolean): True to merge edges and faces by removing redundant vertices and edges, false to not
- `KnitTolerance` (System.Double): Knit tolerance (see Remarks )
- `MaxValueForGapRange` (System.Double): Maximum value of gap range for gap filters

## Return Value

Feature

## Remarks

Make selections using
IModelDocExtension::SelectByID2
with a mark number of 1. S
ee the SOLIDWORKS Help for information about what entities are valid for selection.
A knit tolerance's:
lower limit is 0.0001 mm
upper limit is 0.1 mm
The knit tolerance value should be in a gap range such that:
(Minimum gap) <= (Knit tolerance) <= MIN(0.1 mm, Maximum gap)

## Examples

- Create Surface Knit Feature (VB.NET) (Create_Surface_Knit_Feature_Example_VBNET.htm)
- Create Surface Knit Feature (VBA) (Create_Surface_Knit_Feature_Example_VB6.htm)
- Create Surface Knit Feature (C#) (Create_Surface_Knit_Feature_Example_CSharp.htm)

## See Also

- `ISurfaceKnitFeatureData`