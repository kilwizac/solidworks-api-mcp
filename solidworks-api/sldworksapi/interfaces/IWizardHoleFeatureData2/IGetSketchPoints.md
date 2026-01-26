---
type: method
interface: IWizardHoleFeatureData2
member: IGetSketchPoints
returns: SketchPoint
parameters:
  -
    name: NCount
    type: System.Int32
    description: Number of center-hole sketch points
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - sketches
related:
  - IWizardHoleFeatureData2.GetSketchPoints
keywords:
  - holes
  - see
  - also
  - isimpleholefeaturedata2
  - iwizardholefeaturedata2
  - interfaces
  - sketch
  - points
  - igetsketchpoints
  - wizard
  - hole
  - feature
  - data2
  - count
  - int32
  - point
---

# IWizardHoleFeatureData2.IGetSketchPoints

Gets the center-hole sketch points in this Hole Wizard feature.

## Signature

```csharp
SketchPoint IGetSketchPoints( 
   System.Int32
NCount
)
```
## Parameters

- `NCount` (System.Int32): Number of center-hole sketch points

## Return Value

Array of center-hole sketch points

## Remarks

Before calling this method, call
IWizardHoleFeatureData2::GetSketchPointCount
to get NCount.
To add or remove sketch points in a Hole Wizard feature sketch (also called a location sketch), you must edit the sketch. After editing the sketch, update the Hole Wizard feature by calling
IModelDoc2::ForceRebuild3
.

## See Also

- `IWizardHoleFeatureData2.GetSketchPoints`