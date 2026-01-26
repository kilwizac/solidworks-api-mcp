---
type: method
interface: IFeatureManager
member: InsertTableDrivenPattern2
returns: Feature
parameters:
  -
    name: FileName
    type: System.String
    description: Name of the file that has the coordinates for the table-driven pattern; can be an empty string (see Remarks )
  -
    name: PointVar
    type: System.Object
    description: Array of x, y coordinates of the points for the table-driven pattern (see Remarks )
  -
    name: UseCentroid
    type: System.Boolean
    description: True to use the centroid of the seed feature, face, or body; false to use a different point as the reference point (see Remarks )
  -
    name: GeomPattern
    type: System.Boolean
    description: True to pattern the geometry, false to not
  -
    name: PropVisProps
    type: System.Boolean
    description: True to propagate visual properties, false to not
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related: []
keywords:
  - inserttabledrivenpattern2
  - ifeaturemanager
  - feature
  - manager
  - insert
  - table
  - driven
  - pattern2
  - file
  - name
  - string
  - point
  - var
  - object
  - use
  - centroid
  - boolean
  - geom
  - pattern
  - prop
  - vis
  - props
---

# IFeatureManager.InsertTableDrivenPattern2

Obsolete. See IFeatureManager::CreateFeature and the Remarks in ITablePatternFeatureData.

## Signature

```csharp
Feature InsertTableDrivenPattern2( 
   System.String
FileName
,
   System.Object
PointVar
,
   System.Boolean
UseCentroid
,
   System.Boolean
GeomPattern
,
   System.Boolean
PropVisProps
)
```
## Parameters

- `FileName` (System.String): Name of the file that has the coordinates for the table-driven pattern; can be an empty string (see Remarks )
- `PointVar` (System.Object): Array of x, y coordinates of the points for the table-driven pattern (see Remarks )
- `UseCentroid` (System.Boolean): True to use the centroid of the seed feature, face, or body; false to use a different point as the reference point (see Remarks )
- `GeomPattern` (System.Boolean): True to pattern the geometry, false to not
- `PropVisProps` (System.Boolean): True to propagate visual properties, false to not

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
Input entity
Mark
Seed feature
4
Coordinate system
16
Reference point
32
Seed face
128
Seed body
256
If UseCentroid is false, then you must specify a reference point.
See the SOLIDWORKS Help for more information about table-driven patterns.