---
type: method
interface: IModelDoc2
member: InsertMidSurfaceExt
returns: System.Object
parameters:
  -
    name: Placement
    type: System.Double
    description: Value from -1 to 1 that indicates the desired location of the midsurface relative to the face pair; a value of 0.0 places the midsurface equally between the face pair
  -
    name: KnitFlag
    type: System.Boolean
    description: True to sew all the reference surfaces (neutral sheets) into a single sheet(surface) body, false for the midsurface feature to contain individual reference surface geometry
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.IInsertMidSurfaceExt
keywords:
  - insertmidsurfaceext
  - imodeldoc2
  - model
  - doc2
  - insert
  - mid
  - surface
  - ext
  - placement
  - double
  - knit
  - flag
  - boolean
  - object
---

# IModelDoc2.InsertMidSurfaceExt

Obsolete. Superseded by IFeatureManager::InsertMidSurface.

## Signature

```csharp
System.Object InsertMidSurfaceExt( 
   System.Double
Placement
,
   System.Boolean
KnitFlag
)
```
## Parameters

- `Placement` (System.Double): Value from -1 to 1 that indicates the desired location of the midsurface relative to the face pair; a value of 0.0 places the midsurface equally between the face pair
- `KnitFlag` (System.Boolean): True to sew all the reference surfaces (neutral sheets) into a single sheet(surface) body, false for the midsurface feature to contain individual reference surface geometry

## Return Value

Mid-surface feature

## Remarks

A midsurface feature is calculated from the solid body in your part document. This method first finds all parallel pairs of faces from the part solid. For each pair of parallel faces found, it creates a neutral reference surface between the two faces. The placement position of the reference surface is controlled by the placement parameter. This process repeats itself until all parallel body faces are processed. At the end of this process, all the reference surfaces are sewn into a single reference surface if knitFlag is set to True.
The hierarchy of a midsurface feature is:
A midsurface feature contains one or more reference surfaces. If sewn successfully using the knitFlag = True option, then the midsurface feature contains only one reference surface. Each reference surface is considered a sheet body. The sheet body has the normal topology that you would expect to find on a body object (for example, faces, edges, and so on). See the
IMidSurface2
object for methods that provide access to this topology.

## See Also

- `IModelDoc2.IInsertMidSurfaceExt`