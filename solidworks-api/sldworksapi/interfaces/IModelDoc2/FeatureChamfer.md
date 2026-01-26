---
type: method
interface: IModelDoc2
member: FeatureChamfer
returns: void
parameters:
  -
    name: Width
    type: System.Double
    description: Width of the chamfer in meters
  -
    name: Angle
    type: System.Double
    description: Angle of the chamfer
  -
    name: Flip
    type: System.Boolean
    description: 0 if angle is to be measured from the right face 1 if angle is to be measured from the left face
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - features
  - ui
related:
  - IChamferFeatureData2
keywords:
  - chamfers
  - see
  - also
  - ichamferfeaturedata2
  - feature
  - ifeature
  - chamfer
  - featurechamfer
  - imodeldoc2
  - model
  - doc2
  - width
  - double
  - angle
  - flip
  - boolean
  - void
---

# IModelDoc2.FeatureChamfer

Creates a chamfer feature.

## Signature

```csharp
void FeatureChamfer( 
   System.Double
Width
,
   System.Double
Angle
,
   System.Boolean
Flip
)
```
## Parameters

- `Width` (System.Double): Width of the chamfer in meters
- `Angle` (System.Double): Angle of the chamfer
- `Flip` (System.Boolean): 0 if angle is to be measured from the right face 1 if angle is to be measured from the left face

## Return Value

Unknown.

## See Also

- `IChamferFeatureData2`