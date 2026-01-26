---
type: method
interface: IFeatureManager
member: InsertTableDrivenPattern
returns: Feature
parameters:
  -
    name: FileName
    type: System.String
    description: Name of the file that has the coordinates information; can be an empty string (see Remarks )
  -
    name: PointVar
    type: System.Object
    description: Array of x, y coordinates of the points (see Remarks )
  -
    name: UseCentrod
    type: System.Boolean
    description: True to use the centroid of the seed feature, face, or body; false to use another point as the reference point (see Remarks )
  -
    name: GeomPatt
    type: System.Boolean
    description: True to pattern the geometry, false to not
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related:
  - IFeatureManager.IInsertTableDrivenPattern
  - ITablePatternFeatureData
keywords:
  - inserttabledrivenpattern
  - ifeaturemanager
  - feature
  - manager
  - insert
  - table
  - driven
  - pattern
  - file
  - name
  - string
  - point
  - var
  - object
  - use
  - centrod
  - boolean
  - geom
  - patt
---

# IFeatureManager.InsertTableDrivenPattern

Obsolete. Superseded by IFeatureManager::InsertTableDrivenPattern2.

## Signature

```csharp
Feature InsertTableDrivenPattern( 
   System.String
FileName
,
   System.Object
PointVar
,
   System.Boolean
UseCentrod
,
   System.Boolean
GeomPatt
)
```
## Parameters

- `FileName` (System.String): Name of the file that has the coordinates information; can be an empty string (see Remarks )
- `PointVar` (System.Object): Array of x, y coordinates of the points (see Remarks )
- `UseCentrod` (System.Boolean): True to use the centroid of the seed feature, face, or body; false to use another point as the reference point (see Remarks )
- `GeomPatt` (System.Boolean): True to pattern the geometry, false to not

## Return Value

Feature

## Remarks

Specify:
coordinates for the input points in system units in a
.sldptab
or
.txt
file for FileName.
- or -
input points in system units in PointVar. Because each point has two coordinates (x, y), the size of PointVar is (2 x number_of_points).
This method requires selecting the input entities using these selection marks:
4 = Seed feature
16 = Coordinate system
32 = Reference point
128 = Seed face
256 = Seed body
If UseCentrod is false, then you must specify a reference point.
See the SOLIDWORKS Help for more information about table-driven patterns.

## See Also

- `IFeatureManager.IInsertTableDrivenPattern`
- `ITablePatternFeatureData`